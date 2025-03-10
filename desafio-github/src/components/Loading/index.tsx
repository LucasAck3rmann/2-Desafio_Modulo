import React from 'react';
import * as S from './styles';
import LoadingIn from '../../assets/Loading_In.svg';
import LoadingOut from '../../assets/Loading_Out.svg';

/**
 * The function `Loading` is a React functional component that displays a loading animation with text.
 * @returns The `Loading` component is being returned. It is a functional component in React that
 * renders a loading animation with two images (`LoadingOut` and `LoadingIn`) and a text that says
 * "Loading...".
 */
const Loading: React.FC = () => {
  return (
    <S.LoadingContainer>
      <S.LoadingWrapper>
        <S.LoadingOutImage src={LoadingOut} alt="Loading Out" />
        <S.LoadingInImage src={LoadingIn} alt="Loading In" />
      </S.LoadingWrapper>
      <S.LoadingText>Loading...</S.LoadingText>
    </S.LoadingContainer>
  );
};

export default Loading;