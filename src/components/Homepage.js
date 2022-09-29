import React, { useEffect, useState } from "react";
import Header from "./Header/Header";
import WorkoutCard from "./WorkoutCard";

export default function Homepage() {
  const [workouts, setWorkouts] = useState([]);

  useEffect(() => {
    fetch("workouts.json")
      .then((res) => res.json())
      .then((data) => {
        setWorkouts(data);
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <div className=" grid grid-cols-12 gap-4">
      <div className=" md:col-span-10 col-span-11  m-16">
        <Header />
        <h2 className=" text-2xl font-semibold mt-10">Select Workouts</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {workouts.map((workout) => (
            <WorkoutCard workout={workout} />
          ))}
        </div>
      </div>
      <div className=" md:col-span-2 col-span-1 ">
        <h1> Al Mahfuz</h1>
      </div>
    </div>
  );
}
