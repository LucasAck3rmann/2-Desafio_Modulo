import styled from 'styled-components';

const breakpoints = {
  desktop: '1024px',
  tablet: '768px',
  mobile: '480px',
};

const colors = {
  primary: '#05478a',
  text: '#303030',
  textSecondary: '#586069',
  background: '#fff',
  backgroundOverlay: 'rgba(255, 255, 255, 0.9)',
};

export const Container = styled.div`
  display: flex;
  height: 100vh;
  width: 100%;

  @media (max-width: ${breakpoints.tablet}) {
    flex-direction: column;
  }

  @supports (-webkit-touch-callout: none) {
    height: -webkit-fill-available;
  }
`;

export const LogoContainer = styled.div`
  flex: 1;
  background-color: ${colors.primary};
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 2rem;

  @media (max-width: ${breakpoints.tablet}) {
    flex: 0 0 auto;
    padding: 1.5rem;
    min-height: 200px;
  }

  @media (max-width: ${breakpoints.mobile}) {
    min-height: 150px;
  }
`;

export const Logo = styled.img`
  max-width: 300px;
  width: 80%;
  height: auto;
  object-fit: contain;

  @media (max-width: ${breakpoints.desktop}) {
    max-width: 250px;
  }

  @media (max-width: ${breakpoints.tablet}) {
    max-width: 200px;
  }

  @media (max-width: ${breakpoints.mobile}) {
    max-width: 180px;
  }
`;

export const FormContainer = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 2rem;
  position: relative;
  overflow-y: auto;

  @media (max-width: ${breakpoints.tablet}) {
    padding: 1.5rem 1rem;
  }
`;

export const FormLoadingWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100%;
  width: 100%;
`;

export const LoadingOverlay = styled.div`
  position: absolute;
  inset: 0;
  background-color: ${colors.backgroundOverlay};
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  z-index: 100;
  animation: fadeIn 0.3s ease;

  @keyframes fadeIn {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }
`;

export const Title = styled.h1`
  margin-bottom: 2.5rem;
  color: ${colors.text};
  text-align: center;
  font-family: Montserrat, sans-serif;
  font-size: clamp(1.8rem, 5vw, 2.5rem);
  font-weight: 700;
  line-height: 1.4;

  @media (max-width: ${breakpoints.desktop}) {
    margin-bottom: 2rem;
  }

  @media (max-width: ${breakpoints.mobile}) {
    margin-bottom: 1.5rem;
  }
`;

export const Description = styled.p`
  font-size: clamp(1rem, 3vw, 1.2rem);
  margin-bottom: 2rem;
  color: ${colors.textSecondary};
  text-align: center;
  max-width: 650px;
  line-height: 1.6;

  @media (max-width: ${breakpoints.mobile}) {
    margin-bottom: 1.5rem;
  }
`;
