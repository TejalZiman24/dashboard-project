import React from "react";
import "./Goals.css";
import { IoIosArrowDroprightCircle } from "react-icons/io";
import { LuSatelliteDish } from "react-icons/lu";
import { CgMenuRound } from "react-icons/cg";
import { GoGoal } from "react-icons/go";

const Goals = () => {
  return (
    <div className="menus">
      <div className="goals">
        <div className="goals-header">
          <GoGoal className="icons-icon" style={{ backgroundColor: "brown" }} />
          <h5>Goals</h5>
        </div>
        <IoIosArrowDroprightCircle />
      </div>

      <div className="goals">
        <div className="goals-header">
          <LuSatelliteDish
            className="icons-icon"
            style={{ backgroundColor: "blue" }}
          />
          <h5>Popular Dishes</h5>
        </div>
        <IoIosArrowDroprightCircle />
      </div>

      <div className="goals">
        <div className="goals-header">
          <CgMenuRound
            className="icons-icon"
            style={{ backgroundColor: "green" }}
          />
          <h5>Menus</h5>
        </div>
        <IoIosArrowDroprightCircle />
      </div>
    </div>
  );
};

export default Goals;
