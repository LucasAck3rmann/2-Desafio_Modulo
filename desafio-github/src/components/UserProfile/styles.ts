import styled from 'styled-components';

export const ProfileContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  margin-bottom: 2rem;
  padding: 1.5rem;
  background-color: white;
  border-radius: 8px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.08);

  @media (max-width: 840px) {
    flex-direction: column;
    align-items: center;
  }
`;

export const AvatarContainer = styled.div`
  margin-right: 2rem;

  @media (max-width: 840px) {
    margin-right: 0;
    margin-bottom: 1rem;
  }
`;

export const Avatar = styled.img`
  width: 150px;
  height: 150px;
  border-radius: 50%;
  object-fit: cover;

  @media (max-width: 640px) {
    width: 120px;
    height: 120px;
  }
`;

export const InfoContainer = styled.div`
  text-align: left;
  flex: 1;

  @media (max-width: 840px) {
    text-align: center;
    width: 100%;
  }
`;

export const Name = styled.h2`
  font-size: 1.8rem;
  margin-bottom: 0.5rem;
  color: #24292e;

  @media (max-width: 640px) {
    font-size: 1.5rem;
  }
`;

export const Username = styled.h3`
  font-size: 1.2rem;
  color: #586069;
  margin-bottom: 1rem;
  font-weight: 400;
`;

export const Bio = styled.p`
  font-size: 1rem;
  line-height: 1.5;
  color: #24292e;
  margin-bottom: 1.5rem;
`;

export const GithubLink = styled.a`
  display: inline-block;
  padding: 0.5rem 1rem;
  background-color: #24292e;
  color: white;
  border-radius: 4px;
  transition: background-color 0.2s;

  &:hover {
    background-color: #1a1f23;
  }
`;
