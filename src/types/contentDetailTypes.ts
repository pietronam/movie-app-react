type BaseDetailType = {
    id: number,
    adult: boolean
    popularity: number,
    homepage: string
}

type MediaDetailType = BaseDetailType & {
    backdrop_path: string
    genres: [
        {
            id: number,
            name: string,
        }
    ],
    origin_country: string[],
    original_language: string,
    overview: string,
    poster_path: string,
    production_companies: [
        {
            id: number,
            logo_path: string,
            name: string,
            origin_country: string,
        }
    ],
    production_countries: [
        {
            iso_3166_1: string,
            name: string,
        }
    ],
    spoken_languages: [
        {
            english_name: string,
            iso_639_1: string,
            name: string,
        }
    ],
    status: string,
    tagline: string,
    vote_average: number,
    vote_count: number,
}

export type MovieDetailType = MediaDetailType & {
    belongs_to_collection: string | null,
    budget: 0,
    original_title: string,
    release_date: string,
    revenue: number,
    runtime: number,
    title: string,
    video: boolean,
    imdb_id?: string,

}

export type TvDetailType = MediaDetailType & {
    created_by: [
        {
            id: number,
            credit_id: string,
            name: string,
            original_name: string,
            gender: number,
            profile_path: string | null,
        }
    ]
    episode_run_time: [],
    first_air_date: string,
    in_production: boolean,
    languages: string[],
    last_air_date: string,
    last_episode_to_air: {
        id: number,
        name: string,
        overview: string,
        vote_average: number,
        vote_count: number,
        air_date: string,
        episode_number: number,
        episode_type: string,
        production_code: string,
        runtime: number,
        season_number: number,
        show_id: number,
        still_path: string,
    }
    name: string,
    next_episode_to_air: any,
    networks: [
        {
            id: number,
            logo_path: string,
            name: string,
            origin_country: string,
        }
    ],
    number_of_episodes: number,
    number_of_seasons: number,
    original_name: string,
    seasons: [
        {
            air_date: string,
            episode_count: number,
            id: number,
            name: string,
            overview: string,
            poster_path: string,
            season_number: number,
            vote_average: number,
        }
    ],
    type: string,
}

export type PersonDetailType = BaseDetailType & {
    also_known_as: string[],
    biography: string,
    birthday: string,
    deathday: string | undefined,
    gender: number,
    imdb_id?: string,
    known_for_department: string,
    name: string,
    place_of_birth: string,
    profile_path: string,
}

export type ContentDisplayType = {
    id: number,
    name: string,
    img: string,
    description: string,
    release_or_birthday: string,
    deathday?: string     //person only
    website: string,
    origin_country: string | string[];
    languages?: string[]      //media only (spoken_languages)
    production_companies?: [    //media only
        {
            id: number,
            logo_path: string,
            name: string,
            origin_country: string,
        }
    ],       
    vote_average?: number,    //media only
    vote_count?: number,      //media only
    status?: string,      //media only
    runtime?: number,     //movie only
    tagline?: string,     //movie only
    seasons?: [          //tv only
        {
            air_date: string,
            episode_count: number,
            id: number,
            name: string,
            overview: string,
            poster_path: string,
            season_number: number,
            vote_average: number,
        }
    ],
    known_for_department?: string,    //person only
}