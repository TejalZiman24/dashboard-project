import { useState } from "react";
import "./App.css";
import Header from "./Components/Header";
import Home from "./Components/Home";
import Sidebar from "./Components/Sidebar";

function App() {
  const [mode, setmode] = useState("light");
  const togglemode = () => {
    if (mode === "dark") {
      setmode("light");
      document.body.style.backgroundColor = "#222529";
    } else {
      setmode("dark");
      document.body.style.backgroundColor = "white";
    }
  };

  return (
    <div className="grid-container">
      <Header mode={mode} togglemode={togglemode}></Header>
      <Sidebar></Sidebar>
      <Home></Home>
    </div>
  );
}

export default App;
