import React from 'react';
import * as S from './styles';
import LogoAzul from '../../assets/WTech_Logo_Azul.svg';


/**
 * The `Header` function is a React functional component that renders a header with a logo image.
 * @returns The `Header` component is being returned, which is a functional component in React. It
 * renders a header container with a logo image inside a content container.
 */
const Header: React.FC = () => {
  return (
    <S.HeaderContainer>
      <S.ContentContainer>
        <S.LogoWrapper>
          <a href="/" title="Go to Home">
            <S.LogoImage src={LogoAzul} alt="W-Tech Logo" />
          </a>
        </S.LogoWrapper>
      </S.ContentContainer>
    </S.HeaderContainer>
  );
};

export default Header;