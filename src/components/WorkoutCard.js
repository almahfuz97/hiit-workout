import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import React from "react";

export default function WorkoutCard({ workout }) {
  const { img, name, description, time } = workout;
  return (
    <div className="border rounded-lg bg-orange-50 drop-shadow shadow-md mt-8">
      <img className=" rounded-t-lg w-full" src={img} alt="Workout Image" />
      <div className="px-2 py-4">
        <h1 className="font-bold">{name}</h1>
        <p className="mb-2">
          {" "}
          <small>{description}</small>
        </p>
        <p className="font-bold">Time: {time}s</p>
        <button className="border px-2 py-2 shadow-md inline-block text-xs text-pink-500 outline outline-pink-500 outline-1 mt-4 bg-transparent rounded hover:bg-slate-50">
          Add Workout <FontAwesomeIcon icon={faPlus} />
        </button>
      </div>
    </div>
  );
}
