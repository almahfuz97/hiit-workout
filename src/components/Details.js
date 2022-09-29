import React from "react";
import BreakTime from "./BreakTime";
import ExerciseDetails from "./ExerciseDetails";
import UserProfile from "./UserProfile";

export default function Details({ time }) {
  return (
    <div className="w-full  h-full bg-white ">
      <UserProfile />
      <BreakTime />
      <ExerciseDetails time={time} />
      <button className=" border p-2 mt-5  rounded ">
        {" "}
        Activity Completed
      </button>
    </div>
  );
}
