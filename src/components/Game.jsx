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
    robotHistory: [],
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
        history: [...runTimeData.history, data],
        robotHistory: [...runTimeData.robotHistory, data.toLocaleLowerCase()],
        turn: "user",
      });
    } else {
      toast.warn("GAME_RUNNING_1");
    }
  }, []);

  useEffect(() => {
    if (runTimeData.turn === "robot" && gameRunning === true) {
      console.log('if block running')
      let last_word =runTimeData.userHistory[runTimeData.userHistory.length - 1];
      let last_letter = last_word.charAt(last_word.length - 1);
      for (let i = 0; i < data.length; i++) {
        if (data[i].charAt(0).toLowerCase() === last_letter.toLowerCase()&& !runTimeData.history.includes(data[i].toLowerCase())) {
          setRunTimeData({
            ...runTimeData,
            robotHistory: [...runTimeData.robotHistory, data[i]],
            history:[...runTimeData.history, data[i].toLocaleLowerCase()],
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
