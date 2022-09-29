import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLocation } from "@fortawesome/free-solid-svg-icons";

import React from "react";

export default function UserProfile() {
  return (
    <div className=" right-0">
      <div className="p-6 flex items-center">
        <div className="w-8  mr-4 ">
          <img
            src="https://media.istockphoto.com/photos/burpees-outside-at-the-playground-picture-id907915300?b=1&k=20&m=907915300&s=170667a&w=0&h=c_Q27VnKTakPkykjqZb9sPNl_DZgUiDmjPHKgtd9wFM="
            alt=""
            className="w-full h-8 rounded-full "
          />
        </div>
        <div>
          <h4 className="text-sm font-semibold font-serif leading-3 ">
            Al Mahfuz
          </h4>
          <small className="opacity-50">
            {" "}
            <FontAwesomeIcon icon={faLocation}></FontAwesomeIcon> Bangladesh
          </small>
        </div>
      </div>

      <div className="flex items-center p-2  justify-between   ">
        <div>
          <p className="text-xs">85 KG</p>
          <p className="text-xs">Weight</p>
        </div>
        <div>
          <p className="text-xs">5.11 ft</p>
          <p className="text-xs">Height</p>
        </div>
        <div>
          <p className="text-xs">25y</p>
          <p className="text-xs">Age</p>
        </div>
      </div>
      <div className="h-px my-1 bg-black"></div>
    </div>
  );
}
