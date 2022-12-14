import React from "react";

export default function ExerciseDetails({ exerciseTime, breakTime }) {
  return (
    <div>
      <div className="flex justify-between p-4 mt-4 bg-purple-100 px-2 drop-shadow-sm  rounded-lg">
        <h1 className="text-red-500 drop-shadow">Exercise Time</h1>
        <p className="opacity-50">{exerciseTime}s</p>
      </div>
      <div className="flex justify-between p-4 mt-4 bg-purple-100 px-2 drop-shadow-sm rounded-lg">
        <h1 className="text-red-500 drop-shadow">Break Time</h1>
        <p className="opacity-50">{breakTime}s</p>
      </div>
      <div className="flex justify-between p-4 mt-4 bg-purple-100 px-2 drop-shadow-sm rounded-lg">
        <h1 className="text-red-500 drop-shadow">Total Time</h1>
        <p className="opacity-50">{breakTime + exerciseTime}s</p>
      </div>
    </div>
  );
}
