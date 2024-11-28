const API_KEY = import.meta.env.VITE_API_KEY;
export const BASE_URI = import.meta.env.VITE_BASE_URL;

export const OPTIONS = {
    method: "GET",
    headers: {
        "Content-Type": "application/json",
        Authorization:
        `Bearer ${API_KEY}`
    },
};
export const ALL_URI = "trending/all/day";
export const MOVIE_URI = "trending/movie/day";
export const TV_URI = "trending/tv/day";
export const PEOPLE_URI = "trending/person/day";