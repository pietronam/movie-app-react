import { getContentDetail } from "@/api/contentDetail";
import { ContentDisplayType } from "@/types/contentDetailTypes";
import { CardContentType } from "@/types/contentTypes";
import { useEffect, useState } from "react";

export const useContentDetail = (cardContent: CardContentType) => {
    const [contentDetail, setContentDetail] = useState<ContentDisplayType | null>(null);
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<any>(null);

    useEffect(() => {
        const loadContentDetail = async () => {
            setLoading(true);
            setError(null);

            try {
                let detail: ContentDisplayType;
                detail = await getContentDetail(cardContent.media_type, cardContent.id);
                setContentDetail(detail);
            } catch (e) {
                console.error(e);
                setError(e);
            } finally {
                setLoading(false);
            }
        }
        loadContentDetail();
    }, [cardContent])

    return { contentDetail, loading, error }
}