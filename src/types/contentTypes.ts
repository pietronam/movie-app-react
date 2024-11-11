type BaseType = {
    id: number,
    media_type: string,
    adult: boolean,
    popularity: number,
}

type MediaType = BaseType & {
    backdrop_path: string,
    overview: string,
    poster_path: string,
    original_language: string,
    genre_ids: number[],
    vote_average: number,
    vote_count: number,
}

export type MovieType = MediaType & {
    title: string,
    original_title: string,
    release_date: string,
    video: boolean,
};

export type TvType = MediaType & {
    name: string,
    original_name: string,
    first_air_date: string,
    origin_country: string[],
}

export type PersonType = BaseType & {
    name: string,
    original_name: string,
    gender: number,
    known_for_department: string,
    profile_path: string,
}

export type ContentType = MovieType | TvType | PersonType; 