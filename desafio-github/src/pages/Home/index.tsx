import React, { useState } from 'react';
import SearchForm from '../../components/SearchForm';
import Loading from '../../components/Loading';
import * as S from './styles';
import Logo from '../../assets/Logo_W-Tech.svg';

/**
 * The `Home` component in a TypeScript React application renders a logo and a search form with loading
 * overlay functionality.
 * @returns The `Home` component is being returned. It contains a container with a logo, a form
 * container with a title, and a search form. If `isLoading` is true, a loading overlay with a loading
 * spinner is displayed.
 */
const Home: React.FC = () => {
  const [isLoading, setIsLoading] = useState(false);

  const handleSearch = (isLoading: boolean) => {
    setIsLoading(isLoading);
  };

  return (
    <S.Container>
      <S.LogoContainer>
        <S.Logo src={Logo} alt="WTech Logo" />
      </S.LogoContainer>
      <S.FormContainer>
        <S.Title>Enter</S.Title>
        {isLoading && (
          <S.LoadingOverlay>
            <Loading />
          </S.LoadingOverlay>
        )}
        <SearchForm onSearch={handleSearch} />
      </S.FormContainer>
    </S.Container>
  );
};

export default Home;