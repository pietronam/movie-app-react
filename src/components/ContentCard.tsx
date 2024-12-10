import { CardContentType } from "@/types/contentTypes";
import { Card, Image } from "@chakra-ui/react";
import { Link as RouterLink } from "react-router";

type ContentCardProps = {
    cardContent: CardContentType,
}

export const ContentCard = ({ cardContent }: ContentCardProps) => {
    const IMAGE_BASE_URL = import.meta.env.VITE_IMAGE_BASE_URL;

    return (
        <RouterLink to={`detail/${cardContent.media_type}/${cardContent.id}`}>
            <Card.Root
                width={cardContent.media_type === "person" ? 48 : 80}
                rounded="2xl"
                borderColor="#441752"
                backgroundColor="#32113c"
                flexShrink={0}
            >
                <Image
                    width={cardContent.media_type === "person" ? 48 : 80}
                    src={`${IMAGE_BASE_URL}/w300${cardContent.background_img}`}
                    alt={cardContent.name}
                    roundedTop="2xl" />
                <Card.Title truncate color="#AB4459" margin="1" marginLeft="1.5">{cardContent.name}</Card.Title>
            </Card.Root >
        </RouterLink>
    )
}
