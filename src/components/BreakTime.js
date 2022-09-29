import React from "react";

export default function BreakTime({ handleBreakTimeClick }) {
  return (
    <div>
      <h1>Add a break time</h1>
      <div className="bg-gray-100 flex justify-evenly py-2">
        <p
          onClick={() => handleBreakTimeClick(10)}
          className="mr-2 rounded-full bg-white p-2 text-sm"
        >
          10s
        </p>
        <p
          onClick={() => handleBreakTimeClick(20)}
          className="mr-2 rounded-full bg-white p-2 text-sm"
        >
          20s
        </p>
        <p
          onClick={() => handleBreakTimeClick(30)}
          className="mr-2 rounded-full bg-white p-2 text-sm"
        >
          30s
        </p>
        <p
          onClick={() => handleBreakTimeClick(40)}
          className="mr-2 rounded-full bg-white p-2 text-sm"
        >
          40s
        </p>
      </div>
    </div>
  );
}
