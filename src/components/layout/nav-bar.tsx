"use client";
import React from "react";
import { CustomRouter } from "../helper/custom-router";

const PrimaryNavBar = () => {
  return (
    <div className="sticky z-30 top-0">
      <div
        // onClick={() => CustomRouter.router("")}
        className="w-full bg-gray-100 drop-shadow h-20 p-6 text-indigo-700 font-medium text-lg "
      >
        {" > nav-bar"}
      </div>
    </div>
  );
};

export default PrimaryNavBar;
