import { useEffect, useState } from "react";
import { ContentType } from "../types/contentTypes";
import { getTrendingContent } from "../api/content";
import { ContentCard } from "./ContentCard";
import { Box, Text, SimpleGrid } from "@chakra-ui/react";


type ContentHolderProps = {
    pName: string,
    url: string,
}

export const ContentHolder = ({ url, pName }: ContentHolderProps) => {
    const [content, setContent] = useState<ContentType[]>([]);

    useEffect(() => {
        const fetchContent = async () => {
            setContent(await getTrendingContent(url));
        }
        fetchContent();
    }, []);

    return (
        <Box
            w="100vw"
        >
            <Text 
            textStyle="2xl"
            paddingX="20"
            >{pName}</Text>
            <SimpleGrid
                w="100%"
                paddingX={{sm:"", lg:"20"}}
                columns={[1, 2, 2, 3, 4]}
                gap={[1, 1, 2, 3, 4]}
            >
                {
                    content.map(
                        (content) => {
                            return <ContentCard key={content.id} content={content} />
                        })
                }
            </SimpleGrid>
        </Box>
    )
}