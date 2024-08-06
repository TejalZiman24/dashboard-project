import React from "react";
import "./Sidebar.css";

import Hamburger from "hamburger-react";
import { BsList } from "react-icons/bs";
import { AiOutlineAppstoreAdd, AiOutlineHome } from "react-icons/ai";
import { BiBarChartSquare } from "react-icons/bi";
import { TbChecklist } from "react-icons/tb";
import { LiaWalletSolid } from "react-icons/lia";

const Sidebar = ({ navOpen, navToggle }) => {
  
  return (
    <aside
      id="sidebar"
    >
      <div className="sidebar-title">
        <div className="sidebar-brand">
          <Hamburger size={22} toggled={navOpen} toggle={navToggle} />
          <span style={{ display: "inline-block", width: "10px" }}></span>
          <span
            style={{
              display: navOpen ? "block" : "none",
              visibility: navOpen ? "visible" : "hidden",
            }}
          >
            ADMIN
          </span>
        </div>
      </div>

      <ul className="sidebar-list">
        <li className="sidebar-list-item">
          <a href="" className="navbar-items">
            <AiOutlineHome className="icon" />{" "}
            <span
              style={{
                display: navOpen ? "block" : "none",
                visibility: navOpen ? "visible" : "hidden",
              }}
            >
              Home
            </span>
          </a>
        </li>

        <li className="sidebar-list-item">
          <a href="" className="navbar-items">
            <BiBarChartSquare className="icon" />{" "}
            <span
              style={{
                display: navOpen ? "block" : "none",
                visibility: navOpen ? "visible" : "hidden",
              }}
            >
              Analytics
            </span>
          </a>
        </li>

        <li className="sidebar-list-item">
          <a href="" className="navbar-items">
            <TbChecklist className="icon" />{" "}
            <span
              style={{
                display: navOpen ? "block" : "none",
                visibility: navOpen ? "visible" : "hidden",
              }}
            >
              Reminders
            </span>
          </a>
        </li>

        <li className="sidebar-list-item">
          <a href="" className="navbar-items">
            <LiaWalletSolid className="icon" />{" "}
            <span
              style={{
                display: navOpen ? "block" : "none",
                visibility: navOpen ? "visible" : "hidden",
              }}
            >
              Wallet
            </span>
          </a>
        </li>

        <li className="sidebar-list-item">
          <a href="" className="navbar-items">
            <AiOutlineAppstoreAdd className="icon" />{" "}
            <span
              style={{
                display: navOpen ? "block" : "none",
                visibility: navOpen ? "visible" : "hidden",
              }}
            >
              Store
            </span>
          </a>
        </li>
      </ul>
    </aside>
  );
};

export default Sidebar;
