import { MovieType, PersonType, TvType } from "./contentTypes"

export type ResponseTrendingType = {
    page: number,
    results: MovieType[] | PersonType[] | TvType[],
    total_pages: number,
    total_results: number,
}