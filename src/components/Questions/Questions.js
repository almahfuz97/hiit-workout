import React from "react";

export default function Questions({ data }) {
  console.log(data);
  return (
    <div className="m-5 p-5 rounded bg-red-100 drop-shadow">
      <h1 className=" font-bold mb-2">{data.questions}</h1>
      <p>{data.answer}</p>
    </div>
  );
}
