import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCoffee, faDumbbell } from "@fortawesome/free-solid-svg-icons";

export default function Header() {
  return (
    <nav className="flex items-center p-6">
      <FontAwesomeIcon
        icon={faDumbbell}
        size="2x"
        className=" text-red-400 mr-4"
      />
      <h1 className=" text-xl font-semibold text-red-400">
        High-Intensive-Interval-Training
      </h1>
    </nav>
  );
}
