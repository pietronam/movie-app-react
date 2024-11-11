const API_KEY = import.meta.env.VITE_API_KEY;
export const BASE_URL = import.meta.env.VITE_BASE_URL;

export const OPTIONS = {
    method: "GET",
    headers: {
        "Content-Type": "application/json",
        Authorization:
        `Bearer ${API_KEY}`
    },
};
export const ALL_URL = "trending/all/day";
export const MOVIE_URL = "trending/movie/day";
export const TV_URL = "trending/tv/day";
export const PEOPLE_URL = "trending/person/day";