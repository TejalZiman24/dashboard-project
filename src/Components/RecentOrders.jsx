import React from "react";
import "./RecentOrders.css";
// import OrderDetails from './OrderDetails'
import { details } from "./Data";
details;
import logo from "../assets/support.png";

const RecentOrders = () => {
  const handleButton=()=>{
    
  }
  return (
    <div className="main-order">
      <h3>Recent Orders</h3>
      <div class="column-table">
        <div class="col-3 kg-row">
          <label className="labels" htmlFor="">
            Customers
          </label>
        </div>
        <div class="col-2">
          <label className="labels" htmlFor="">
            Orders No.
          </label>
        </div>
        <div class="col-2">
          <label className="labels" htmlFor="">
            Amount
          </label>
        </div>
        <div class="col-2">
          <label className="labels" htmlFor="">
            Status
          </label>
        </div>
      </div>
      <hr />

      <div>
        {details.map((data) => {
          return (
            <div className="under_line" key={data.id}>
              <div class="column-table" >
                <div class="col-3 kg-row">
                  <label htmlFor="" className="detail">
                    {data.name}
                  </label>
                </div>
                <div class="col-2">
                  <label htmlFor="" className="detail">
                    {data.order}
                  </label>
                </div>
                <div class="col-2">
                  <label htmlFor="" className="detail">
                    {data.amount}
                  </label>
                </div>
                <div class="col-2">
                  <button onClick={handleButton} className="btn">{data.button} </button>
                </div>
              </div>
              <hr />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default RecentOrders;
