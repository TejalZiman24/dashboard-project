import React from 'react'
import "./Goals.css"
import { FaRegArrowAltCircleRight } from "react-icons/fa";
import { LuSatelliteDish } from "react-icons/lu";
import { CgMenuRound } from "react-icons/cg";
import { GoGoal } from "react-icons/go";

const Goals = () => {
  return (
    
      <div className="menus">
            <div className="goals">
            <GoGoal className="icons-icon" style={{backgroundColor:"brown"}} />
            <h5>Goals</h5>
            <FaRegArrowAltCircleRight />
            </div>
            
            <div className="goals">
            <LuSatelliteDish className="icons-icon" style={{backgroundColor:"blue"}}/>
            <h5> Dishes</h5>
            <FaRegArrowAltCircleRight />
            </div>

            <div className="goals">
            <CgMenuRound className="icons-icon" style={{backgroundColor:"green"}}/>
            <h5>Menues</h5>
            <FaRegArrowAltCircleRight />
            </div>
        </div>
    
  )
}

export default Goals
