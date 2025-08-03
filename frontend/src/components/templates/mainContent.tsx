import { Container } from '../base/Container';
import { Text } from '../base/Text';
import AlbumCard from './albumCard';

interface Album {
  id: number;
  titulo: string;
  foto_capa: string;
  nome: string;
}

interface AlbumCardProps {
  albums: Album[];
  onAlbumSelect: (album: Album) => void;
}

function MainContent({ albums, onAlbumSelect }: AlbumCardProps) {
  return (
    <Container.Flex className="flex h-screen w-full flex-col p-6 pt-20 md:w-[75%]">
      <Container.Flex className="from-1% min-h-full flex-col gap-4 rounded-xl bg-gradient-to-b from-zinc-700 via-zinc-950 via-30% to-zinc-950 to-90% p-8 md:pr-0">
        <Text.Defaut className="text-center text-xl font-semibold text-white md:text-start md:text-3xl">
          Álbuns
        </Text.Defaut>
        <Container.Flex className="max-h-[80dvh] w-full flex-wrap gap-8 overflow-y-auto p-4">
          {albums.map((album) => (
            <AlbumCard
              key={album.id}
              albumName={album.titulo}
              artistName={album.nome}
              imageUrl={album.foto_capa}
              onClick={() => onAlbumSelect(album)}
            />
          ))}
        </Container.Flex>
      </Container.Flex>
    </Container.Flex>
  );
}

export default MainContent;
