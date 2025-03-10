/**
 * The `SearchForm` component in TypeScript React handles user input validation and API requests to
 * search for a GitHub user and display any errors encountered.
 * @param {string} username - The code you provided is a React component called `SearchForm` that
 * allows users to input a GitHub username, verifies its existence, and then redirects to a page
 * displaying the user's repositories if the user exists on GitHub.
 * @returns The `SearchForm` component is being returned. It is a functional component in React that
 * handles searching for a GitHub user by username. The component includes form input fields for
 * entering the username, a search button, and error handling for displaying messages related to the
 * search process. The component also makes API calls to GitHub to check for the existence of the user
 * and fetch their repositories.
 */
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import * as S from './styles';
import ErrorMessage from '../ErrorMessage';

interface SearchFormProps {
  onSearch: (isLoading: boolean) => void;
}

interface GitHubErrorResponse {
  message: string;
  documentation_url: string;
}

interface FormData {
  username: string;
}

const checkGitHubUser = async (username: string) => {
  try {
    const response = await fetch(`https://api.github.com/users/${username}`);

    if (!response.ok) {
      const errorData: GitHubErrorResponse = await response.json();
      return {
        exists: false,
        status: response.status,
        message: errorData.message,
        documentation_url: errorData.documentation_url
      };
    }

    const userData = await response.json();
    return {
      exists: true,
      data: userData
    };

  } catch (error) {
    console.error("Error checking GitHub user:", error);
    return {
      exists: false,
      status: 'error',
      message: 'Network error'
    };
  }
};

const SearchForm: React.FC<SearchFormProps> = ({ onSearch }) => {
  const {
    handleSubmit,
    clearErrors,
    setValue
  } = useForm<FormData>({
    defaultValues: {
      username: ''
    }
  });

  const [error, setError] = useState<string | null>(null);
  const [isVerifying, setIsVerifying] = useState(false);
  const [inputValue, setInputValue] = useState('');
  const navigate = useNavigate();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = e.target.value;
    setInputValue(newValue);
    setError(null);

    clearErrors('username');

    setValue('username', newValue, { shouldValidate: false });
  };

  const onSubmit = async (data: FormData) => {
    const { username } = data;

    if (!username.trim()) {
      return;
    }

    const githubUsernameRegex = /^[a-zA-Z0-9](?:[a-zA-Z0-9]|-(?=[a-zA-Z0-9])){0,38}$/;
    if (!githubUsernameRegex.test(username)) {
      setError('Invalid GitHub username format');
      return;
    }

    setError(null);
    setIsVerifying(true);
    onSearch(true);

    try {
      const result = await checkGitHubUser(username);

      if (!result.exists) {
        if (result.status === 404) {
          setError('GitHub user does not exist');
        } else if (result.status === 403) {
          setError('GitHub API rate limit exceeded');
        } else {
          setError(`Error: ${'Something went wrong'}`);
        }

        setIsVerifying(false);
        onSearch(false);
        return;
      }

      const reposResponse = await fetch(`https://api.github.com/users/${username}/repos`);
      if (!reposResponse.ok) {
        throw new Error("Failed to fetch repositories");
      }
      await reposResponse.json();

      navigate(`/user/${username}`);

    } catch (error) {
      console.error("Error during data fetching:", error);
      setError("An error occurred while loading data");
      setIsVerifying(false);
      onSearch(false);
    }
  };

  return (
    <S.FormContainer onSubmit={handleSubmit(onSubmit)}>
      <S.ErrorContainer>
        {error && <ErrorMessage message={error} onDismiss={() => setError(null)} />}
      </S.ErrorContainer>

      <S.InputContainer>
        <S.Label htmlFor="username">User</S.Label>
        <S.Input
          id="username"
          type="text"
          placeholder="Enter GitHub username"
          onChange={handleChange}
          value={inputValue}
          aria-label="GitHub username"
          disabled={isVerifying}
        />
      </S.InputContainer>

      <S.SearchButton
        type="submit"
        disabled={isVerifying || inputValue.trim() === ''}
      >
        {isVerifying ? (
          <S.ButtonLoadingContainer>
            <S.ButtonLoadingSpinner /> Searching...
          </S.ButtonLoadingContainer>
        ) : (
          'Search'
        )}
      </S.SearchButton>
    </S.FormContainer>
  );
};

export default SearchForm;