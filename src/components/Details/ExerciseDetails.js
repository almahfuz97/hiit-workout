import React from "react";

export default function ExerciseDetails({ exerciseTime, breakTime }) {
  return (
    <div>
      <div className="flex justify-between p-4 mt-4 bg-purple-100 px-2 drop-shadow-sm  rounded">
        <h1 className="text-red-500 drop-shadow">Exercise Time</h1>
        <p className="opacity-50">{exerciseTime}</p>
      </div>
      <div className="flex justify-between p-4 mt-4 bg-purple-100 px-2 drop-shadow-sm rounded">
        <h1 className="text-red-500 drop-shadow">Break Time</h1>
        <p className="opacity-50">{breakTime}</p>
      </div>
    </div>
  );
}
