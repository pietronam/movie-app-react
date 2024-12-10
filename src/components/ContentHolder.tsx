import { getTrendingContent } from "@/api/content";
import { Flex, Text } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { CardContentType } from "../types/contentTypes";
import { ContentCard } from "./ContentCard";

type ContentHolderProps = {
    pName: string,
    URI: string,
}

export const ContentHolder = ({ pName, URI }: ContentHolderProps) => {
    const [cardContent, setCardContent] = useState<CardContentType[]>([]);

    useEffect(() => {
        getTrendingContent(URI)
            .then(
                (result) => setCardContent(result)
            );
    }, []);

    return (
        <Flex
            w={"100vw"}
            direction={"column"}
            gap={5}
            padding={10}
        >
            <Text
                fontWeight="bold" textStyle="3xl" bgColor="#1B1833" color="#ed7812"
            >{pName}</Text>
            <Flex
                display={"flex"}
                gap={2}
                overflowX={"auto"}
            >
                {
                    cardContent.map(
                        (cardContent) => {
                            return <ContentCard key={cardContent.id} cardContent={cardContent} />
                        })
                }
            </Flex>
        </Flex>
    )
}