import React, {useState} from 'react';
import {FaArrowLeft} from 'react-icons/fa';
import { Link } from 'react-router-dom';


const MovieInfo = ({match,items}) => {
    const [show, setShow] = useState(false)
    const toggle = () => {
        setShow(!show)
    }
    const item=items.find(p=>p.id == match.params.id)
    return (
        <div className="item-container">
            <Link to='/'>
            <FaArrowLeft className="arrow"/>
            </Link>
            <div className="intro">
                <h1>Movie title: {item.title}</h1>
                <h3>Description: {item.description}</h3>
            </div>
            <div className="trailer">
                <button onClick={toggle}> {!show? "show trailer": "hide trailer"} </button>
                {show && <iframe src={item.trailer}/>}
            </div>
        </div>
    );
};

export default MovieInfo;
