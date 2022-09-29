import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import React from "react";

export default function WorkoutCard({ workout, handleAddClick }) {
  const { img, name, description, time } = workout;

  return (
    <div className="border rounded-lg bg-white-50 drop-shadow shadow-lg mt-8">
      <img className=" rounded-t-lg w-full" src={img} alt="Workout Image" />
      <div className="px-2 py-4">
        <h1 className="font-bold">{name}</h1>
        <p className="mb-2">
          {" "}
          <small>{description}</small>
        </p>
        <p className="font-bold">
          Time: <span className="text-pink-400 text-md"> {time}s</span>
        </p>
        <button
          onClick={() => handleAddClick(workout)}
          className="border bg-white shadow-md shadow-pink-300 justify-center px-2 py-2 inline-block text-xs text-pink-500 mt-4 bg-transparent rounded-md hover:bg-slate-50"
        >
          Add Workout <FontAwesomeIcon icon={faPlus} />
        </button>
      </div>
    </div>
  );
}
