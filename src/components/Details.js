import React from "react";
import BreakTime from "./BreakTime";
import ExerciseDetails from "./ExerciseDetails";
import UserProfile from "./UserProfile";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function Details({
  exerciseTime,
  handleBreakTimeClick,
  breakTime,
}) {
  // toast
  const showToast = () => {
    toast("Congratulations! You have completed your workout");
  };
  return (
    <div className="w-full  h-full bg-white ">
      <UserProfile />
      <BreakTime handleBreakTimeClick={handleBreakTimeClick} />
      <ExerciseDetails exerciseTime={exerciseTime} breakTime={breakTime} />
      <button
        onClick={showToast}
        className="border bg-white shadow-md shadow-pink-300 justify-center px-2 py-2 inline-block text-xs text-pink-500 mt-4 bg-transparent rounded-md hover:bg-slate-50"
      >
        {" "}
        Activity Completed
      </button>
      <ToastContainer />
    </div>
  );
}
