import React from "react";
import { RxBorderSplit } from "react-icons/rx";
import { SlLock } from "react-icons/sl";
import { TbCalendarCancel } from "react-icons/tb";
import { BiDetail } from "react-icons/bi";
import { TbCirclePercentage } from "react-icons/tb";
import { HiOutlineArrowCircleDown } from "react-icons/hi";
import percentt from "../assets/percent.jpg";
import {
  FcSurvey,
  FcShipped,
  FcDoNotMix,
  FcPositiveDynamic,
} from "react-icons/fc";

import {
  IoIosArrowDropupCircle,
  IoIosArrowDropdownCircle,
} from "react-icons/io";
import "./CardsBox.css";

const CardsBox = () => {
  return (
    <div className="main-cards">
      <div className="card">
        <div className="card-inner">
          <FcSurvey className="card_icon" />
        </div>
        <h3>Total Orders</h3>
        <div className="card-footer">
          <h1>75</h1>
          <div className="card-up-arrow">
            <IoIosArrowDropupCircle />
            <span>3%</span>
          </div>
        </div>
      </div>

      <div className="card">
        <div className="card-inner">
          <FcShipped className="card_icon" />
        </div>
        <h3>Total Delivered</h3>
        <div className="card-footer">
          <h1>70</h1>
          <div className="card-down-arrow">
            <IoIosArrowDropupCircle />
            <span>3%</span>
          </div>
        </div>
      </div>

      <div className="card">
        <div className="card-inner">
          <FcDoNotMix className="card_icon" />
        </div>
        <h3>Total Cancelled</h3>
        <div className="card-footer">
          <h1>05</h1>
          <div className="card-up-arrow">
            <IoIosArrowDropupCircle />
            <span>3%</span>
          </div>
        </div>
      </div>

      <div className="card">
        <div className="card-inner">
          <FcPositiveDynamic className="card_icon" />
        </div>
        <h3>Total Revenue</h3>
        <div className="card-footer">
          <h1>$12K</h1>
          <div className="card-down-arrow">
            <IoIosArrowDropupCircle />
            <span>3%</span>
          </div>
        </div>
      </div>

      <div className="card-last">
        <div className="card-inner">
          <h3>Net Profit</h3>
          <h1>$6759.25</h1>
          <div className="card-up-arrow">
            <IoIosArrowDropupCircle />
            <span>3%</span>
          </div>
        </div>

        <div className="card-footer">
          <img src={percentt} alt="" className="card_icon" />
          <p className="para-line">*The value here has been rounded off.</p>
        </div>
      </div>
    </div>
  );
};

export default CardsBox;
