import React,{useState} from 'react'
import { toast } from "react-toastify";
import {data} from '../../data.json'

export default function Input(props) {
  let {runTimeData,setRunTimeData} = props
  let {turn,history} = runTimeData
  const [text, setText] = useState('')

  const handleChange = (e)=>{
      setText(e.target.value)
  }

  const verify = (text)=>{
    for (let i = 0; i < data.length; i++) {
      if (data[i].toLowerCase()===text.toLowerCase()) {
        return true;
      }      
    }
    return false;
  }

  const handleSumbit = ()=>{
    if (turn === 'user' && verify(text)=== true) {
      let last_word = history[history.length-1]
      let last_letter = last_word.charAt(last_word.length-1).toLowerCase()
      if (last_letter === text.charAt(0).toLowerCase() && !history.includes(text.toLowerCase()) ) {
        setRunTimeData({...runTimeData,
          history:[...runTimeData.history, text.toLowerCase()],
          turn:'robot'
        })
        setText('')
      }else{
        setRunTimeData({...runTimeData,
          turn:'user'
        }),
        setText('')
        toast.warn('This country/state/district has already been used. Please choose another ')
      }
    }else{
      setRunTimeData({...runTimeData,
        turn:'user'
      }),
      setText('')
      toast.warn(`Cannot found ${text} in database`)

    }
  }

  return (
    <div className="w-full fixed bottom-0 p-2 pb-4 flex justify-between items-center ">
    <input
      type="text"
      value={text}
      disabled={turn !== 'user'}
      onChange={handleChange}
      placeholder="Enter your guess here"
      className="pb-4 flex-1 shadow-[0_3px_10px_rgb(0,0,0,0.2)] h-14 border-2 border-[#F5F5F5] p-2 mr-4 focus:border-[#739072] focus:ring-2 focus:ring-[#86A789] text-base outline-none  py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
    />
    <button onClick={handleSumbit} className="w-20 shadow-[0_3px_10px_rgb(0,0,0,0.2)] h-14 border-2 border-[#F5F5F5] p-2 focus:border-[#739072] focus:ring-2 focus:ring-[#86A789] text-base outline-none  py-1 px-3 leading-8 transition-colors duration-200 ease-in-out hover:border-[#739072] hover:ring-2 hover:ring-[#86A789]">
      Submit  
    </button>
    </div>
  )
}
