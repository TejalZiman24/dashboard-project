import React, { useState } from "react";
import "./Sidebar.css";

import Hamburger from "hamburger-react";
import { BsList } from "react-icons/bs";
import { AiOutlineAppstoreAdd, AiOutlineHome } from "react-icons/ai";
import { BiBarChartSquare } from "react-icons/bi";
import { TbChecklist } from "react-icons/tb";
import { LiaWalletSolid } from "react-icons/lia";

const Sidebar = () => {
  const [navOpen, setNavOpen] = useState(true);
  const navToggle = () => {
    setNavOpen(!navOpen);
  };
  return (
    <aside id="sidebar">
      <div className="sidebar-title">
        <div className="sidebar-brand">
          <Hamburger size={22} toggled={navOpen} toggle={navToggle} />
          <span style={{ display: "inline-block", width: "10px" }}></span>
          <span>ADMIN</span>
        </div>
      </div>

      <ul className="sidebar-list">
        <li className="sidebar-list-item">
          <a href="" className="navbar-items">
            <AiOutlineHome className="icon" /> <span>Home</span>
          </a>
        </li>

        <li className="sidebar-list-item">
          <a href="" className="navbar-items">
            <BiBarChartSquare className="icon" /> <span>Analytics</span>
          </a>
        </li>

        <li className="sidebar-list-item">
          <a href="" className="navbar-items">
            <TbChecklist className="icon" /> <span>Reminders</span>
          </a>
        </li>

        <li className="sidebar-list-item">
          <a href="" className="navbar-items">
            <LiaWalletSolid className="icon" /> <span>Wallet</span>
          </a>
        </li>

        <li className="sidebar-list-item">
          <a href="" className="navbar-items">
            <AiOutlineAppstoreAdd className="icon" /> <span>Store</span>
          </a>
        </li>
      </ul>
    </aside>
  );
};

export default Sidebar;
