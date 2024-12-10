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
                    release_or_birthday: movieData.release_date,
                    website: movieData.homepage,
                    origin_country: movieData.origin_country,
                    languages: movieData.spoken_languages.map(
                        (element) => {return element.english_name;}),
                    production_companies: movieData.production_companies,
                    vote_average: movieData.vote_average,
                    vote_count: movieData.vote_count,
                    status: movieData.status,
                    runtime: movieData.runtime,
                    tagline: movieData.tagline
                }

                return DisplayData;
            }
            case "tv": {
                const response = await fetch(BASE_URI + `tv/${contentId}`, OPTIONS);
                const tvData: TvDetailType = await response.json();

                const DisplayData: ContentDisplayType = {
                    id: tvData.id,
                    name: tvData.name,
                    img: tvData.poster_path,
                    description: tvData.overview,
                    release_or_birthday: tvData.first_air_date,
                    website: tvData.homepage,
                    origin_country: tvData.origin_country,
                    languages: tvData.spoken_languages.map(
                        (element) => {return element.english_name;}),
                    production_companies: tvData.production_companies,
                    vote_average: tvData.vote_average,
                    vote_count: tvData.vote_count,
                    status: tvData.status,
                    seasons: tvData.seasons,
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
                    release_or_birthday: personData.birthday,
                    deathday: personData.deathday,
                    website: personData.homepage,
                    origin_country: personData.place_of_birth,
                    known_for_department: personData.known_for_department,
                }

                return DisplayData;
            }
            default:
                return {
                    id: 0,
                    name: "Unknown",
                    img: "",
                    description: "No content available.",
                    release_or_birthday: "",
                    website: "",
                    origin_country: "",
                };
        }
    } catch (error) {
        console.error(error);
        return {
            id: 0,
            name: "Unknown",
            img: "",
            description: "No content available.",
            release_or_birthday: "",
            website: "",
            origin_country: "",
        };
    }
}
