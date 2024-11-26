import { ContentDetail } from './components/ContentDetail';
import { ContentHolder } from './components/ContentHolder';
import { useDisclosure, VStack } from '@chakra-ui/react';
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
      <h1>MOVIEAPP-REACT</h1>
      <ContentDetail open={open} onClose={onClose} cardContent={activeContent}></ContentDetail>

      <ContentHolder fetch={() => getMovieCards()} pName={"Movies"} cardFunction={handleActiveContent} />
      <ContentHolder fetch={() => getTvCards()} pName={"TV Series"} cardFunction={handleActiveContent} />
      <ContentHolder fetch={() => getPeopleCards()} pName={"Actors"} cardFunction={handleActiveContent} />

    </VStack>
  )
}

export default App