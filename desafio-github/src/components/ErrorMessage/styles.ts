import styled, { keyframes, css } from 'styled-components';

/* The `const slideIn = keyframes... is defining a keyframe animation named slideIn. This
animation specifies the styles that should be applied at different points during the animation. In
this case, it starts with an opacity of 0 and a transformation that moves the element up and then
ends with an opacity of 1 and a transformation that brings the element back to its original
position. This animation is used to create a sliding-in effect for an element when it is displayed. */
const slideIn = keyframes`
  from { opacity: 0; transform: translate(-50%, -20px); }
  to { opacity: 1; transform: translate(-50%, 0); }
`;

const responsive = {
  tablet: '@media (max-width: 640px)',
  mobile: '@media (max-width: 480px)',
};

/* The `ErrorContainer` styled component is defining the styles for a container element that is used to
display error messages. Here's a breakdown of what each part of the styling does: */
export const ErrorContainer = styled.div`
  position: absolute;
  top: -110px;
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  align-items: center;
  width: 100%;
  max-width: 400px;
  padding: 15px;
  border-radius: 20px;
  background: #fc8621;
  box-shadow: 0 4px 10px rgba(252, 134, 33, 0.3);
  animation: ${slideIn} 0.3s ease-out forwards;
  opacity: 0;
  z-index: 10;

  ${responsive.tablet} {
    max-width: 360px;
    padding: 12px;
    border-radius: 16px;
    top: -100px;
  }

  ${responsive.mobile} {
    max-width: 320px;
    padding: 10px;
    border-radius: 12px;
    top: -90px;
  }
`;

export const IconWrapper = styled.div`
  position: relative;
  min-width: 40px;
  height: 40px;
  margin-right: 15px;

  ${responsive.tablet} {
    min-width: 36px;
    height: 36px;
    margin-right: 12px;
  }

  ${responsive.mobile} {
    min-width: 32px;
    height: 32px;
    margin-right: 10px;
  }
`;
export const ErrorIcon = styled.img`
  position: absolute;
  width: 63px;
  height: 96px;
  transform: translate(-10%, -50%);

  ${responsive.tablet} {
    width: 56px;
    height: 86px;
  }

  ${responsive.mobile} {
    width: 50px;
    height: 76px;
  }
`;
export const XIcon = styled.img`
  position: absolute;
  width: 12px;
  height: 12px;
  right: -730%;
  top: -20%;
  z-index: 2;
  cursor: pointer;
  transition: transform 0.2s;

  &:hover {
    transform: scale(1.1);
  }

  &:active {
    transform: scale(0.9);
  }

  ${responsive.mobile} {
    width: 10px;
    height: 10px;
  }
`;
export const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
`;

const textStyle = css`
  margin: 0;
  color: #fff;
`;

export const Title = styled.h1`
  ${textStyle}
  font-size: 1.25rem;
  font-weight: 700;
  line-height: 30px;

  ${responsive.tablet} {
    font-size: 1.15rem;
    line-height: 26px;
  }

  ${responsive.mobile} {
    font-size: 1.05rem;
    line-height: 24px;
  }
`;

export const Message = styled.p`
  ${textStyle}
  font-size: 0.75rem;
  font-weight: 400;
  line-height: 22.5px;

  ${responsive.tablet} {
    font-size: 0.7rem;
    line-height: 20px;
  }

  ${responsive.mobile} {
    font-size: 0.65rem;
    line-height: 18px;
  }
`;
