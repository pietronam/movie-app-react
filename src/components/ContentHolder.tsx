import { useEffect, useState } from "react";
import { CardContentType } from "../types/contentTypes";
import { ContentCard } from "./ContentCard";
import { Box, Text, SimpleGrid } from "@chakra-ui/react";
import { getTrendingContent } from "@/api/content";


type ContentHolderProps = {
    pName: string,
    URI: string,
    cardFunction: (cardContent: CardContentType) => void,
}

export const ContentHolder = ({ pName, URI, cardFunction }: ContentHolderProps) => {
    const [cardContent, setCardContent] = useState<CardContentType[]>([]);

    useEffect(() => {
        getTrendingContent(URI)
            .then(
                (result) => setCardContent(result)
            );
    }, []);

    return (
        <Box>
            <Text textStyle="2xl">{pName}</Text>
            <SimpleGrid

                columns={[1, 2, 2, 3, 4]}
                gap={[1, 1, 2, 3, 4]}
            >
                {
                    cardContent.map(
                        (cardContent) => {
                            return <ContentCard key={cardContent.id} cardContent={cardContent} cardFunction={cardFunction} />
                        })
                }
            </SimpleGrid>
        </Box>
    )
}