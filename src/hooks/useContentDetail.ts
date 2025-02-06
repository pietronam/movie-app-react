import { getContentDetail } from "@/api/contentDetail";
import { useQuery } from "@tanstack/react-query";
import { useParams } from "react-router";

const useContentDetail = () => {
    const { content_type, content_id } = useParams();

    if (!content_type) {
        throw console.error("Error: no content type");
    }

    if (!content_id) {
        throw console.error("Error: no content id");
    }

    const { isPending, isError, error, data } = useQuery({
        queryKey: ['detail', content_type, content_id],
        queryFn: () => getContentDetail(content_type, parseInt(content_id))
    });

    return ({isPending, isError, error, data});
}

export default useContentDetail;