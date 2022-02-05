import React, { useState, useEffect } from 'react';
import AnimeCard from './AnimeCard';
import Error from './Error';
import Spinner from './Spinner';



export default function AnimeDetails(props) {

    const [anime, setAnime] = useState([]);
    const [loading, setLoading] = useState(true);
    const [apiStatus, setApiStatus] = useState(true);
    const [mode, setMode] = useState(props.mode);

    const update = async () => {

        try {
            const url = "https://anime-facts-rest-api.herokuapp.com/api/v1";
            setLoading(true);
            let data = await fetch(url);
            let parsedData = await data.json();
            setAnime((parsedData.data));
            setLoading(false);
            setApiStatus(parsedData.success);
        }
        catch {
            console.log("API is Down");
            setApiStatus(false)
        }
    }


    useEffect(() => {
        update();
    }, [])
    return (
        <div className='container'>

            <div className='row my-3'>
                {apiStatus && <h2 className={`d-block text-center my-1 text-muted`}>Top Animes of All Time</h2>}
                {loading && apiStatus && <Spinner />}
                {!apiStatus && <Error />}

                {anime.map((element) => {
                    return (<AnimeCard key={element.anime_id} image={element.anime_img} title={element.anime_name} mode={mode}/>)

                })}
            </div>
        </div>);
}
