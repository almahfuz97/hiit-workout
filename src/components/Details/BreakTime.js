import React from "react";

export default function BreakTime({ handleBreakTimeClick }) {
  return (
    <div className="mt-10">
      <h1>Add a break time</h1>
      <div className="flex justify-between p-4 bg-purple-100 drop-shadow-sm mt-2 rounded-lg">
        <button
          onClick={() => handleBreakTimeClick(10)}
          className="mr-2 rounded-full bg-red-100 text-red-500 drop-shadow p-2 text-sm hover:bg-slate-100 "
        >
          10s
        </button>
        <button
          onClick={() => handleBreakTimeClick(20)}
          className="mr-2 rounded-full bg-red-100 text-red-500 drop-shadow p-2 text-sm hover:bg-slate-100 "
        >
          20s
        </button>
        <button
          onClick={() => handleBreakTimeClick(30)}
          className="mr-2 rounded-full bg-red-100 text-red-500 drop-shadow p-2 text-sm hover:bg-slate-100 "
        >
          30s
        </button>
        <button
          onClick={() => handleBreakTimeClick(40)}
          className="mr-2 rounded-full bg-red-100 text-red-500 drop-shadow p-2 text-sm hover:bg-slate-100 "
        >
          40s
        </button>
      </div>
    </div>
  );
}
