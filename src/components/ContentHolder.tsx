import { useEffect, useState } from "react";
import { ContentType } from "../types/contentTypes";
import { getTrendingContent } from "../api/content";
import { ContentCard } from "./ContentCard";

type ContentHolderProps = {
    pName: string,
    url: string,
}

export const ContentHolder = ({ url, pName }: ContentHolderProps) => {
    const [content, setContent] = useState<ContentType[]>([]);

    useEffect(() => {
        const fetchContent = async () => {
            setContent(await getTrendingContent(url));
        }
        fetchContent();
    }, []);

    return (
        <>
            <h2>{pName}</h2>
            <div style={{ width: "100%" }}>
                {
                    content.map(
                        (content) => {
                            switch (content.media_type) {
                                case "movie":
                                    return <ContentCard pClassName={"movie-card"} key={content.id} content={content}/>
                                case "tv":
                                    return <ContentCard pClassName={"tv-card"} key={content.id} content={content} />
                                case "person":
                                    return <ContentCard pClassName={"person-card"} key={content.id} content={content} />
                            }
                        })
                }
            </div>
        </>
    )
}