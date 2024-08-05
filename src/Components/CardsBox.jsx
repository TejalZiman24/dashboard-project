import React from 'react'
import { RxBorderSplit } from "react-icons/rx";
import { SlLock } from "react-icons/sl";
import { TbCalendarCancel } from "react-icons/tb";
import { BiDetail } from "react-icons/bi";
import { TbCirclePercentage } from "react-icons/tb";
import { HiOutlineArrowCircleDown } from "react-icons/hi";
import "./CardsBox.css"

const CardsBox = () => {
  return (
    <div className="main-cards">
        <div className="card">
          <div className="card-inner">
            <h3>Total Orders</h3>
            <RxBorderSplit
              style={{ backgroundColor: "blue" }}
              className="card_icon"
            />
          </div>
          <div className="card-footer">
            <h1>75</h1>
            <div className="card-down-arrow">
           
              <HiOutlineArrowCircleDown />
              
            </div>
          </div>
        </div>

        <div className="card">
          <div className="card-inner">
            <h3>Total Delivered</h3>
            <SlLock
              style={{ backgroundColor: "orange" }}
              className="card_icon"
            />
          </div>
          <div className="card-footer">
            <h1>70</h1>
            <div className="card-down-arrow">
              <HiOutlineArrowCircleDown />
            </div>
          </div>
        </div>

        <div className="card">
          <div className="card-inner">
            <h3>Cancelled</h3>
            <TbCalendarCancel
              style={{ backgroundColor: "red" }}
              className="card_icon"
            />
          </div>
          <div className="card-footer">
            <h1>05</h1>
            <div className="card-down-arrow">
              <HiOutlineArrowCircleDown />
            </div>
          </div>
        </div>

        <div className="card">
          <div className="card-inner">
            <h3>Revenue</h3>
            <BiDetail
              style={{ backgroundColor: "green" }}
              className="card_icon"
            />
          </div>
          <div className="card-footer">
            <h1>$12K</h1>
            <div className="card-down-arrow">
              <HiOutlineArrowCircleDown />
            </div>
          </div>
        </div>

        <div className="card">
          <div className="card-inner">
            <h3>New Profit</h3>
            <TbCirclePercentage className="card_icon" />
          </div>
          <div className="card-footer">
            
            <h1>$6759.25</h1>
            <div className="card-down-arrow">
              <HiOutlineArrowCircleDown />
              
            </div>
          </div>
        </div>
      </div>
  )
}

export default CardsBox
