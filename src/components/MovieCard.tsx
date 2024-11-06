/**
 * MovieCard è un componente che deve ricevere due dati:
 * -idMovie: un numero
 * -titleMovie: una stringa
 * 
 * Le funzioni che rappresentano i componenti React in Typescript ricevono un solo parametro "props" che è un oggetto che contiene tutte le proprietà passate al componente.
 * @param props 
 * @returns 
 */


type MovieCardProps = {
    idMovie: number;
    titleMovie: string;
}

export const MovieCard = (props: MovieCardProps) => {
    return (
        <div style={{ backgroundColor: 'red' }}>
            <h1>{props.titleMovie}</h1>
            <p>{props.idMovie}</p>
        </div>
    )
}
