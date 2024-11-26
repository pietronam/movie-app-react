import { MOVIE_URL, PEOPLE_URL, TV_URL } from './api/config';
import { ContentDetail } from './components/ContentDetail';
import { ContentHolder } from './components/ContentHolder';
import { useDisclosure, VStack } from '@chakra-ui/react';
import { MovieType } from './types/contentTypes';
import { useState } from 'react';

function App() {
  const { open, onOpen, onClose } = useDisclosure();
  const [activeContent, setActiveContent] = useState<MovieType>();

  const handleActiveContent = (movie: MovieType) => {
    setActiveContent(movie);
    onOpen();
  }

  return (
    <VStack>
      <h1>MOVIEAPP-REACT</h1>
      <ContentDetail open={open} onClose={onClose} content={activeContent}></ContentDetail>

      <ContentHolder url={MOVIE_URL} pName={"Movies"} cardFunction={handleActiveContent}/>
      <ContentHolder url={TV_URL} pName={"TV Series"} cardFunction={handleActiveContent}/>
      <ContentHolder url={PEOPLE_URL} pName={"Actors"} cardFunction={handleActiveContent}/>

    </VStack>
  )
}

export default App