import React, { useState } from "react";
import "./Sidebar.css";
import {
  BsCart3,
  BsList,
  BsGrid1X2Fill,
  BsFillGrid3X3GapFill,
  BsPeopleFill,
} from "react-icons/bs";

const Sidebar = () => {
  const[navOpen, setNavOpen]=useState(true)
  const navToggle=()=>{
    setNavOpen(!navOpen)
  }
  return (
    
    <aside id="sidebar" style={{width: navOpen ? "258px" : "80px"}}>
      <div className="sidebar-title"  style={{display: navOpen ? "block" : "0px"}}>
        <div className="sidebar-brand"  >
          ADMIN
          <span style={{display:"inline-block",width:"30px"}}></span>
          <BsList onClick={navToggle} />
        </div>
       
      </div>

      <ul className="sidebar-list" >
        <li className="sidebar-list-item">
          <a href="">
            <BsGrid1X2Fill className="icon"  /> Home
          </a>
        </li>

        <li className="sidebar-list-item">
          <a href="">
            <BsCart3 className="icon" /> Data
          </a>
        </li>

        <li className="sidebar-list-item">
          <a href="">
            <BsCart3 className="icon" /> TODO List
          </a>
        </li>

        <li className="sidebar-list-item">
          <a href="">
            <BsFillGrid3X3GapFill className="icon" /> Wallet
          </a>
        </li>

        <li className="sidebar-list-item">
          <a href="">
            <BsPeopleFill className="icon" /> Store
          </a>
        </li>
      </ul>
    </aside>
  );
};

export default Sidebar;
