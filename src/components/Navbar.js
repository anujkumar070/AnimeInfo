import React, { useState }  from 'react'
import { Link } from "react-router-dom";
const Navbar=(props)=>{

    const [mode, setMode] = useState(props.mode);
    const changemode =()=>{
        if(mode==='light')
        {
            setMode('dark');
            document.body.style.background="#012338";
        }
        if(mode==='dark')
        {
            setMode('light');
            document.body.style.background="white";
        }
        
    }

        return (
            <div>
              
                <nav className={`navbar navbar-expand-lg fixed-top navbar-${mode} bg-${mode}`}>
                    <Link className="navbar-brand active mx-4" to="/"><i className="fas fa-font fa-lg"></i>nimeInfo</Link>
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>

                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav mr-auto">
                        <li className="nav-item mx-1 ">
                            <Link className="nav-link" to="/"><i className="fas fa-home"></i> Home <span className="sr-only"></span></Link>
                        </li>
                        <li className="nav-item mx-1 ">
                            <Link className="nav-link" data-toggle="tooltip" data-placement="top" title="View Facts about Anime  "to="/fact"><i className="fab fa-foursquare"></i> Fact <span className="sr-only"></span></Link>
                        </li>
                        </ul>
                        <div className={`form-check form-switch text-${mode==='light'?'dark':'light'} `}>
                            <label className="form-check-label " htmlFor="flexSwitchCheckDefault">{mode==='light'?'Enable':'Disable'} Dark Mode</label>
                            <input className="form-check-input " onClick={changemode} type="checkbox" role="switch" id="flexSwitchCheckDefault"/>
                            
                        </div>
                        
                    </div>
                   
        </nav>
            </div>
            
        )
    
}

export default Navbar;
