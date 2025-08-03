import { useCallback, useEffect, useState } from 'react';
import { api } from './api/axios';
import { Container } from './components/base/Container';
import MainContent from './components/templates/mainContent';
import Nav from './components/templates/nav';
import ReviewSideBar from './components/templates/reviewSideBar';

interface Album {
  id: number;
  titulo: string;
  foto_capa: string;
  nome: string;
}

function App() {
  const [albums, setAlbums] = useState<Album[]>([]);
  const [selectedAlbum, setSelectedAlbum] = useState<Album | null>(null);

  const fetchAlbums = useCallback(() => {
    api
      .get(`/albuns`)
      .then((response) => {
        setAlbums(response.data);
      })
      .catch((error) => {
        console.error('Erro ao buscar albuns:', error);
      });
  }, []);

  useEffect(() => {
    fetchAlbums();
  }, [fetchAlbums]);

  return (
    <Container.Flex className="h-auto w-full flex-col bg-black md:h-screen md:flex-row">
      <Nav />
      <MainContent albums={albums} onAlbumSelect={setSelectedAlbum} />
      <ReviewSideBar selectedAlbum={selectedAlbum} />
    </Container.Flex>
  );
}

export default App;
