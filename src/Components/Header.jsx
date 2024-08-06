import React from "react";
import "./Header.css";
import {
  BsFillBellFill,
  BsFillEnvelopeFill,
  BsPersonCircle,
  BsSearch
} from "react-icons/bs";
import { FaToggleOff } from "react-icons/fa6";

const Header = (props) => {
  return (
    <header className={`header ${props.mode}`}>
      <div className="header-left">
        <input
          className="search-text"
          type="search"
          placeholder="Search..."
          aria-label="Search"
        />
        <BsSearch className="search-icon" />
      </div>
      <div className="header-right">
        <FaToggleOff className="icon" onClick={props.togglemode} />
        <BsFillEnvelopeFill className="icon" />
        <BsFillBellFill className="icon" />
        <BsPersonCircle className="icon" />
      </div>
    </header>
  );
};

export default Header;
