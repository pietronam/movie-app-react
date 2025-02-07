import { getSearchContent } from "@/api/search";
import { Box, Flex, Spinner, Text } from "@chakra-ui/react";
import { useQuery } from "@tanstack/react-query";
import { ContentCard } from "./ContentCard";

type SearchContentHolderProps = {
    URI: string,
}

export const SearchContentHolder = ({ URI }: SearchContentHolderProps) => {
    const { isPending, isError, data: cardContent, error } = useQuery({
        queryKey: ['search', URI],
        queryFn: () => getSearchContent(URI)
    });

    if (isPending) {
        return (
            <Box
                padding={5}
                paddingLeft={10}
            >
                <Spinner size="lg" color={"#b6495f"} />
            </Box>
        )
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
            >Search Results</Text>
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