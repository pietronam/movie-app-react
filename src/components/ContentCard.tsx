import { MovieType } from "@/types/contentTypes";
import { Card, Image } from "@chakra-ui/react";

type ContentCardProps = {
    content: MovieType/* {
        id: number,
        overview?: string,
    } & ({ name: string; title?: never } | { title: string; name?: never })
    & ({ backdrop_path: string; profile_path?: never } | { profile_path: string; backdrop_path?: never }); */

    cardFunction: (content: MovieType) => (void),
}

export const ContentCard = ({ content, cardFunction }: ContentCardProps) => {
    const IMAGE_BASE_URL = import.meta.env.VITE_IMAGE_BASE_URL;

    return (
        <Card.Root
            onClick={() => cardFunction(content)}
            width="80"
            margin="auto"
            rounded="2xl"
            borderColor="gray.700"
            backgroundColor="gray.700"
        >
            <Image
                src={`${IMAGE_BASE_URL}/w300${content.backdrop_path /* || content.profile_path */}`}
                alt={/* content.name || */ content.title}
                roundedTop="2xl" />
            <Card.Title color="gray.200" margin="1" marginLeft="1.5">{/* content.name || */ content.title}</Card.Title>
        </Card.Root >
    )
}