import React, { useState } from "react";
import Game from "./components/Game";
import Hero from "./components/Hero";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";


export default function App() {
  const [gameStatus, setGameStatus] = useState(false)
  return (
    <>
      <ToastContainer />
      {gameStatus ? <Game/>: <Hero setGameStatus={setGameStatus} />}
      
    </>
  );
}

 