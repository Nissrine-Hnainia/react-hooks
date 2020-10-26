import React from "react";
import "./Header.css";
import {FaFilm} from 'react-icons/fa';


const Header = (props) => {
  return (
    <div className="header">
      <h1>{props.title}<span>Planet</span></h1>
    </div>
  );
};

export default Header;
