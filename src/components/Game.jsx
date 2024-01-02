import React, { useState, useEffect } from "react";
import Navbar from "./Game/Navbar";
import Input from "./Game/Input";
import Chat from "./Game/Chat";
import { data } from "../data.json";
import { toast } from "react-toastify";

export default function Game() {
  const [gameRunning, setGameRunning] = useState(false)
  const [runTimeData, setRunTimeData] = useState({
    history: [],
    userHistory: [],
    turn: "robot",
  });

  const startGame = () => {
    setGameRunning(true)
    return runTimeData.turn === "robot"
    ? data[Math.floor(Math.random() * data.length)]
    : false;
  };
  
  useEffect(() => {
    if (gameRunning === false) {
      let data = startGame();
      setRunTimeData({
        ...runTimeData,
        history: [...runTimeData.history, data.toLowerCase()],
        turn: "user",
      });
    } else {
      toast.warn("GAME_RUNNING_1");
    }
  }, []);

  useEffect(() => {
    if (runTimeData.turn === "robot" && gameRunning === true) {
      let last_word = runTimeData.history[runTimeData.history.length - 1];
      let last_letter = last_word.charAt(last_word.length - 1).toLowerCase();
      for (let i = 0; i < data.length; i++) {
        if (data[i].charAt(0).toLowerCase()=== last_letter&& !runTimeData.history.includes(data[i].toLowerCase())) {
          setRunTimeData({
            ...runTimeData,
            history:[...runTimeData.history, data[i].toLowerCase()],
            turn: "user",
          });
          break;
        }else{
        }
      }
    }else{
    }
  }, [runTimeData.turn]);

  return (
    <div>
      <Navbar />
      <Chat runTimeData={runTimeData} setRunTimeData={setRunTimeData} />
      <Input runTimeData={runTimeData} setRunTimeData={setRunTimeData} />
    </div>
  );
}
