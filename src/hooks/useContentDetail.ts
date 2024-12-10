import { getContentDetail } from "@/api/contentDetail";
import { ContentDisplayType } from "@/types/contentDetailTypes";
import { useEffect, useState } from "react";

export const useContentDetail = (content_type: string, content_id: number,) => {
    const [contentDetail, setContentDetail] = useState<ContentDisplayType | null>(null);
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<any>(null);

    useEffect(() => {
        const loadContentDetail = async () => {
            setLoading(true);
            setError(null);

            try {
                let detail: ContentDisplayType;
                detail = await getContentDetail(content_type, content_id);
                setContentDetail(detail);
            } catch (e) {
                console.error(e);
                setError(e);
            } finally {
                setLoading(false);
            }
        }
        loadContentDetail();
    }, [])

    return { contentDetail, loading, error }
}