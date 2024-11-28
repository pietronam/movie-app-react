import { MovieDetailType, TvDetailType, PersonDetailType } from "@/types/contentDetailTypes";
import { BASE_URI, OPTIONS } from "./config";
import { ContentDisplayType, } from "@/types/contentDetailTypes";

export const getContentDetail = async (contentType: string, contentId: number): Promise<ContentDisplayType> => {
    try {
        switch (contentType) {
            case "movie": {
                const response = await fetch(BASE_URI + `movie/${contentId}`, OPTIONS);
                const movieData: MovieDetailType = await response.json();

                const DisplayData: ContentDisplayType = {
                    id: movieData.id,
                    name: movieData.title,
                    img: movieData.poster_path,
                    description: movieData.overview,
                }

                return DisplayData;
            }
            case "tv":{
                const response = await fetch(BASE_URI + `tv/${contentId}`, OPTIONS);
                const tvData: TvDetailType = await response.json();
        
                const DisplayData: ContentDisplayType = {
                    id: tvData.id,
                    name: tvData.name,
                    img: tvData.poster_path,
                    description: tvData.overview,
                }
        
                return DisplayData;
            }
            case "person": {
                const response = await fetch(BASE_URI + `person/${contentId}`, OPTIONS);
                const personData: PersonDetailType = await response.json();

                const DisplayData: ContentDisplayType = {
                    id: personData.id,
                    name: personData.name,
                    img: personData.profile_path,
                    description: personData.biography,
                }

                return DisplayData;
            }
            default:
                return {
                    id: 0,
                    name: "Unknown",
                    img: "",
                    description: "No content available.",
                };
        }
    } catch (error) {
        console.error(error);
        return {
            id: 0,
            name: "Unknown",
            img: "",
            description: "No content available.",
        };
    }
}
