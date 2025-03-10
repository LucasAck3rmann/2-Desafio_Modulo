import styled from 'styled-components';

const breakpoints = {
  tablet: '768px',
  mobile: '480px',
};

const colors = {
  primary: '#0366d6',
  text: '#586069',
  background: '#fff',
  shadow: 'rgba(0, 0, 0, 0.08)',
};

/* The `export const CardContainer` code block is defining a styled component using styled-components
library in TypeScript. This styled component represents a container for a card element in a UI
design. Here's a breakdown of what each part of the code is doing: */
export const CardContainer = styled.div`
  background-color: ${colors.background};
  border-radius: 8px;
  box-shadow: 0 2px 10px ${colors.shadow};
  margin-bottom: 1.5rem;
  padding: 1.25rem;
  transition:
    transform 0.2s,
    box-shadow 0.2s;

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 4px 12px ${colors.shadow};
  }

  @media (max-width: ${breakpoints.tablet}) {
    padding: 1rem;
    margin-bottom: 1.25rem;
  }

  @media (max-width: ${breakpoints.mobile}) {
    padding: 0.875rem;
    margin-bottom: 1rem;
  }
`;

export const CardHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 0.75rem;
  flex-wrap: wrap;
  gap: 0.5rem;
`;

export const RepoName = styled.h2`
  font-size: 1.25rem;
  color: ${colors.primary};
  margin: 0;
  font-weight: 600;

  @media (max-width: ${breakpoints.mobile}) {
    font-size: 1.125rem;
  }
`;

export const RepoVisibility = styled.span`
  font-size: 0.8125rem;
  color: ${colors.text};
  padding: 0.25rem 0.5rem;
  background-color: rgba(27, 31, 35, 0.08);
  border-radius: 12px;
`;

export const CardBody = styled.div`
  margin-bottom: 1rem;
`;

export const RepoDescription = styled.p`
  font-size: 1rem;
  color: ${colors.text};
  margin-bottom: 0.5rem;
`;

export const RepoLanguage = styled.span`
  font-size: 0.875rem;
  color: ${colors.text};
`;

export const CardFooter = styled.div`
  display: flex;
  justify-content: flex-end;
`;

export const RepoLink = styled.a`
  font-size: 1rem;
  color: ${colors.primary};
  text-decoration: none;

  &:hover {
    text-decoration: underline;
  }
`;
