import React from 'react';
import { Repository } from '../../types';
import * as S from './styles';

// Props do componente
interface RepoModalProps {
  repo: Repository;
  isOpen: boolean;
  onClose: () => void;
}

/**
 * The `RepoModal` function is a React component that displays detailed information about a repository
 * in a modal when it is open.
 * @param  - The `RepoModal` component is a React functional component that displays information about
 * a repository. It takes three props:
 * @returns The `RepoModal` component is being returned. It displays modal content for a repository
 * including the repository name, link, privacy status, language, and description. The modal is
 * conditionally rendered based on the `isOpen` prop, and it can be closed using the `onClose`
 * function.
 */
const RepoModal: React.FC<RepoModalProps> = ({ repo, isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <S.ModalContent>
      <S.CloseButton onClick={onClose}>×</S.CloseButton>
      <S.ModalHeader>
        <S.ModalTitle>{repo.name}</S.ModalTitle>
      </S.ModalHeader>
      <S.ModalBody>
        <S.ModalField>
          <S.FieldLabel>Link:</S.FieldLabel>
          <S.FieldLink href={repo.html_url} target="_blank" rel="noopener noreferrer">
            {repo.html_url}
          </S.FieldLink>
        </S.ModalField>
        <S.ModalField>
          <S.FieldLabel>Privacy:</S.FieldLabel>
          <S.FieldValue>{(repo as any).private !== undefined ? ((repo as any).private ? 'Privado' : 'Público') : 'Não especificado'}
          </S.FieldValue>
        </S.ModalField>
        <S.ModalField>
          <S.FieldLabel>Language:</S.FieldLabel>
          <S.FieldValue>{repo.language || 'Não especificada'}</S.FieldValue>
        </S.ModalField>
        <S.ModalField>
          <S.FieldLabel>Description:</S.FieldLabel>
          <S.FieldValue>{repo.description || 'Sem descrição'}</S.FieldValue>
        </S.ModalField>
      </S.ModalBody>
    </S.ModalContent >
  );
};

export default RepoModal;