import React from "react";

export default function ExerciseDetails({ time }) {
  return (
    <div>
      <div className="flex justify-between bg-gray-50 p-2 mt-4">
        <h1>Exercise Time</h1>
        <p className="opacity-50">{time}</p>
      </div>
      <div className="flex justify-between bg-gray-50 p-2 mt-4">
        <h1>Break Time</h1>
        <p className="opacity-50">55</p>
      </div>
    </div>
  );
}
