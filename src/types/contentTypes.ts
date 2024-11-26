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

/* export type ContentType = {
    id: number,
    name: string,
    media_type: string,
    adult: boolean,
    popularity: number,
    origin: string[],           //original_language(movie) || origin_country(tv)
    main_img: string,           //poster_path(media) || profile_path (person) 


    background_img?: string,    //backdrop_path (media)
    description?: string,       //overview(media)
    vote_average?: number,      //media
    release_date?: string,      //release_date(movie) || first_air_date (tv)
    gender?: number,            //person

}
 */