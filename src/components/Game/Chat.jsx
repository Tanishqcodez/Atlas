import React from "react";

export default function Chat(props) {
  let {runTimeData} = props;
  let {history} = runTimeData;
  return (
    <div className="h-full w-full flex mb-20 ">
      <div className="w-full">
        {history && history.map((e, i) => {
            if (i % 2 === 0) {
              return (
                <div
                  key={`robot-${e}`}
                  className="float-left clear-both bg-[#F0F0F0] md:w-[10vw] p-2 mt-4 text-center rounded-md">
                  <p>{e}</p>
                </div>
              );
            } else {
              return (
                <div
                  key={`user-${e}`}
                  className="float-right clear-both bg-[#D2E3C8] md:w-[10vw] p-2 mt-4 text-center rounded-md">
                  <p>{e}</p>
                </div>
              );
            }
          })}
      </div>
    </div>
  );
}
