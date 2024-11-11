type ContentCardProps = {
    content: {
        id: number,
        name?: string,
        title?: string,
        media_type: string,
    }
}

export const ContentCard = ({ content }: ContentCardProps) => {
    switch (content.media_type) {
        case "tv":
            return (
                <div style={{ backgroundColor: 'red' }}>
                    <h1>{content.name}</h1>
                    <p>{content.id}</p>
                </div>
            )
        case "movie":
            return (
                <div style={{ backgroundColor: 'blue' }}>
                    <h1>{content.title}</h1>
                    <p>{content.id}</p>
                </div>
            )
        case "person":
            return (
                <div style={{ backgroundColor: 'purple' }}>
                    <h1>{content.name}</h1>
                    <p>{content.id}</p>
                </div>
            )
    }
}


/* Codice vecchio, esempio per implementare un contatore di click e dimostrare useState e useEffect
    

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
            <h1 onClick={() => handleClick(content.name)}>{content.name}</h1>
            <p onClick={() => handleClick(content.id)}>{content.id}</p>
            <p onClick={() => handleClick(content.overview)}>{content.overview}</p>
            <p>Numero di click: {clickCount}</p>
        </div>
    )
}
 */