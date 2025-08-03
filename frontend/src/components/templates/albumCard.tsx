import { Container } from '../base/Container';
import { Text } from '../base/Text';

interface AlbumCardProps {
  albumName: string;
  artistName: string;
  imageUrl: string;
  onClick: () => void;
}

function AlbumCard({
  albumName,
  artistName,
  imageUrl,
  onClick,
}: AlbumCardProps) {
  return (
    <Container.Flex
      className="cursor-pointer flex-col gap-2 rounded-lg p-3 duration-300 hover:bg-zinc-700/50"
      onClick={onClick}
    >
      <Container.Flex
        className="flex h-44 w-44 flex-col rounded-xl bg-cover bg-center"
        style={{
          backgroundImage: `url(${imageUrl})`,
        }}
      >
        <></>
      </Container.Flex>
      <Container.Flex className="flex-col">
        <Text.Defaut className="text-lg font-medium text-white">
          {albumName}
        </Text.Defaut>
        <Text.Defaut className="text-sm font-medium text-gray-400">
          {artistName}
        </Text.Defaut>
      </Container.Flex>
    </Container.Flex>
  );
}

export default AlbumCard;
