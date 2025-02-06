import useContentHolder from "@/hooks/useContentHolder";
import { Flex, Text } from "@chakra-ui/react";
import { ContentCard } from "./ContentCard";

type ContentHolderProps = {
    pName: string,
    URI: string,
}

export const ContentHolder = ({ pName, URI }: ContentHolderProps) => {
    const { isPending: loading, isError, error, data: cardContent } = useContentHolder(URI);

    if (loading) {
        return "Loading..."
    }

    if (isError) {
        return `Error: ${error?.message}`
    }

    if (!cardContent) {
        return "No content available."
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