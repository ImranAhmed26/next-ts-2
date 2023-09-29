import React from "react";
import { defaultMembers } from "@/constants/constant";
import RouteButton from "../custom-buttons/route-btn";

type memberType = {
  id: number;
  lastName: string;
  firstName: string;
  role: string;
};

const MemberList = () => {
  return (
    <div className=" px-24 pt-10">
      <div className="z-10 max-w-5xl w-full items-center justify-between font-mono text-sm lg:flex">
        <RouteButton urlLink="/" title="Home" />
      </div>
      <div className="p-6 mt-3 rounded-md bg-indigo-100 max-w-fit">
        <div className=" px-2 py-2 m-2 bg-gray-50 rounded-md text-gray-600 font-semibold text-lg">
          Members
        </div>
        {defaultMembers.map((item: memberType, idx: number) => {
          return (
            <div key={idx}>
              <div className=" px-3 py-2 m-2  bg-gray-50 rounded-md text-indigo-600 font-semibold text-lg">
                {idx + 1}. {item.lastName}, {item.firstName}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default MemberList;
