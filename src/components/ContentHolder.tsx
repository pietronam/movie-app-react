import useContentHolder from "@/hooks/useContentHolder";
import { Box, Flex, Spinner, Text } from "@chakra-ui/react";
import { ContentCard } from "./ContentCard";

type ContentHolderProps = {
    pName: string,
    URI: string,
}

export const ContentHolder = ({ pName, URI }: ContentHolderProps) => {
    const { isPending: loading, isError, error, data: cardContent } = useContentHolder(URI);

    if (loading) {
        return (<Box
            padding={5}
            paddingLeft={10}
        >
            <Spinner size="lg" color={"#b6495f"} />
        </Box>)
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