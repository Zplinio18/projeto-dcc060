import { useEffect, useState } from 'react';
import { FaMusic, FaStar } from 'react-icons/fa';
import { Container } from '../base/Container';
import { Text } from '../base/Text';
import { Button } from '../base/Button';

interface Album {
  id: number;
  titulo: string;
  foto_capa: string;
  gravadora: string;
}

interface ReviewSideBarProps {
  selectedAlbum: Album | null;
}

function ReviewSideBar({ selectedAlbum }: ReviewSideBarProps) {
  const [rating, setRating] = useState(0);
  const [hoverRating, setHoverRating] = useState(0);
  const [reviewText, setReviewText] = useState('');

  const handleStarClick = (starValue: number) => {
    setRating(starValue);
  };

  const handleStarHover = (starValue: number) => {
    setHoverRating(starValue);
  };

  const handleMouseLeave = () => {
    setHoverRating(0);
  };

  const handleSubmit = () => {
    console.log({
      rating,
      review: reviewText,
    });
  };

  useEffect(() => {
    setRating(0);
    setReviewText('');
  }, [selectedAlbum]);

  return (
    <Container.Flex className="flex w-full flex-col p-8 md:h-screen md:w-[25%] md:pt-20">
      <Container.Flex className="min-h-full flex-col items-center gap-4 overflow-auto rounded-xl bg-zinc-950 p-8">
        {selectedAlbum ? (
          <>
            <Container.Flex
              className="flex h-60 w-60 flex-col rounded-full bg-cover bg-center"
              style={{
                backgroundImage: `url(${selectedAlbum?.foto_capa})`,
              }}
            >
              <></>
            </Container.Flex>
            <Text.Defaut className="text-2xl font-bold text-white">
              {selectedAlbum?.titulo}
            </Text.Defaut>
            <Text.Defaut className="text-sm font-medium text-gray-400">
              {selectedAlbum?.gravadora}
            </Text.Defaut>
            <Container.Flex className="h-[40dvh] w-full flex-col items-center justify-between gap-9">
              <Container.Flex className="w-full flex-col items-center gap-12">
                <Container.Flex className="gap-2">
                  {[...Array(5)].map((_, index) => {
                    const starValue = index + 1;
                    return (
                      <FaStar
                        key={starValue}
                        className="cursor-pointer text-3xl transition-colors duration-200"
                        onClick={() => handleStarClick(starValue)}
                        onMouseEnter={() => handleStarHover(starValue)}
                        onMouseLeave={handleMouseLeave}
                        color={
                          starValue <= (hoverRating || rating)
                            ? '#FFFFFF'
                            : '#18181B'
                        }
                      />
                    );
                  })}
                </Container.Flex>
                <Container.Flex className="w-full flex-col gap-2 text-zinc-600">
                  <Text.Defaut className="text-xs font-medium">
                    Descrição (opcional)
                  </Text.Defaut>
                  <textarea
                    className="max-h-60 min-h-60 w-full rounded-lg bg-zinc-900 p-2 text-white"
                    value={reviewText}
                    onChange={(e) => setReviewText(e.target.value)}
                  />
                </Container.Flex>
              </Container.Flex>
              <Button.Submit
                className="w-full rounded-lg bg-zinc-900 p-2 font-semibold text-white duration-300 hover:bg-white hover:text-zinc-900"
                text="Adicionar"
                onClick={handleSubmit}
              />
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
