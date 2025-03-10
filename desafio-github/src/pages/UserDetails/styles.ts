import styled from 'styled-components';

const breakpoints = {
  desktop: '1024px',
  tablet: '768px',
  mobile: '640px',
  smallMobile: '480px',
};

const colors = {
  primary: '#05478a',
  primaryLight: '#7ea7d0',
  text: {
    primary: '#202e49',
    secondary: '#2d2d2d',
    tertiary: '#6a6f73',
  },
  background: {
    white: '#fff',
    light: '#f6f8fa',
  },
  border: '#ddd',
  shadow: 'rgba(0, 0, 0, 0.4)',
};

const spacing = {
  xs: '0.25rem',
  sm: '0.5rem',
  md: '1rem',
  lg: '1.5rem',
  xl: '2rem',
  xxl: '2.5rem',
  xxxl: '3rem',
};

const fontSize = {
  xs: '11px',
  sm: '12px',
  md: '13px',
  lg: '14px',
  xl: '15px',
  xxl: '18px',
  h2: '22px',
  h1: '30px',
};

export const Container = styled.div`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  background-color: ${colors.background.white};
`;

export const Content = styled.main`
  position: relative;
  max-width: 1300px;
  margin: 0 auto;
  width: 100%;
  padding: ${spacing.xxxl};
  display: flex;
  flex-direction: column;
  gap: 5rem;
  box-shadow: 0 0 20px 15px rgba(0, 0, 0, 0.1);

  @media (max-width: ${breakpoints.desktop}) {
    padding: ${spacing.xxl};
    gap: 4rem;
  }

  @media (max-width: ${breakpoints.tablet}) {
    padding: ${spacing.xl};
    gap: 3rem;
  }

  @media (max-width: ${breakpoints.smallMobile}) {
    padding: ${spacing.lg} ${spacing.md};
    gap: 2.5rem;
    box-shadow: none;
  }
`;

export const BackLink = styled.a`
  display: inline-block;
  margin-bottom: 2rem;
  color: #05478a;
  font-size: 1rem;
  cursor: pointer;
  font-weight: 500;

  &:hover {
    text-decoration: underline;
  }

  @media (max-width: 768px) {
    margin-bottom: 1.5rem;
    font-size: 0.95rem;
  }

  @media (max-width: 480px) {
    margin-bottom: 1.25rem;
    font-size: 0.9rem;
  }
`;

export const ProfileSection = styled.section``;

export const ProfileTitle = styled.h1`
  color: ${colors.text.secondary};
  font-size: ${fontSize.h1};
  font-weight: 700;
  margin-bottom: 4rem;

  @media (max-width: ${breakpoints.desktop}) {
    font-size: 28px;
    margin-bottom: 3rem;
  }

  @media (max-width: ${breakpoints.tablet}) {
    font-size: 24px;
    margin-bottom: 2rem;
  }

  @media (max-width: ${breakpoints.smallMobile}) {
    font-size: 20px;
    margin-bottom: 1.5rem;
  }
`;

export const ProfileContent = styled.div`
  display: flex;
  background-color: ${colors.background.white};

  @media (max-width: ${breakpoints.tablet}) {
    flex-direction: column;
  }
`;

export const AvatarContainer = styled.div`
  margin-right: ${spacing.xl};

  @media (max-width: ${breakpoints.tablet}) {
    margin-right: 0;
    margin-bottom: ${spacing.lg};
    display: flex;
    justify-content: center;
  }
`;

export const Avatar = styled.img`
  width: 125px;
  height: 125px;
  border-radius: 16px;
  object-fit: cover;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.08);

  @media (max-width: ${breakpoints.desktop}) {
    width: 110px;
    height: 110px;
    border-radius: 14px;
  }

  @media (max-width: ${breakpoints.smallMobile}) {
    width: 100px;
    height: 100px;
    border-radius: 12px;
  }
`;

export const ProfileInfo = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 0.5rem;

  @media (max-width: ${breakpoints.tablet}) {
    align-items: center;
  }
`;

export const ProfileDetail = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 0.625rem;

  @media (max-width: ${breakpoints.tablet}) {
    margin-bottom: 0.5rem;
    align-items: center;
    text-align: center;
  }
`;

export const DetailLabel = styled.span`
  color: ${colors.text.tertiary};
  font-size: ${fontSize.sm};
  font-weight: 400;

  @media (max-width: ${breakpoints.smallMobile}) {
    font-size: ${fontSize.xs};
  }
`;

export const DetailValue = styled.span`
  color: ${colors.text.secondary};
  font-size: ${fontSize.md};
  font-weight: 700;
  line-height: 30px;

  @media (max-width: ${breakpoints.smallMobile}) {
    font-size: ${fontSize.sm};
    line-height: 24px;
  }
`;

export const DetailLink = styled.a`
  color: ${colors.text.primary};
  font-size: ${fontSize.lg};
  font-weight: 500;
  text-decoration-line: underline;
  transition: opacity 0.2s;

  &:hover {
    opacity: 0.8;
  }

  @media (max-width: ${breakpoints.smallMobile}) {
    font-size: ${fontSize.md};
  }
`;


export const RepositoriesSection = styled.section`
  margin-top: ${spacing.xl};

  @media (max-width: ${breakpoints.tablet}) {
    margin-top: ${spacing.lg};
  }
`;

export const RepositoriesHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: ${spacing.lg};
  flex-wrap: wrap;

  @media (max-width: ${breakpoints.mobile}) {
    margin-bottom: ${spacing.md};
    gap: 0.75rem;
  }
`;

export const RepositoriesTitle = styled.h2`
  color: ${colors.text.secondary};
  font-size: ${fontSize.h1};
  font-weight: 700;

  @media (max-width: ${breakpoints.desktop}) {
    font-size: 26px;
  }

  @media (max-width: ${breakpoints.tablet}) {
    font-size: ${fontSize.h2};
  }

  @media (max-width: ${breakpoints.smallMobile}) {
    font-size: ${fontSize.xxl};
  }
`;

export const NavigationControls = styled.div`
  display: flex;
  align-items: center;
  gap: ${spacing.md};

  @media (max-width: ${breakpoints.tablet}) {
    gap: 0.75rem;
  }

  @media (max-width: ${breakpoints.smallMobile}) {
    gap: ${spacing.sm};
  }
`;

export const RepositoryCounter = styled.span`
  color: ${colors.text.tertiary};
  font-size: ${fontSize.sm};
  font-weight: 500;
  margin-right: ${spacing.sm};

  @media (max-width: ${breakpoints.smallMobile}) {
    font-size: ${fontSize.xs};
    margin-right: ${spacing.xs};
  }
`;


export const CarouselContainer = styled.div`
  width: 100%;
  position: relative;
`;

export const CarouselViewport = styled.div`
  width: 100%;
  overflow: hidden;
  padding: ${spacing.md} 0;

  @media (max-width: ${breakpoints.smallMobile}) {
    padding: 0.75rem 0;
  }
`;

export const CarouselTrack = styled.div`
  display: flex;
  transition: transform 0.5s ease;
  width: 100%;
`;

export const NavButton = styled.img`
  width: 28px;
  height: 28px;
  cursor: pointer;
  transition:
    opacity 0.2s ease,
    transform 0.2s ease;
  padding: 5px;

  &:hover {
    opacity: 0.8;
    transform: scale(1.05);
  }

  &:active {
    transform: scale(0.95);
  }

  @media (max-width: ${breakpoints.tablet}) {
    width: 24px;
    height: 24px;
  }

  @media (max-width: ${breakpoints.smallMobile}) {
    width: 20px;
    height: 20px;
  }
`;

export const CarouselGroup = styled.div`
  display: flex;
  flex: 0 0 100%;
  gap: ${spacing.lg};
  width: 100%;

  @media (max-width: 1024px) {
    gap: 1.25rem;
  }

  @media (max-width: 640px) {
    gap: 1rem;
    justify-content: center;
  }
`;

export const RepositoryCard = styled.div`
  position: relative;
  flex: 0 0 calc(33.333% - 1rem);
  max-width: 365px;
  height: 293px;
  margin-right: 1.28rem;
  border-radius: 8px;
  background: #fff;
  box-shadow: 0px 4px 21px -4px rgba(0, 0, 0, 0.4);
  padding: 2.5rem;
  cursor: pointer;
  display: flex;
  flex-direction: column;
  gap: 1.375rem;
  transition:
    transform 0.2s ease,
    box-shadow 0.2s ease;
  overflow: hidden;

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0px 6px 25px -2px rgba(0, 0, 0, 0.3);
  }

  @media (max-width: 1024px) {
    flex: 0 0 calc(50% - 1rem);
    min-width: calc(50% - 1rem);
    padding: 2rem;
    gap: 1.25rem;
    height: 280px;
  }

  @media (max-width: 640px) {
    flex: 0 0 100%;
    min-width: 100%;
    width: 100%;
    max-width: 100%;
    padding: 1.75rem;
    gap: 1.125rem;
    height: 260px;
    margin-right: 0;
    margin-bottom: 1.5rem;
  }

  @media (max-width: 480px) {
    padding: 1.5rem;
    gap: 1rem;
    height: 240px;
  }
`;

export const RepoName = styled.h3`
  color: #202e49;
  font-size: 15px;
  font-weight: 700;
  margin-bottom: 1rem;
  position: relative;
  padding-bottom: 2rem;
  word-break: break-word;
  display: -webkit-box;
  -webkit-line-clamp: 1;
  -webkit-box-orient: vertical;
  overflow: hidden;

  &::after {
    content: '';
    position: absolute;
    bottom: 0;
    left: -2.5rem;
    stroke-width: 1px;
    stroke: #05478a;
    width: calc(100% + 5rem);
    height: 1px;
    background-color: #05478a;
  }

  @media (max-width: 1024px) {
    font-size: 14px;
    margin-bottom: 0.875rem;
    padding-bottom: 1.75rem;

    &::after {
      left: -2rem;
      width: calc(100% + 4rem);
    }
  }

  @media (max-width: 640px) {
    font-size: 13px;
    margin-bottom: 0.75rem;
    padding-bottom: 1.5rem;

    &::after {
      left: -1.75rem;
      width: calc(100% + 3.5rem);
    }
  }
`;

export const RepoDetail = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 0.5rem;
`;

export const RepoDetailLabel = styled.span`
  color: #6a6f73;
  font-size: 12px;
  font-weight: 400;
`;

export const RepoDetailLink = styled.a`
  color: #202e49;
  font-size: 14px;
  font-weight: 500;
  text-decoration-line: underline;
  max-width: 100%;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  display: inline-block;

  &:hover {
    opacity: 0.8;
  }
`;

export const RepoDescription = styled.p`
  color: #202e49;
  font-size: 14px;
  font-weight: 500;
  line-height: 21px;
  max-height: 63px;
  overflow: hidden;
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  text-overflow: ellipsis;
  word-wrap: break-word;
  width: 100%;

  @media (max-width: 640px) {
    font-size: 13px;
    line-height: 19px;
    max-height: 57px;
  }
`;

export const RepoLanguage = styled.span`
  color: #202e49;
  font-size: 14px;
  font-weight: 500;
`;

export const EmptyMessage = styled.p`
  text-align: center;
  padding: 2rem;
  background-color: #f6f8fa;
  border-radius: 8px;
  color: #6a6f73;
  font-size: 14px;
`;

export const LoadingContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
  width: 100%;
`;

export const ModalLoadingOverlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: #fff;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  z-index: 10;
`;

export const ModalContainer = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: #fff;
  z-index: 20;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const ModalContent = styled.div`
  background: #fff;
  border-radius: 8px;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
  max-width: 600px;
  width: 90%;
  padding: 2rem;
  position: relative;

  @media (max-width: 768px) {
    width: 95%;
    padding: 1.75rem;
  }

  @media (max-width: 480px) {
    width: 98%;
    padding: 1.5rem;
    border-radius: 6px;
  }
`;

export const CloseButton = styled.button`
  position: absolute;
  right: 1rem;
  top: 1rem;
  background: none;
  border: none;
  font-size: 1.5rem;
  cursor: pointer;
  color: #6a6f73;
  width: 30px;
  height: 30px;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  transition:
    background-color 0.2s,
    color 0.2s;

  &:hover {
    background-color: rgba(0, 0, 0, 0.05);
    color: #333;
  }

  @media (max-width: 480px) {
    right: 0.75rem;
    top: 0.75rem;
    font-size: 1.25rem;
    width: 25px;
    height: 25px;
  }
`;

export const ModalHeader = styled.div`
  margin-bottom: 1.5rem;
  padding-right: 2rem;

  @media (max-width: 480px) {
    margin-bottom: 1.25rem;
    padding-right: 1.5rem;
  }
`;

export const ModalTitle = styled.h2`
  color: #202e49;
  font-size: 15px;
  font-weight: 700;
  word-break: break-word;
`;

export const ModalBody = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;

  @media (max-width: 480px) {
    gap: 0.875rem;
  }
`;

export const ModalField = styled.div`
  display: flex;
  flex-direction: column;
`;

export const FieldLabel = styled.span`
  color: #6a6f73;
  font-size: 12px;
  font-weight: 400;
  margin-bottom: 0.25rem;
`;

export const FieldValue = styled.p`
  color: #202e49;
  font-size: 14px;
  font-weight: 500;
  margin-top: 0.25rem;
  line-height: 1.4;
  word-break: break-word;
`;

export const FieldLink = styled.a`
  color: #202e49;
  font-size: 14px;
  font-weight: 500;
  margin-top: 0.25rem;
  text-decoration-line: underline;
  text-decoration-style: solid;
  text-decoration-skip-ink: none;
  text-decoration-thickness: auto;
  text-underline-offset: auto;
  text-underline-position: from-font;
  word-break: break-all;
  line-height: 1.4;

  &:hover {
    opacity: 0.8;
  }
`;
