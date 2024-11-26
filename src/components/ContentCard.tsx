import { CardContentType } from "@/types/contentTypes";
import { Card, Image } from "@chakra-ui/react";

type ContentCardProps = {
    cardContent: CardContentType,
    cardFunction: (card: CardContentType) => (void),
}

export const ContentCard = ({ cardContent, cardFunction }: ContentCardProps) => {
    const IMAGE_BASE_URL = import.meta.env.VITE_IMAGE_BASE_URL;

    return (
        <Card.Root
            onClick={() => cardFunction(cardContent)}
            width="80"
            margin="auto"
            rounded="2xl"
            borderColor="gray.700"
            backgroundColor="gray.700"
        >
            <Image
                src={`${IMAGE_BASE_URL}/w300${cardContent.background_img}`}
                alt={ cardContent.name}
                roundedTop="2xl" />
            <Card.Title color="gray.200" margin="1" marginLeft="1.5">{ cardContent.name}</Card.Title>
        </Card.Root >
    )
}