import { CardContentType, ContentType, MovieType, PersonType, TvType } from "../types/contentTypes";

export const mapContent = (dataArray?: ContentType[]): CardContentType[] => {
    if (!dataArray) {
        throw new Error("dataArray is required");
    }

    const cardsArray: CardContentType[] = dataArray.map((element) => {
        let movie: MovieType;
        let tv: TvType;
        let person: PersonType;

        switch (element.media_type) {
            case "movie":
                movie = element as MovieType;
                return {
                    id: movie.id,
                    name: movie.title,
                    media_type: "movie",
                    adult: movie.adult,
                    popularity: movie.popularity,
                    main_img: movie.poster_path,
                    background_img: movie.backdrop_path,
                    description: movie.overview,
                    vote_average: movie.vote_average,
                    release_date: movie.release_date,
                };
            case "tv":
                tv = element as TvType;
                return {
                    id: tv.id,
                    name: tv.name,
                    media_type: "tv",
                    adult: tv.adult,
                    popularity: tv.popularity,
                    main_img: tv.poster_path,
                    background_img: tv.backdrop_path,
                    description: tv.overview,
                    vote_average: tv.vote_average,
                    release_date: tv.first_air_date,
                };
            case "person":
                person = element as PersonType;
                return {
                    id: person.id,
                    name: person.name,
                    media_type: "person",
                    adult: person.adult,
                    popularity: person.popularity,
                    main_img: person.profile_path,
                    background_img: person.profile_path,
                    gender: person.gender,
                };
            default:
                throw new Error(`Unsupported media type: ${(element as ContentType).media_type}`);
        }
    });

    return cardsArray;
}