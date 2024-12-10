import { Flex, Heading, VStack } from '@chakra-ui/react';
import { MOVIE_URI, PEOPLE_URI, TV_URI } from '../api/config';
import { ContentHolder } from '../components/ContentHolder';

function Home() {
  return (
    <VStack
        padding={10}>
      <Flex
        direction="column"
        gap={5}
        alignItems={'center'}
        padding={20}
      >
        <Heading size={"6xl"} color={"#ed7812"} fontWeight={"bolder"}>MovieApp.</Heading>
        <Heading size={"lg"}>Sit back and relax. We'll take care of your movie night.</Heading>
      </Flex>

      <ContentHolder URI={MOVIE_URI} pName={"Movies"} />
      <ContentHolder URI={TV_URI} pName={"TV Series"} />
      <ContentHolder URI={PEOPLE_URI} pName={"Actors"} />
    </VStack>
  )
}

export default Home