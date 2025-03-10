import React from 'react';
import { Repository } from '../../types';
import * as S from './styles';

// Props do componente
interface RepoCardProps {
  repo: Repository;
  onClick?: () => void;
}

/**
 * The `RepoCard` function is a React component that displays information about a repository and
 * includes a link to view the repository.
 * @param  - The `RepoCard` component is a functional React component that renders a card displaying
 * information about a repository. It takes two props:
 * @returns The `RepoCard` component is being returned. It is a functional component in React that
 * displays information about a repository (`repo`) and includes a clickable card container with the
 * repository name, visibility, description, language, and a link to view the repository on GitHub. The
 * `onClick` prop is used to handle click events on the card container.
 */
const RepoCard: React.FC<RepoCardProps> = ({ repo, onClick }) => {
  return (
    <S.CardContainer onClick={onClick}>
      <S.CardHeader>
        <S.RepoName>{repo.name}</S.RepoName>
        <S.RepoVisibility>{repo.visibility}</S.RepoVisibility>
      </S.CardHeader>

      <S.CardBody>
        <S.RepoDescription>{repo.description}</S.RepoDescription>
        <S.RepoLanguage>{repo.language}</S.RepoLanguage>
      </S.CardBody>

      <S.CardFooter>
        <S.RepoLink href={repo.html_url} target="_blank" rel="noopener noreferrer">
          View Repository
        </S.RepoLink>
      </S.CardFooter>
    </S.CardContainer>
  );
};

export default RepoCard;