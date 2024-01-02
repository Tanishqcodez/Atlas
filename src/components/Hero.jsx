import React from "react";

export default function Hero(props) {
  const { setGameStatus } = props;
  let handleClick = () => {
    setGameStatus(true);
  };
  return (
    <section className="text-gray-900 h-[100vh] font-Varela-Round">
      <div className="flex justify-center items-center h-[100vh]">
        <div>
          <h1 className="sm:text-4xl text-3xl mb-4 text-center">
            Atlas: The<span className="text-[#86A789]"> Ultimate </span>
            <br />
            <span className="ml-2">
               <span className="text-[#86A789]">Country/State/District</span> Guessing Game!!
            </span>
          </h1>
          <div className="flex justify-center"></div>
          <div className=" flex justify-center">
            <button
              className="inline-flex text-white bg-[#739072] border-0 py-2 px-6 focus:outline-none hover:bg-[#84a683] rounded text-lg"
              onClick={handleClick}
            >
              Let's Go
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
