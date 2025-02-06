import { getTrendingContent } from "@/api/content";
import { useQuery } from "@tanstack/react-query";

const useContentHolder = (URI: string) => {
    const { isPending, isError, error, data } = useQuery({
        queryKey: ['trending', URI],
        queryFn: () => getTrendingContent(URI)
    });

    return ({ isPending, isError, error, data })
}

export default useContentHolder