import React, { useState, useEffect } from 'react';
import Error from './Error';
import Spinner from './Spinner';


export default function Fact(props) {

    const [anime, setAnime] = useState([]);
    const [detail, setDetail] = useState([]);
    const [all, setAll] = useState({});
    const [loading, setLoading] = useState(true);
    const [apiStatus, setApiStatus] = useState(true);
    let view = "false";
    let viewTotal = "false";
    const update = async () => {
        try {
            const url = "https://anime-facts-rest-api.herokuapp.com/api/v1/";
            setLoading(true);
            let data = await fetch(url);
            let parsedData = await data.json();
            setAnime((parsedData.data));
            console.log(anime);
            setLoading(false);
        }
        catch {
            console.log("API is Down");
            setApiStatus(false)
        }
    }


    useEffect(() => {
        view = "false";
        update();
    }, [])


    const viewFact = async (e) => {
        try {
            view = "false";
            let name = e.target.value;
            const url = `https://anime-facts-rest-api.herokuapp.com/api/v1/${name}`;
            setLoading(true);
            let data = await fetch(url);

            let parsedData = await data.json();

            setAll(parsedData);
            setDetail((parsedData.data));

            view = "true"
            setLoading(false);
        }
        catch {
            console.log("API is Down");
            setApiStatus(false)
        }


    }
    return (<>
        {apiStatus && <div>
            <select className="form-select" aria-label="Default select example" id="animeName" id="animeName" onChange={viewFact} >
                <option value>Select Your Favourite Anime to View Facts</option>


                {anime.map((element) => {
                    return (<option key={element.anime_id} value={element.anime_name}>{element.anime_name.toUpperCase().replace(/_/g, " ")}</option>

                    )
                })}
            </select>
            <div className="accordion my-3" id="accordionExample">
            </div>
            <div className="accordion" id="accordionExample">
                {loading && <Spinner />}
                {view && <img src={all.img} className="img-fluid rounded mx-auto d-block my-2" style={{ maxWidth: "40rem", maxHeight: "20rem" }} />}

                {view && detail.map((element) => {

                    return (
                        <>
                            <div className={`accordion-item `}>
                                <div id="collapseOne" className="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                                    <div className="accordion-body" key={element.fact_id}>
                                        <strong>{element.fact_id} . </strong>{element.fact}
                                    </div>
                                </div>
                            </div>
                        </>)

                })}

            </div>

        </div>}

        {!apiStatus && <Error />}
    </>



    );
}
