import { useState } from "react";
import { MovieType } from "../types/movieTypes";

type MovieCardProps = {
    movie: MovieType,
}

export const MovieCard = ({ movie }: MovieCardProps) => {
    //useState() ritorna [variabile, funzione per cambiare la variabile]    
    const [clickCount, setClickCount] = useState(0);

    const handleClickCount = () => {
        setClickCount(clickCount + 1); //setClickCount() è asincrona
        console.log(clickCount);
    }


    const handleClick = (message: string | number) => {
        console.log(`Cliccato ${message}`);
    }

    return (
        <div style={{ backgroundColor: 'red' }} onClick={handleClickCount}>
            <h1 onClick={() => handleClick(movie.title)}>{movie.title}</h1>
            <p onClick={() => handleClick(movie.id)}>{movie.id}</p>
            <p onClick={() => handleClick(movie.description)}>{movie.description}</p>
            <p>Numero di click: {clickCount}</p>
        </div>
    )
}