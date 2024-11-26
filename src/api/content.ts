import { ContentType, MovieType, PersonType, TvType, CardContentType } from "../types/contentTypes";
import { ResponseTrendingType } from "../types/responseTypes";
import { BASE_URL, MOVIE_URL, OPTIONS, PEOPLE_URL, TV_URL } from "./config";

export const getTrendingContent = async (trendingUrl: string) => {
    try {
        const response = await fetch(BASE_URL + `${trendingUrl}`, OPTIONS);
        const data: ResponseTrendingType = await response.json();
        const dataArray: ContentType[] = data.results;

        return dataArray;

    } catch (error) {
        console.error(error);
        return [];
    }
}

export const getMovieCards = async () => {
    // Chiamata fetch che restituisce un array di oggetti generici.
    const content: ContentType[] = await getTrendingContent(MOVIE_URL);

    // Dovendo estrarre gli attributi di un Movie procedo a fare il cast
    // esplicito in MovieTypes[] senza ulteriori test.
    const movies = content as MovieType[]

    // Devo ciclare l'array movieCast e creare un array di tipo CardContentType da restituire

    const cardsArray: CardContentType[] = movies.map(element => {
        return {
            id: element.id,
            name: element.title,
            media_type: "movie",
            adult: element.adult,
            popularity: element.popularity,
            main_img: element.poster_path,

            background_img: element.backdrop_path,
            description: element.overview,
            vote_average: element.vote_average,
            release_date: element.release_date,
        }
    })
    return cardsArray;
}

export const getTvCards = async () => {
    const content: ContentType[] = await getTrendingContent(TV_URL);
    const tv = content as TvType[]

    const cardsArray: CardContentType[] = tv.map(element => {
            return {
            id: element.id,
            name: element.name,
            media_type: "tv",
            adult: element.adult,
            popularity: element.popularity,
            main_img: element.poster_path,
            background_img: element.backdrop_path,
            
            description: element.overview,
            vote_average: element.vote_average,
            release_date: element.first_air_date,
        }
    })
    return cardsArray;
}

export const getPeopleCards = async () => {
    const content: ContentType[] = await getTrendingContent(PEOPLE_URL);
    const people = content as PersonType[]

    const cardsArray: CardContentType[] = people.map(element => {
        return {
            id: element.id,
            name: element.name,
            media_type: "person",
            adult: element.adult,
            popularity: element.popularity,
            main_img: element.profile_path,
            background_img: element.profile_path,

            gender: element.gender,
        
        }
    })
    return cardsArray;
}