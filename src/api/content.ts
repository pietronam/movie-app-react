import { ContentType } from "../types/contentTypes";
import { ResponseTrendingType } from "../types/responseTypes";
import { BASE_URL, OPTIONS } from "./config";

export const getTrendingContent = async (trendingUrl: string) => {
    try {
        const response = await fetch(BASE_URL + `${trendingUrl}`, OPTIONS);
        const data: ResponseTrendingType = await response.json();

        const contentArray: ContentType[] = data.results;
        return contentArray;
    } catch (error) {
        console.error(error);
        return [];
    }
}