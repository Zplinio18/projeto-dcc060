import { useEffect, useState } from 'react';
import { FaMusic, FaStar } from 'react-icons/fa';
import { Container } from '../base/Container';
import { Text } from '../base/Text';
import { Button } from '../base/Button';
import 'react-toastify/dist/ReactToastify.css';
import { api } from '../../api/axios';
import { ToastContainer, toast } from 'react-toastify';

interface Album {
  id: number;
  titulo: string;
  foto_capa: string;
  nome: string;
}

interface Review {
  id: number;
  nota: number;
  descricao: string;
}

interface ReviewSideBarProps {
  selectedAlbum: Album | null;
}

function ReviewSideBar({ selectedAlbum }: ReviewSideBarProps) {
  const [rating, setRating] = useState(0);
  const [hoverRating, setHoverRating] = useState(0);
  const [reviewText, setReviewText] = useState('');
  const [existingReview, setExistingReview] = useState<Review | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleStarClick = (starValue: number) => {
    if (!existingReview) {
      setRating(starValue);
    }
  };

  const handleStarHover = (starValue: number) => {
    if (!existingReview) {
      setHoverRating(starValue);
    }
  };

  const handleMouseLeave = () => {
    if (!existingReview) {
      setHoverRating(0);
    }
  };

  useEffect(() => {
    const fetchExistingReview = async () => {
      if (!selectedAlbum) return;

      try {
        const response = await api.get<Review | null>(
          `/review/1/${selectedAlbum.id}`,
        );
        if (response.data) {
          setExistingReview(response.data);
          setRating(response.data.nota);
          setReviewText(response.data.descricao || '');
        } else {
          setExistingReview(null);
          setRating(0);
          setReviewText('');
        }
      } catch {
        setExistingReview(null);
        setRating(0);
        setReviewText('');
      }
    };

    fetchExistingReview();
  }, [selectedAlbum]);

  const handleSubmit = async () => {
    if (!selectedAlbum || existingReview) return;

    setIsSubmitting(true);
    try {
      await api.post('review/1', {
        nota: rating,
        descricao: reviewText,
        id_album: selectedAlbum.id,
      });
      const response = await api.get(`review/1/${selectedAlbum?.id}`);
      setExistingReview(response.data);
      toast.success('Avaliação enviada com sucesso!', {
        autoClose: 1500,
      });
    } catch (error) {
      console.error('Erro ao enviar review:', error);
      toast.error('Erro ao enviar avaliação', {
        autoClose: 1500,
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  console.log(selectedAlbum);

  useEffect(() => {
    if (!selectedAlbum) {
      setExistingReview(null);
      setRating(0);
      setReviewText('');
    }
  }, [selectedAlbum]);

  return (
    <Container.Flex className="flex w-full flex-col px-2 py-6 md:h-screen md:w-[25%] md:pt-20">
      <ToastContainer
        position="top-right"
        autoClose={1500}
        theme="dark"
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
      <Container.Flex className="min-h-full flex-col items-center gap-4 overflow-auto rounded-xl bg-zinc-950 p-8">
        {selectedAlbum ? (
          <>
            <Container.Flex
              className="flex max-h-52 min-h-52 min-w-52 max-w-52 flex-col rounded-full bg-cover bg-center"
              style={{
                backgroundImage: `url(${selectedAlbum.foto_capa})`,
              }}
            />
            <Text.Defaut className="text-2xl font-bold text-white">
              {selectedAlbum.titulo}
            </Text.Defaut>
            <Text.Defaut className="text-sm font-medium text-gray-400">
              {selectedAlbum.nome}
            </Text.Defaut>

            <Container.Flex className="w-full flex-col items-center justify-between gap-9">
              <Container.Flex className="w-full flex-col items-center gap-8">
                <Container.Flex className="gap-2">
                  {[...Array(5)].map((_, index) => {
                    const starValue = index + 1;
                    const isActive = starValue <= (hoverRating || rating);

                    return (
                      <FaStar
                        key={starValue}
                        className={`text-3xl transition-colors duration-200 ${
                          existingReview ? '' : 'cursor-pointer'
                        }`}
                        onClick={() => handleStarClick(starValue)}
                        onMouseEnter={() => handleStarHover(starValue)}
                        onMouseLeave={handleMouseLeave}
                        color={isActive ? '#FFFFFF' : '#18181B'}
                      />
                    );
                  })}
                </Container.Flex>

                <Container.Flex className="w-full flex-col gap-1">
                  <Text.Defaut className="text-xs font-medium text-zinc-600">
                    Descrição {existingReview ? '' : '(opcional)'}
                  </Text.Defaut>
                  <textarea
                    className={`max-h-[16dvh] min-h-[16dvh] w-full rounded-lg p-2 ${
                      existingReview
                        ? 'border border-zinc-900 bg-zinc-950 text-zinc-600'
                        : 'bg-zinc-900 text-white'
                    }`}
                    value={reviewText}
                    onChange={(e) =>
                      !existingReview && setReviewText(e.target.value)
                    }
                    disabled={!!existingReview}
                    placeholder={
                      existingReview
                        ? 'Sem descrição'
                        : 'Digite sua avaliação...'
                    }
                  />
                </Container.Flex>
              </Container.Flex>

              {!existingReview && (
                <Button.Submit
                  className="w-full cursor-pointer rounded-lg bg-zinc-900 p-2 font-semibold text-white duration-300 hover:bg-white hover:text-zinc-900"
                  text="Adicionar"
                  onClick={handleSubmit}
                  disabled={!!existingReview || isSubmitting || rating === 0}
                />
              )}
            </Container.Flex>
          </>
        ) : (
          <Container.Flex className="h-full flex-col items-center justify-center gap-4">
            <FaMusic className="text-6xl text-zinc-600" />
            <Text.Defaut className="text-center text-zinc-600">
              Selecione um álbum para avaliar
            </Text.Defaut>
          </Container.Flex>
        )}
      </Container.Flex>
    </Container.Flex>
  );
}

export default ReviewSideBar;
