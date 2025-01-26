import { getContentDetail } from "@/api/contentDetail";
import { MovieDetail } from "@/components/MovieDetail";
import { PersonDetail } from "@/components/PersonDetail";
import { TvDetail } from "@/components/TvDetail";
import { Text, } from "@chakra-ui/react";
import { useQuery } from "@tanstack/react-query";
import { useParams } from "react-router";

function Detail() {

    const { content_type, content_id } = useParams();

    if (!content_type) {
        throw console.error();
    }

    if (!content_id) {
        throw console.error();
    }

    const { isPending: loading, isError: error, data: contentDetail } = useQuery({
        queryKey: ['detail', content_type, content_id],
        queryFn: () => getContentDetail(content_type, parseInt(content_id))
    });


    return (
        <>
            {loading ?
                <Text>Loading...</Text> :
                error ? <Text>{error}</Text> :
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