import React from 'react';
import { User } from '../../types';
import * as S from './styles';

// Props do componente
interface UserProfileProps {
  user: User; // Dados do usuário a serem exibidos
}

/**
 * Componente para exibir o perfil do usuário
 * Mostra avatar, nome, username, biografia e link para o GitHub
 */
const UserProfile: React.FC<UserProfileProps> = ({ user }) => {
  return (
    <S.ProfileContainer>
      {/* Seção do avatar */}
      <S.AvatarContainer>
        <S.Avatar src={user.avatar_url} alt={`${user.login}'s avatar`} />
      </S.AvatarContainer>

      {/* Seção de informações */}
      <S.InfoContainer>
        {/* Nome do usuário (usa login se name não estiver disponível) */}
        <S.Name>{user.name || user.login}</S.Name>

        {/* Username com @ */}
        <S.Username>@{user.login}</S.Username>

        {/* Biografia (renderização condicional) */}
        {user.bio && <S.Bio>{user.bio}</S.Bio>}

        {/* Link para o perfil no GitHub */}
        <S.GithubLink href={user.html_url} target="_blank" rel="noopener noreferrer">
          Visit GitHub Profile
        </S.GithubLink>
      </S.InfoContainer>
    </S.ProfileContainer>
  );
};

export default UserProfile;