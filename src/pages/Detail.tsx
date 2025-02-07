import { MovieDetail } from "@/components/MovieDetail";
import { PersonDetail } from "@/components/PersonDetail";
import { TvDetail } from "@/components/TvDetail";
import useContentDetail from "@/hooks/useContentDetail";
import { Box, Spinner, Text, } from "@chakra-ui/react";

function Detail() {
    const { isPending: loading, isError, data: contentDetail, error } = useContentDetail();
    return (
        <>
            {loading ?
                <Box
                    padding={5}
                    paddingLeft={10}
                >
                    <Spinner size="lg" color={"#b6495f"} />
                </Box> :
                isError ? <Text>{error?.message}</Text> :
                    contentDetail ?
                        (
                            contentDetail.media_type === "movie" ? <MovieDetail contentDetail={contentDetail} />
                                : contentDetail.media_type === "tv" ? <TvDetail contentDetail={contentDetail} />
                                    : <PersonDetail contentDetail={contentDetail} />
                        )
                        : <Text>No content available.</Text >
            }
        </>
    )
}

export default Detail