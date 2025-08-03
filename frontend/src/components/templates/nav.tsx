import { FaSearch, FaStar, FaUser } from 'react-icons/fa';
import { Container } from '../base/Container';
import { Text } from '../base/Text';

function Nav() {
  return (
    <Container.Flex className="absolute flex h-[20dvh] w-full items-center justify-between bg-black p-8 pt-4 md:h-[8dvh]">
      <Container.Flex className="h-full gap-3">
        <FaStar className="text-3xl text-white" />
        <Text.Defaut className="text-3xl font-bold text-white">
          Avali_e
        </Text.Defaut>
      </Container.Flex>
      <Container.Flex className="h-full gap-3">
        <Container.Flex className="hidden h-8 w-96 gap-2 rounded-full bg-zinc-900 p-2 md:flex">
          <FaSearch className="text-black" />
        </Container.Flex>
      </Container.Flex>
      <Container.Flex className="h-full gap-3">
        <Container.Flex className="h-8 w-8 items-center justify-center gap-2 rounded-full bg-zinc-900 p-2">
          <FaUser className="text-black" />
        </Container.Flex>
      </Container.Flex>
    </Container.Flex>
  );
}

export default Nav;
