import styled, { keyframes } from 'styled-components';

const breakpoints = {
  tablet: '768px',
  mobile: '480px',
};

const rotateIn = keyframes`
  from { transform: rotate(0deg); }
  to { transform: rotate(360deg); }
`;

const rotateOut = keyframes`
  from { transform: rotate(0deg); }
  to { transform: rotate(-360deg); }
`;

/* The code snippet `export const LoadingContainer = styled.div` is creating a styled component named
`LoadingContainer` that styles a `<div>` element. */
export const LoadingContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100%;
  width: 100%;
  padding: 1rem;
`;

export const LoadingWrapper = styled.div`
  position: relative;
  width: 80px;
  height: 80px;

  @media (max-width: ${breakpoints.tablet}) {
    width: 70px;
    height: 70px;
  }

  @media (max-width: ${breakpoints.mobile}) {
    width: 60px;
    height: 60px;
  }
`;

export const LoadingOutImage = styled.img`
  position: absolute;
  width: 100%;
  height: 100%;
  animation: ${rotateOut} 2s linear infinite;
`;

export const LoadingInImage = styled.img`
  position: absolute;
  width: 70%;
  height: 70%;
  top: 15%;
  left: 15%;
  animation: ${rotateIn} 2s linear infinite;
`;


export const LoadingText = styled.p`
  margin-top: 1.875rem;
  color: #303030;
  font-size: 30px;
  font-weight: 700;
  line-height: 1.7;
  text-align: center;

  @media (max-width: ${breakpoints.tablet}) {
    font-size: 26px;
    line-height: 1.6;
    margin-top: 1.5rem;
  }

  @media (max-width: ${breakpoints.mobile}) {
    font-size: 22px;
    line-height: 1.6;
    margin-top: 1.25rem;
  }
`;
