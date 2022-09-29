import React from "react";
import BreakTime from "./BreakTime";
import ExerciseDetails from "./ExerciseDetails";
import UserProfile from "./UserProfile";

export default function Details({
  exerciseTime,
  handleBreakTimeClick,
  breakTime,
}) {
  return (
    <div className="w-full  h-full bg-white ">
      <UserProfile />
      <BreakTime handleBreakTimeClick={handleBreakTimeClick} />
      <ExerciseDetails exerciseTime={exerciseTime} breakTime={breakTime} />
      <button className=" border p-2 mt-5  rounded ">
        {" "}
        Activity Completed
      </button>
    </div>
  );
}
