import { useEffect, useState } from "react";
import { ContentType, MovieType } from "../types/contentTypes";
import { getTrendingContent } from "../api/content";
import { ContentCard } from "./ContentCard";
import { Box, Text, SimpleGrid } from "@chakra-ui/react";


type ContentHolderProps = {
    pName: string,
    url: string,
    cardFunction: (content: MovieType) => void,
}

export const ContentHolder = ({ url, pName, cardFunction }: ContentHolderProps) => {
    const [content, setContent] = useState<ContentType[]>([]);

    useEffect(() => {
        const fetchContent = async () => {
            setContent(await getTrendingContent(url));
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
                    content.map(
                        (content) => {
                            return <ContentCard key={content.id} content={content as MovieType} cardFunction={cardFunction}/>
                        })
                }
            </SimpleGrid>
        </Box>
    )
}