import { MovieType } from "../types/movieTypes";

//FIXME: Inserire in questa funzione la chiamata feth per recuperare i dati dal server

export const getMovies = () => {
    const movieMock: MovieType[] = [
        {
            id: 1,
            title: "Il Signore degli Anelli",
            description: "hm"
        },
        {
            id: 2,
            title: "Harry Potter",
            description: "a"
        },
        {
            id: 3,
            title: "Il Padrino",
            description: "il",
        },
    ];
    return movieMock;
}