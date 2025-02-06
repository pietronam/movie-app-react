import { MovieDetail } from "@/components/MovieDetail";
import { PersonDetail } from "@/components/PersonDetail";
import { TvDetail } from "@/components/TvDetail";
import useContentDetail from "@/hooks/useContentDetail";
import { Text, } from "@chakra-ui/react";

function Detail() {
    const { isPending: loading, isError, data: contentDetail, error } = useContentDetail();
    return (
        <>
            {loading ?
                <Text>Loading...</Text> :
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