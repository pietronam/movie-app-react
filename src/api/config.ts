// const API_KEY = import.meta.env.VITE_API_KEY;
// export const BASE_URI = import.meta.env.VITE_BASE_URL;

export const API_KEY="eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI0M2RkZmNhMjlkNzNhNmEzYTRiYjRkNWYwYzc3MGZiZiIsInN1YiI6IjY1ZTg2YzdlZWE0MjYzMDE3YjIyOGRmNiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.SbRmoUz6V4AsxTymqbiS-uORy-HBk8uRXoHXZDA3v3o";
export const BASE_URL="https://api.themoviedb.org/3/";
export const IMAGE_BASE_URL="https://image.tmdb.org/t/p";

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
export const SEARCH_URI = "search/multi"