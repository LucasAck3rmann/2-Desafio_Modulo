import React, { useState, useEffect, useRef, useCallback } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { useQuery } from 'react-query';
import { getUser, getRepositories } from '../../services/api';
import Header from '../../components/Header';
import RepoModal from '../../components/RepoModal';
import Loading from '../../components/Loading';
import { Repository } from '../../types';
import * as S from './styles';
import CarouselLeftIcon from '../../assets/Set_Carrossel_Left.svg';
import CarouselRightIcon from '../../assets/Set_Carrossel_Right.svg';

/* The above code is a TypeScript React component called UserDetails. */
const UserDetails: React.FC = () => {
  const { username } = useParams<{ username: string }>();
  const navigate = useNavigate();

  const [selectedRepo, setSelectedRepo] = useState<Repository | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isModalLoading, setIsModalLoading] = useState(false);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  const carouselRef = useRef<HTMLDivElement>(null);

  const getItemsPerView = useCallback(() => {
    if (windowWidth <= 640) return 1;
    if (windowWidth <= 1024) return 2;
    return 3;
  }, [windowWidth]);

  const ITEMS_PER_VIEW = getItemsPerView();

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
      setCurrentSlide(0);
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const {
    data: user,
    isLoading: userLoading,
    isError: userError
  } = useQuery(['user', username], () => getUser(username!), {
    enabled: !!username,
    staleTime: 5 * 60 * 1000
  });

  const {
    data: repositories,
    isLoading: reposLoading,
    isError: reposError
  } = useQuery(['repos', username], () => getRepositories(username!), {
    enabled: !!username,
    staleTime: 5 * 60 * 1000
  });

  const getVisibleRepoRange = useCallback(() => {
    if (!repositories || repositories.length === 0) return { start: 0, end: 0, total: 0 };

    const start = currentSlide * ITEMS_PER_VIEW + 1;
    const end = Math.min(start + ITEMS_PER_VIEW - 1, repositories.length);
    const total = repositories.length;

    return { start, end, total };
  }, [repositories, currentSlide, ITEMS_PER_VIEW]);

  const needsCarousel = useCallback(() => {
    return !!repositories && repositories.length > ITEMS_PER_VIEW;
  }, [repositories, ITEMS_PER_VIEW]);

  useEffect(() => {
    if (userError || reposError) {
      navigate('/');
    }
  }, [userError, reposError, navigate]);

  const handleOpenModal = (repo: Repository) => {
    setIsModalLoading(true);
    setSelectedRepo(repo);

    setTimeout(() => {
      setIsModalLoading(false);
      setIsModalOpen(true);
    }, 1000);
  };

  const handleCloseModal = () => setIsModalOpen(false);

  const nextSlide = useCallback(() => {
    if (!repositories) return;

    const maxSlide = Math.ceil(repositories.length / ITEMS_PER_VIEW) - 1;
    if (currentSlide < maxSlide) {
      setCurrentSlide(prev => prev + 1);
    }
  }, [currentSlide, repositories, ITEMS_PER_VIEW]);

  const prevSlide = useCallback(() => {
    if (currentSlide > 0) {
      setCurrentSlide(prev => prev - 1);
    }
  }, [currentSlide]);

  useEffect(() => {
    if (carouselRef.current && repositories) {
      const transformPercentage = windowWidth <= 640 ? 100 : windowWidth <= 1024 ? 50 : 33.333;
      carouselRef.current.style.transform = `translateX(-${currentSlide * transformPercentage}%)`;
    }
  }, [currentSlide, repositories, windowWidth]);

  if (userLoading || reposLoading) {
    return (
      <S.LoadingContainer>
        <Loading />
      </S.LoadingContainer>
    );
  }

  const { start, end, total } = getVisibleRepoRange();
  const showCarouselButtons = needsCarousel();
  const isFirstSlide = currentSlide === 0;
  const isLastSlide = !repositories || currentSlide >= Math.ceil((repositories?.length || 0) / ITEMS_PER_VIEW) - 1;

  return (
    <S.Container>
      <Header />

      <S.Content>
        {isModalLoading && (
          <S.ModalLoadingOverlay>
            <Loading />
          </S.ModalLoadingOverlay>
        )}
        {isModalOpen && selectedRepo && (
          <S.ModalContainer>
            <RepoModal
              repo={selectedRepo}
              isOpen={isModalOpen}
              onClose={handleCloseModal}
            />
          </S.ModalContainer>
        )}
        <S.ProfileSection>
          <S.ProfileTitle>Profile Information</S.ProfileTitle>

          <S.ProfileContent>
            <S.AvatarContainer>
              <S.Avatar
                src={user?.avatar_url}
                alt={`Avatar de ${user?.login || 'usuário'}`}
              />
            </S.AvatarContainer>

            <S.ProfileInfo>
              {user?.name && (
                <S.ProfileDetail>
                  <S.DetailLabel>Nome</S.DetailLabel>
                  <S.DetailValue>{user.name}</S.DetailValue>
                </S.ProfileDetail>
              )}

              {user?.bio && (
                <S.ProfileDetail>
                  <S.DetailLabel>Bio</S.DetailLabel>
                  <S.DetailValue>{user.bio}</S.DetailValue>
                </S.ProfileDetail>
              )}
            </S.ProfileInfo>
          </S.ProfileContent>
        </S.ProfileSection>
        <S.RepositoriesSection>
          <S.RepositoriesHeader>
            <S.RepositoriesTitle>Repositories</S.RepositoriesTitle>

            <S.NavigationControls>
              <S.RepositoryCounter>
                {repositories && repositories.length > 0
                  ? `${start}-${end} de ${total}`
                  : '0 de 0'
                }
              </S.RepositoryCounter>
              {showCarouselButtons && (
                <>
                  <S.NavButton
                    src={CarouselLeftIcon}
                    alt="Anterior"
                    onClick={prevSlide}
                    style={{ opacity: isFirstSlide ? 0.5 : 1 }}
                  />

                  <S.NavButton
                    src={CarouselRightIcon}
                    alt="Próximo"
                    onClick={nextSlide}
                    style={{ opacity: isLastSlide ? 0.5 : 1 }}
                  />
                </>
              )}
            </S.NavigationControls>
          </S.RepositoriesHeader>
          {repositories && repositories.length > 0 ? (
            <S.CarouselContainer>
              <S.CarouselViewport>
                <S.CarouselTrack
                  ref={carouselRef}
                  style={!showCarouselButtons ? { transform: 'none' } : undefined}
                >
                  {showCarouselButtons ? (
                    Array(Math.ceil(repositories.length / ITEMS_PER_VIEW))
                      .fill(0)
                      .map((_, groupIndex) => (
                        <S.CarouselGroup key={`group-${groupIndex}`}>
                          {repositories
                            .slice(
                              groupIndex * ITEMS_PER_VIEW,
                              (groupIndex + 1) * ITEMS_PER_VIEW
                            )
                            .map((repo) => (
                              <S.RepositoryCard
                                key={repo.id}
                                onClick={() => handleOpenModal(repo)}
                              >
                                <S.RepoName>{repo.name}</S.RepoName>

                                <S.RepoDetail>
                                  <S.RepoDetailLabel>Link</S.RepoDetailLabel>
                                  <S.RepoDetailLink
                                    href={repo.html_url}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    onClick={(e) => e.stopPropagation()}
                                  >
                                    {new URL(repo.html_url).hostname}
                                  </S.RepoDetailLink>
                                </S.RepoDetail>

                                {repo.description && (
                                  <S.RepoDetail>
                                    <S.RepoDetailLabel>Description</S.RepoDetailLabel>
                                    <S.RepoDescription>
                                      {repo.description}
                                    </S.RepoDescription>
                                  </S.RepoDetail>
                                )}
                              </S.RepositoryCard>
                            ))}
                        </S.CarouselGroup>
                      ))
                  ) : (
                    <S.CarouselGroup>
                      {repositories.map((repo) => (
                        <S.RepositoryCard
                          key={repo.id}
                          onClick={() => handleOpenModal(repo)}
                        >
                          <S.RepoName>{repo.name}</S.RepoName>

                          <S.RepoDetail>
                            <S.RepoDetailLabel>Link</S.RepoDetailLabel>
                            <S.RepoDetailLink
                              href={repo.html_url}
                              target="_blank"
                              rel="noopener noreferrer"
                              onClick={(e) => e.stopPropagation()}
                            >
                              {new URL(repo.html_url).hostname}
                            </S.RepoDetailLink>
                          </S.RepoDetail>

                          {repo.description && (
                            <S.RepoDetail>
                              <S.RepoDetailLabel>Description</S.RepoDetailLabel>
                              <S.RepoDescription>
                                {repo.description}
                              </S.RepoDescription>
                            </S.RepoDetail>
                          )}

                          {repo.language && (
                            <S.RepoDetail>
                              <S.RepoDetailLabel>Language</S.RepoDetailLabel>
                              <S.RepoLanguage>{repo.language}</S.RepoLanguage>
                            </S.RepoDetail>
                          )}
                        </S.RepositoryCard>
                      ))}
                    </S.CarouselGroup>
                  )}
                </S.CarouselTrack>
              </S.CarouselViewport>
            </S.CarouselContainer>
          ) : (
            <S.EmptyMessage>This user does not own any repositories.</S.EmptyMessage>
          )}
        </S.RepositoriesSection>
      </S.Content>
    </S.Container>
  );
};

export default UserDetails;