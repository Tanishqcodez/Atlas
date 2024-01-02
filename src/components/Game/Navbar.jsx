import React from 'react'
import Logo from "../../img/logo.png";

export default function Navbar() {
  return (
    <header className="shadow-[0_3px_10px_rgb(0,0,0,0.2)] w-full h-20  flex items-center md:justify-between justify-center">
    <span className="flex">
      <img src={Logo} alt="logo" className="h-16 w-16" />
      <span className="m-3">
        <span className="font-bold">Geography Nerd</span>
        <br />
        <span>Online</span>
      </span>
    </span>
    <span className="hidden md:block">
      <span className="flex mx-2">
        <button className="cursor-pointer p-4 mr-2 rounded-md shadow-[0_3px_10px_rgb(0,0,0,0.2)] ">
          <i className="fa-solid fa-phone fa-2xl"></i>
        </button>
        <button className="cursor-pointer p-4 rounded-md shadow-[0_3px_10px_rgb(0,0,0,0.2)] ">
          <i className="fa-solid fa-camera fa-2xl"></i>
        </button>
      </span>
    </span>
  </header>
  )
}
