import styled from 'styled-components';

const breakpoints = {
  tablet: '768px',
  mobile: '480px',
};

const colors = {
  primary: '#202e49',
  secondary: '#6a6f73',
  border: '#bdbdbd',
  background: '#fff',
  shadow: 'rgba(0, 0, 0, 0.4)',
  buttonHover: '#333',
};

/* The `ModalContent` component is being styled using the `styled-components` library in TypeScript.
Here's a breakdown of what the styling does: */
export const ModalContent = styled.div`
  background: ${colors.background};
  border-radius: 10px;
  box-shadow: 0px 4px 21px -4px ${colors.shadow};
  max-width: 600px;
  width: 90%;
  padding: 3rem;
  position: relative;
  display: flex;
  flex-direction: column;
  gap: 1.875rem;
  max-height: 90vh;
  overflow-y: auto;

  @media (max-width: ${breakpoints.tablet}) {
    width: 95%;
    padding: 2rem;
    gap: 1.5rem;
  }

  @media (max-width: ${breakpoints.mobile}) {
    width: 98%;
    padding: 1.5rem;
    gap: 1.25rem;
    border-radius: 8px;
  }
`;

export const CloseButton = styled.button`
  position: absolute;
  right: 1.5rem;
  top: 1.5rem;
  background: none;
  border: none;
  font-size: 1.75rem;
  cursor: pointer;
  color: ${colors.secondary};
  width: 32px;
  height: 32px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  transition:
    color 0.2s,
    background-color 0.2s;

  &:hover {
    color: ${colors.buttonHover};
    background-color: rgba(0, 0, 0, 0.05);
  }

  @media (max-width: ${breakpoints.mobile}) {
    right: 1rem;
    top: 1rem;
    font-size: 1.5rem;
    width: 28px;
    height: 28px;
  }
`;

export const ModalHeader = styled.div`
  margin-bottom: 1.5rem;
`;

export const ModalTitle = styled.h2`
  color: ${colors.primary};
  font-size: 15px;
  font-weight: 700;
  border-bottom: 1px solid ${colors.border};
  padding-bottom: 1.25rem;

  @media (max-width: ${breakpoints.mobile}) {
    padding-bottom: 1rem;
  }
`;

export const ModalBody = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;

  @media (max-width: ${breakpoints.mobile}) {
    gap: 1.5rem;
  }
`;

export const ModalField = styled.div`
  display: flex;
  flex-direction: column;
`;

export const FieldLabel = styled.span`
  color: ${colors.secondary};
  font-size: 12px;
  font-weight: 400;
  margin-bottom: 0.25rem;
`;

export const FieldValue = styled.p`
  color: ${colors.primary};
  font-size: 14px;
  font-weight: 500;
  margin-top: 0.25rem;
  line-height: 1.4;
  word-break: break-word;
`;

export const FieldLink = styled.a`
  color: ${colors.primary};
  font-size: 14px;
  font-weight: 500;
  margin-top: 0.25rem;
  text-decoration-line: underline;
  text-decoration-style: solid;
  text-decoration-skip-ink: none;
  word-break: break-all;
  line-height: 1.4;
  width: 100%;
  display: block;
  transition: opacity 0.2s;

  &:hover {
    opacity: 0.8;
  }
`;

export const Title = styled.h2`
  font-size: 1.6rem;
  color: #0366d6;
  margin-bottom: 1.5rem;
  padding-right: 2rem;

  @media (max-width: 640px) {
    font-size: 1.3rem;
  }
`;

export const InfoItem = styled.div`
  margin-bottom: 1.2rem;
`;

export const Label = styled.div`
  font-size: 0.9rem;
  color: #586069;
  margin-bottom: 0.3rem;
`;

export const Value = styled.div`
  font-size: 1rem;
  color: #24292e;
`;

export const Description = styled.div`
  font-size: 1rem;
  color: #24292e;
  line-height: 1.5;
`;

export const LinkValue = styled.a`
  font-size: 1rem;
  color: #0366d6;
  word-break: break-all;

  &:hover {
    text-decoration: underline;
  }
`;

interface VisibilityBadgeProps {
  visibility: string;
}

export const VisibilityBadge = styled.span<VisibilityBadgeProps>`
  display: inline-block;
  padding: 0.25rem 0.5rem;
  border-radius: 2rem;
  font-size: 0.8rem;
  font-weight: 500;
  background-color: ${(props) => (props.visibility === 'public' ? '#2ea44f' : '#ff6b6b')};
  color: white;
  text-transform: capitalize;
`;

export const ActionButton = styled.button`
  display: block;
  width: 100%;
  padding: 0.75rem;
  margin-top: 1.5rem;
  background-color: #0366d6;
  color: white;
  border: none;
  border-radius: 4px;
  font-size: 1rem;
  transition: background-color 0.2s;

  &:hover {
    background-color: #024ea7;
  }
`;
