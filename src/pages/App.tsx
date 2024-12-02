import { DetailDialog } from '../components/DetailDialog';
import { ContentHolder } from '../components/ContentHolder';
import { Text, useDisclosure, VStack } from '@chakra-ui/react';
import { CardContentType } from '../types/contentTypes';
import { useState } from 'react';
import { MOVIE_URI, PEOPLE_URI, TV_URI } from '../api/config';

function App() {
  const { open, onOpen, onClose } = useDisclosure();
  const [activeContent, setActiveContent] = useState<CardContentType>();

  const handleActiveContent = (cardContent: CardContentType) => {
    setActiveContent(cardContent);
    onOpen();
  }

  return (
    <VStack>
      <Text w="8xl">MOVIEAPP-REACT</Text>
      <DetailDialog open={open} onClose={onClose} cardContent={activeContent}></DetailDialog>

      <ContentHolder URI={MOVIE_URI} pName={"Movies"} cardFunction={handleActiveContent} />
      <ContentHolder URI={TV_URI} pName={"TV Series"} cardFunction={handleActiveContent} />
      <ContentHolder URI={PEOPLE_URI} pName={"Actors"} cardFunction={handleActiveContent} />

    </VStack>
  )
}

export default App