import { IMAGE_BASE_URL } from "@/api/config";
import { ContentDisplayType } from "@/types/contentDetailTypes";
import { Flex, Text, Box, Image } from "@chakra-ui/react";

type TvDetailProps = {
    contentDetail: ContentDisplayType;
}

export const TvDetail = ({ contentDetail }: TvDetailProps) => {
    // const IMAGE_BASE_URL = import.meta.env.VITE_IMAGE_BASE_URL;

    return (
        <>
            <Flex w="100vw"
                alignItems={"center"}
                justifyContent={"center"} >
                <Flex
                    w={"2/3"}
                    maxW={"80vw"}
                    paddingTop={16}
                    paddingBottom={16}
                    justifyContent={"space-between"}
                    direction={["column-reverse", undefined, undefined, "row"]}
                >
                    <Flex direction={"column"} gap={4}>
                        <Text textStyle="4xl" fontWeight={"bold"} color={"#ed7812"}>{contentDetail.name}</Text>

                        <Text textStyle="md" w={["100%", undefined, undefined, "4/5"]}>{contentDetail.description}</Text>
                        <Box marginTop={"auto"}>
                            <Text><b>Seasons: </b>{contentDetail.seasons?.join(", ")}</Text>
                            <Text><b>Release date: </b>{contentDetail.release_or_birthday}</Text>
                            <Text><b>Languages: </b>{contentDetail.languages?.join(",   ")}</Text>
                            <br />
                            <Text><b>Origin Country: </b>{contentDetail.origin_country}</Text>
                            <Text><b>Production Companies: </b>{contentDetail.production_companies?.join(", ")}</Text>
                            <br />
                            <Text><b>Vote Average: </b>{contentDetail.vote_average}</Text>
                            <Text><b>Website: </b>{contentDetail.website}</Text>

                        </Box>
                    </Flex>
                    <Image src={contentDetail.img ? `${IMAGE_BASE_URL}/w500/${contentDetail.img}` : "/image-placeholder.jpg"}
                        width={["xl", "lg", "md", "2/6"]}
                        maxH={"xl"}
                        borderRadius={20} />
                </Flex>
            </Flex >
        </>
    )
}