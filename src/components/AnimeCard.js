import React ,{useState}from 'react';

export default function AnimeCard(props) {
  const [mode, setMode] = useState(props.mode);
  return (
        
        <div className='col-12 col-md-4 my-2'>
        <div className="card" >
        <img src={props.image} className="card-img-top" alt={props.title.toUpperCase().replace(/_/," ")}  style={{height:"25rem"}}/>
        <div className="card-body d-flex justify-content-between truncate">
            <h5 className="card-title ">{props.title.toUpperCase().replace(/_/," ")}</h5>
           <a href={`https://www.google.com/search?q=${props.title.toUpperCase().replace(/_/," ")}`} target="_blank" className="btn btn-dark btn-sm">
           <i class="fab fa-google mx-1"></i>Search
            </a>
            </div>
        </div>

  </div>);
}
