import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCoffee, faDumbbell } from "@fortawesome/free-solid-svg-icons";

export default function Header() {
  return (
    <div className="flex items-center ">
      <FontAwesomeIcon
        icon={faDumbbell}
        size="4x"
        className=" text-pink-600 mr-4"
      />
      <h1 className=" text-2xl font-semibold text-pink-700">
        High Intensive Interval Training
      </h1>
    </div>
  );
}
