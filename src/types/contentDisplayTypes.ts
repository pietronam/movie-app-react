// import { BaseDetailType } from "./contentDetailTypes"

// // type MediaDisplayType = BaseDetailType & {
// //     backdrop_path: string,
// //     genres: [
// //         {
// //             id: number,
// //             name: string,
// //         }
// //     ],
// //     origin_country: string[],
// //     original_language: string,
// //     overview: string,
// //     poster_path: string,
// //     production_companies: [
// //         {
// //             id: number,
// //             name: string,
// //         }
// //     ],
// //     spoken_languages: [
// //         {
// //             english_name: string,
// //         }
// //     ],
// //     status: string,
// //     tagline: string,
// //     vote_average: number,
// //     vote_count: number,

// // }

// export type MovieDisplayType = MediaDisplayType & {
//     release_date: string,
//     runtime: number,
// }

// export type TvDisplayType = MediaDisplayType & {
//     episode_run_time: [],
//     first_air_date: string,
//     in_production: boolean,
//     languages: string[],
//     last_air_date: string,
// }

// export type PersonDisplayType = BaseDetailType &{
//     biography: string,
//     birthday: string,
//     deathday: string | null,
//     gender: number,
//     known_for_department: string,
//     name: string,
//     place_of_birth: string,
//     profile_path: string,
// }

export type ContentDisplayType = {
    id: number,
    name: string,
    img: string,
    description: string,
}