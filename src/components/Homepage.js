import React, { useEffect, useState } from "react";
import { addToDb, getFromDb } from "../fakedb";
import Details from "./Details/Details";
import Header from "./Header/Header";
import WorkoutCard from "./WorkoutCard";

export default function Homepage() {
  const [workouts, setWorkouts] = useState([]);
  const [exerciseTime, setexerciseTime] = useState(0);
  const [breakTime, setBreakTime] = useState(0);

  useEffect(() => {
    fetch("workouts.json")
      .then((res) => res.json())
      .then((data) => {
        setWorkouts(data);
      })
      .catch((err) => console.log(err));
  }, []);

  useEffect(() => {
    setBreakTime(getFromDb());
  }, []);
  // handle add workout button click
  const handleAddClick = (workout) => {
    setexerciseTime((prevexerciseTime) => {
      return prevexerciseTime + workout.time;
    });
  };

  // handle breaktime click button
  const handleBreakTimeClick = (seconds) => {
    console.log(seconds);
    setBreakTime(seconds);
    addToDb(seconds);
  };

  return (
    <>
      <h2 className=" text-2xl font-semibold px-5 mt-10">
        Your Daily Workouts
      </h2>

      <div className="flex flex-col-reverse md:grid md:grid-cols-12 ">
        <div className=" md:col-span-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 p-5">
            {workouts.map((workout) => (
              <WorkoutCard
                key={workout.id}
                workout={workout}
                handleAddClick={handleAddClick}
              />
            ))}
          </div>
        </div>

        <div className=" md:col-span-4 p-5 mt-8">
          <Details
            exerciseTime={exerciseTime}
            handleBreakTimeClick={handleBreakTimeClick}
            breakTime={breakTime}
          />
        </div>
      </div>
    </>
  );
}
