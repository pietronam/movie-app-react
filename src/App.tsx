import { ALL_URL, MOVIE_URL, PEOPLE_URL, TV_URL } from './api/config';
import { ContentDetail } from './components/ContentDetail';
import { ContentHolder } from './components/ContentHolder';
import { useDisclosure, VStack } from '@chakra-ui/react';
import { Button } from './components/ui/button';

function App() {
  const { open, onOpen, onClose } = useDisclosure();



  return (
    <VStack>
      <h1>MOVIEAPP-REACT</h1>

      <Button onClick={onOpen}>Dettagli</Button>
      <ContentDetail open={open} onClose={onClose}></ContentDetail>

      <ContentHolder url={ALL_URL} pName={"All"} />
      <ContentHolder url={MOVIE_URL} pName={"Movies"} />
      <ContentHolder url={TV_URL} pName={"TV Series"} />
      <ContentHolder url={PEOPLE_URL} pName={"Actors"} />
      
    </VStack>
  )
}

export default App
