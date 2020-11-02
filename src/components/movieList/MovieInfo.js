import React from 'react';
import './MovieInfo.css';
import {FaArrowLeft} from 'react-icons/fa';
import { Link } from 'react-router-dom';


const MovieInfo = ({match,items}) => {
    const item=items.find(p=>p.id == match.params.id)
    return (
        <div className="item-container" style={{color:"white"}}>
            <Link to='/'>
            <FaArrowLeft style={{color:"black", marginLeft:"10px", marginTop:"10px"}}/>
            </Link>
            <div className="intro">
                <h1>{item.title}</h1>
                <p className="item-description">{item.description}</p>
            </div>
            <div className="trailer">
                <h4>Watch trailer</h4>
                <iframe src={item.trailer}/>
            </div>
        </div>
    );
};

export default MovieInfo;
