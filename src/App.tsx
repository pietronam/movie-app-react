import { DetailDialog } from './components/DetailDialog';
import { ContentHolder } from './components/ContentHolder';
import { Text, useDisclosure, VStack } from '@chakra-ui/react';
import { CardContentType } from './types/contentTypes';
import { useState } from 'react';
import { getMovieCards, getPeopleCards, getTvCards } from './api/content';

function App() {
  const { open, onOpen, onClose } = useDisclosure();
  const [activeContent, setActiveContent] = useState<CardContentType>();

  const handleActiveContent = (cardContent: CardContentType) => {
    setActiveContent(cardContent);
    onOpen();
  }

  return (
    <VStack>
      <Text w="4xl">MOVIEAPP-REACT</Text>
      <DetailDialog open={open} onClose={onClose} cardContent={activeContent}></DetailDialog>

      <ContentHolder fetch={() => getMovieCards()} pName={"Movies"} cardFunction={handleActiveContent} />
      <ContentHolder fetch={() => getTvCards()} pName={"TV Series"} cardFunction={handleActiveContent} />
      <ContentHolder fetch={() => getPeopleCards()} pName={"Actors"} cardFunction={handleActiveContent} />

    </VStack>
  )
}

export default App