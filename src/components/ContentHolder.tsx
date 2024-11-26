import { useEffect, useState } from "react";
import { CardContentType } from "../types/contentTypes";
import { ContentCard } from "./ContentCard";
import { Box, Text, SimpleGrid } from "@chakra-ui/react";


type ContentHolderProps = {
    pName: string,
    fetch: () => Promise<CardContentType[]>,
    cardFunction: (cardContent: CardContentType) => void,
}

export const ContentHolder = ({ pName, fetch, cardFunction }: ContentHolderProps) => {
    const [cardContent, setCardContent] = useState<CardContentType[]>([]);

    useEffect(() => {
        const fetchContent = async () => {
            fetch().then((result) => setCardContent(result));
        }
        fetchContent();
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
                            return <ContentCard key={cardContent.id} cardContent={cardContent} cardFunction={cardFunction}/>
                        })
                }
            </SimpleGrid>
        </Box>
    )
}