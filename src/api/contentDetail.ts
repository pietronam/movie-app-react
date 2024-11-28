import { MovieDetailType, TvDetailType, PersonDetailType } from "@/types/contentDetailTypes";
import { BASE_URL, OPTIONS } from "./config";
import { ContentDisplayType, } from "@/types/contentDisplayTypes";

export const getMovieDetail = async (movieId: number): Promise<ContentDisplayType> => {
    try {
        const response = await fetch(BASE_URL + `movie/${movieId}`, OPTIONS);
        const movieData: MovieDetailType = await response.json();

        const DisplayData: ContentDisplayType = {
            id: movieData.id,
            name: movieData.title,
            img: movieData.poster_path,
            description: movieData.overview,
        }

        return DisplayData;
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

export const getTvDetail = async (tvId: number) => {
    try {
        const response = await fetch(BASE_URL + `tv/${tvId}`, OPTIONS);
        const tvData: TvDetailType = await response.json();

        const DisplayData: ContentDisplayType = {
            id: tvData.id,
            name: tvData.name,
            img: tvData.poster_path,
            description: tvData.overview,
        }

        return DisplayData;
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

export const getPersonDetail = async (personId: number) => {
    try {
        const response = await fetch(BASE_URL + `person/${personId}`, OPTIONS);
        const personData: PersonDetailType = await response.json();

        const DisplayData: ContentDisplayType = {
            id: personData.id,
            name: personData.name,
            img: personData.profile_path,
            description: personData.biography,
        }

        return DisplayData;
    } catch (error) {
        console.error(error);
        return {
            id: 0,
            name: "Unknown",
            img: "",
            description: "No content available.",
        };
    }}