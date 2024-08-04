import React from "react";
import CardsBox from "./CardsBox";
import Chart from "./Chart";



const Home = () => {

  return (
    <main className="main-container">
      <div className="main-title">
        <h3>DASHBOARD</h3>
      </div>
     <CardsBox></CardsBox>
       
      <Chart></Chart>
      
    </main>
  );
};

export default Home;
