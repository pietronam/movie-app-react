import { Card, Image } from "@chakra-ui/react";

type ContentCardProps = {
    content: {
        id: number,
        overview?: string,
    } & ({ name: string; title?: never } | { title: string; name?: never })
    & ({ backdrop_path: string; profile_path?: never } | { profile_path: string; backdrop_path?: never });
}

export const ContentCard = ({ content }: ContentCardProps) => {
    const IMAGE_BASE_URL = import.meta.env.VITE_IMAGE_BASE_URL;

    return (
        <Card.Root
            width="80"
            margin="auto"
            rounded="2xl"
            borderColor="gray.700"
            backgroundColor="gray.700"
        >
            <Image
                src={`${IMAGE_BASE_URL}/w300${content.backdrop_path || content.profile_path}`}
                alt={content.name || content.title}
                roundedTop="2xl" />
            <Card.Title color="gray.200" margin="1" marginLeft="1.5">{content.name || content.title}</Card.Title>
        </Card.Root >
    )
}



/* Codice vecchio, esempio per implementare un contatore di click e dimostrare useState e useEffect
    

//useState() ritorna [variabile, funzione per cambiare la variabile]    
    const [clickCount, setClickCount] = useState(0);

    const handleClickCount = () => {
        setClickCount(clickCount + 1); //setClickCount() è asincrona
        console.log(clickCount);
    }

    const handleClick = (message: string | number) => {
        console.log(`Cliccato ${message}`);
    }

    return (
        <div style={{ backgroundColor: 'red' }} onClick={handleClickCount}>
            <h1 onClick={() => handleClick(content.name)}>{content.name}</h1>
            <p onClick={() => handleClick(content.id)}>{content.id}</p>
            <p onClick={() => handleClick(content.overview)}>{content.overview}</p>
            <p>Numero di click: {clickCount}</p>
        </div>
    )
}
 */