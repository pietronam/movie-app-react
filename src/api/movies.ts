import { MovieType } from "../types/movieTypes";
import { ResponseTrendingType } from "../types/responseTypes";
import { BASE_URL, OPTIONS } from "./config";


//FIXME: Inserire in questa funzione la chiamata fetch per recuperare i dati dal server
/**
 * 1) Modificare MovieType in modo che possa contenere un movie di Omdb API corretto
 * 2) Implementare la funzione getMovies in modo che faccia una chiamata fetch a Omdb API
 * @returns 
 */

export const getMovies = async (trendingUrl: string) => {
    try {
        const response = await fetch(BASE_URL + `${trendingUrl}`, OPTIONS);
        const data: ResponseTrendingType = await response.json();

        const movieArray: MovieType[] = data.results;
        console.log(movieArray);
        return movieArray;
    } catch (error) {
        console.error(error);
        return [];
    }
}