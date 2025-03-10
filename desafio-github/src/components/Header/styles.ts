import styled from 'styled-components';

/* The code snippet is defining a styled component named `HeaderContainer` using styled-components
library in TypeScript. This styled component represents the styling for a header element in a web
application. */
export const HeaderContainer = styled.header`
  background-color: #fff;
  height: 88px;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 1.875rem 0;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.08);

  @media (max-width: 768px) {
    height: 70px;
    padding: 1.5rem 0;
  }

  @media (max-width: 480px) {
    height: 60px;
    padding: 1.25rem 0;
  }
`;

export const ContentContainer = styled.div`
  width: 100%;
  max-width: 1200px;
  padding: 0 2rem;
  display: flex;
  align-items: center;

  @media (max-width: 768px) {
    padding: 0 1.5rem;
  }

  @media (max-width: 480px) {
    padding: 0 1rem;
  }
`;

export const LogoWrapper = styled.div`
  display: flex;
  align-items: center;
`;

export const LogoImage = styled.img`
  width: 152.813px;
  height: 26.761px;

  @media (max-width: 768px) {
    width: 130px;
    height: auto;
  }

  @media (max-width: 480px) {
    width: 110px;
    height: auto;
  }
`;
