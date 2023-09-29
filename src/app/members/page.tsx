"use client";
import React from "react";
import MemberList from "@/components/list/member-list";
import StateExample from "@/components/list/state-example";

const MemberPage = () => {
  return (
    <div>
      <MemberList />
      <div className="text-2xl font-bold p-20">
        {/* <StateExample /> */}
      </div>
    </div>
  );
};

export default MemberPage;
