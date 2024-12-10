import { useContentDetail } from "@/hooks/useContentDetail";
import { Box, Text, Image, Flex } from "@chakra-ui/react";
import { useParams } from "react-router";

function DetailLayout() {
    const IMAGE_BASE_URL = import.meta.env.VITE_IMAGE_BASE_URL;

    const { content_type, content_id } = useParams();

    if (!content_type) {
        throw console.error();
    }

    if (!content_id) {
        throw console.error();
    }

    const { contentDetail, loading, error } = useContentDetail(content_type, parseInt(content_id))

    return (
        <>
            {loading ? (<Text>Loading...</Text>) :
                error ? (<Text>{error}</Text>) :
                    contentDetail ? (
                        <Flex>
                            <Box w="2/3">
                                <Text textStyle="5xl">{contentDetail.name}</Text>
                                <Text textStyle="md">{contentDetail.description}</Text>
                            </Box>
                            <Box w="1/3">
                                <Image src={`${IMAGE_BASE_URL}/w500/${contentDetail.img}`} maxHeight={"100%"} />
                            </Box>
                        </Flex>
                    ) : (<Text>No content available.</Text>)
            }
        </>
    )
}

export default DetailLayout