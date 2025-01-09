import { MovieDetail } from "@/components/MovieDetail";
import { PersonDetail } from "@/components/PersonDetail";
import { TvDetail } from "@/components/TvDetail";
import { useContentDetail } from "@/hooks/useContentDetail";
import { Text, } from "@chakra-ui/react";
import { useParams } from "react-router";

function DetailLayout() {

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
            {/* {() => {
                if (loading) {
                    return <Text>Loading...</Text>
                }
                else if (error) {
                    return <Text>{error}</Text>
                }
                else if (contentDetail) {
                    switch (contentDetail.media_type) {
                                    case "movie":
                                        return <MovieDetail contentDetail={contentDetail} />

                                    case "tv":
                                        return <TvDetail contentDetail={contentDetail} />

                                    case "person":
                                        return <PersonDetail contentDetail={contentDetail} />
                                }                }
                else return (<Text>No content available.</Text>)
            }} */}



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

export default DetailLayout