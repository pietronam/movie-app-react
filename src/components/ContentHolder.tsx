import { getTrendingContent } from "@/api/content";
import { Flex, Text } from "@chakra-ui/react";
import { useQuery } from "@tanstack/react-query";
import { ContentCard } from "./ContentCard";

type ContentHolderProps = {
    pName: string,
    URI: string,
}

export const ContentHolder = ({ pName, URI }: ContentHolderProps) => {
    const { isPending, isError, data: cardContent, error } = useQuery({ queryKey: ['trending', URI], queryFn: () => getTrendingContent(URI)});

    if (isPending) {
        return <span>Loading...</span>
    }

    if (isError) {
        return <span>Error: {error.message}</span>
    }

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