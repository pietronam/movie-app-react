import { useEffect, useState } from "react";
import { ContentType } from "../types/contentTypes";
import { getTrendingContent } from "../api/content";
import { ContentCard } from "./ContentCard";

export const ContentHolder = (url: string) => {
    const [content, setContent] = useState<ContentType[]>([]);

    useEffect(() => {
        const fetchContent = async () => {
          setContent(await getTrendingContent(url));
        }
        fetchContent();
      }, []);

    return (
        <div style={{width: "100%"}}>
            {
                content.map(
                    (content) => {
                        return <ContentCard key={content.id} content={content} />
                    })
            }
        </div>
    )
}