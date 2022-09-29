import React from "react";
import Header from "./Header/Header";

export default function Homepage() {
  return (
    <div className=" grid grid-cols-12 gap-4">
      <div className=" lg:col-span-10 md:col-span-9 col-span-8">
        <Header />
      </div>
      <div className=" lg:col-span-2 md:col-span-3 col-span-4">
        <h1> Al Mahfuz</h1>
      </div>
    </div>
  );
}
