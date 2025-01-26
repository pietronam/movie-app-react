import { CardContentType, ContentType } from "@/types/contentTypes";
import { ResponseTrendingType } from "@/types/responseTypes";
import { mapContent } from "./utils";
import { BASE_URI, OPTIONS, SEARCH_URI } from "./config";

export const getSearchContent = async (searchUri: string) => {
    try {
        const URI = BASE_URI + SEARCH_URI + `?query=${searchUri}`;
        const response = await fetch(URI, OPTIONS);
        const data: ResponseTrendingType = await response.json();
        const dataArray: ContentType[] = data.results;

        const cardsArray: CardContentType[] = mapContent(dataArray);
        return cardsArray;
    } catch (error) {
        console.error(error);
        return [];
    }
}