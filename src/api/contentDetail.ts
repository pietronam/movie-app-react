import { MovieDetailType, TvDetailType, PersonDetailType } from "@/types/contentDetailTypes";
import { BASE_URL, OPTIONS } from "./config";
import { ContentDisplayType, } from "@/types/contentDetailTypes";


export const getContentDetail = async (contentType: string, contentId: number): Promise<ContentDisplayType> => {
    try {
        switch (contentType) {
            case "movie": {
                const response = await fetch(BASE_URL + `movie/${contentId}`, OPTIONS);
                const movieData: MovieDetailType = await response.json();

                const DisplayData: ContentDisplayType = {
                    id: movieData.id,
                    media_type: "movie",
                    name: movieData.title,
                    img: movieData.poster_path,
                    description: movieData.overview,
                    release_or_birthday: movieData.release_date,
                    website: movieData.homepage,
                    origin_country: movieData.origin_country,
                    languages: movieData.spoken_languages.map((element) => { return element.english_name; }),
                    production_companies: movieData.production_companies?.map(company => company.name),
                    vote_average: movieData.vote_average,
                    vote_count: movieData.vote_count,
                    status: movieData.status,
                    runtime: movieData.runtime,
                    tagline: movieData.tagline
                }

                return DisplayData;
            }
            case "tv": {
                const response = await fetch(BASE_URL + `tv/${contentId}`, OPTIONS);
                const tvData: TvDetailType = await response.json();

                const DisplayData: ContentDisplayType = {
                    id: tvData.id,
                    media_type: "tv",
                    name: tvData.name,
                    img: tvData.poster_path,
                    description: tvData.overview,
                    release_or_birthday: tvData.first_air_date,
                    website: tvData.homepage,
                    origin_country: tvData.origin_country,
                    languages: tvData.spoken_languages.map((element) => { return element.english_name; }),
                    production_companies: tvData.production_companies?.map(company => company.name),
                    vote_average: tvData.vote_average,
                    vote_count: tvData.vote_count,
                    status: tvData.status,
                    seasons: tvData.seasons?.map(season => season.name),
                }

                return DisplayData;
            }
            case "person": {
                const response = await fetch(BASE_URL + `person/${contentId}`, OPTIONS);
                const personData: PersonDetailType = await response.json();

                const DisplayData: ContentDisplayType = {
                    id: personData.id,
                    media_type: "person",
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
                    media_type: "unknown",
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
            media_type: "unknown",
            name: "Unknown",
            img: "",
            description: "No content available.",
            release_or_birthday: "",
            website: "",
            origin_country: "",
        };
    }
}
