import React, { useEffect, useState } from "react";
import { addToDb, getFromDb } from "../fakedb";
import Details from "./Details";
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
    <div className=" grid grid-cols-12">
      <div className=" col-span-8 md:col-span-9   m-16">
        <Header />
        <h2 className=" text-2xl font-semibold mt-10">Select Workouts</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {workouts.map((workout) => (
            <WorkoutCard
              key={workout.id}
              workout={workout}
              handleAddClick={handleAddClick}
            />
          ))}
        </div>
      </div>
      <div className="col-span-4 md:col-span-3">
        <Details
          exerciseTime={exerciseTime}
          handleBreakTimeClick={handleBreakTimeClick}
          breakTime={breakTime}
        />
      </div>
    </div>
  );
}
