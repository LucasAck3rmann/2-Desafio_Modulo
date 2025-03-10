import React from 'react';
import * as S from './styles';
import XAsset from '../../assets/X_Asset.svg';
import ErrorAsset from '../../assets/Error_Asset.svg';

interface ErrorMessageProps {
  message: string | null;
  onDismiss?: () => void;
}

/**
 * The ErrorMessage component is a React functional component that displays an error message with an
 * icon and a close button.
 * @param  - The `ErrorMessage` component is a functional component in React that displays an error
 * message with an icon and a close button. It takes two props:
 * @returns The ErrorMessage component is being returned. It is a React functional component that
 * displays an error message with an icon, a close button, a title ("Oops!"), and the error message
 * itself. If the `message` prop is falsy, the component returns `null` and does not render anything.
 */

const ErrorMessage: React.FC<ErrorMessageProps> = ({ message, onDismiss }) => {
  if (!message) return null;

  return (
    <S.ErrorContainer>
      <S.IconWrapper>
        <S.ErrorIcon src={ErrorAsset} alt="Error icon" />
        <S.XIcon
          src={XAsset}
          alt="Close error"
          onClick={onDismiss}
        />
      </S.IconWrapper>

      <S.TextContainer>
        <S.Title>Oops!</S.Title>
        <S.Message>{message}</S.Message>
      </S.TextContainer>
    </S.ErrorContainer>
  );
};

export default ErrorMessage;