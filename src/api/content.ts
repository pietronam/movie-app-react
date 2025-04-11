import { CardContentType, ContentType } from "../types/contentTypes";
import { ResponseTrendingType } from "../types/responseTypes";
import { BASE_URL, OPTIONS } from "./config";
import { mapContent } from "./utils";


/**
 * Fetches trending content based on the content's type, then transforms it into the card-ready CardContentType 
 * @param trendingUri: content type URI (movie, tv, people)
 * @returns an array of CardContentType ready to be used in cards
 */
export const getTrendingContent = async (trendingUri: string) => {
        const response = await fetch(BASE_URL + `${trendingUri}`, OPTIONS);
        const data: ResponseTrendingType = await response.json();
        const dataArray: ContentType[] = data.results;

        const cardsArray: CardContentType[] = mapContent(dataArray);
        return cardsArray;
}