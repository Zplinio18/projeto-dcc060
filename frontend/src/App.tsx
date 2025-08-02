import { Container } from './components/base/Container';
import { Text } from './components/base/Text';

function App() {
  return (
    <Container.Flex className="flex h-screen w-full flex-col items-center justify-center bg-slate-800">
      <Text.Defaut className="text-5xl font-bold text-white">
        Avalie seu Album
      </Text.Defaut>
    </Container.Flex>
  );
}

export default App;
