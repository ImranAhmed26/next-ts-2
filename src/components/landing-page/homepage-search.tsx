"use client";
import React from "react";
import SizeImage from "../../../public/images/tyre-03.png";
import RegImage from "../../../public/images/tyre-02.png";
import Image from "next/image";
import Select from "@/components/ui/select";
import { rimSize, width, profile } from "@/constants/constant";

const HomepageSearch = () => {
  return (
    <div className="flex items-center justify-center gap-10">
      <div className=" h-full drop-shadow-lg p rounded-md p-6 ">
        <div className="flex flex-col items-center ">
          <div>
            <Image
              className="rounded-md shadow-md"
              src={SizeImage}
              alt="Search by Size"
              width={300}
              height={300}
            />
          </div>
          <div className="text-xl font-bold p-2">Search by size</div>
          <div className="flex gap-2">
            <div>
              <Select options={width} title="Width" />
            </div>
            <div>
              <Select options={profile} title="Profile" />
            </div>
            <div>
              <Select options={rimSize} title="rimSize" />
            </div>
          </div>
        </div>
      </div>
      <div className=" h-full drop-shadow-lg p rounded-md p-6">
        <div className="flex flex-col items-center">
          <div>
            <Image
              className="rounded-md"
              src={RegImage}
              alt="Search by Size"
              width={300}
              height={300}
            />
          </div>
          <div className="text-xl font-bold p-2">Search by reg</div>
          <div>
              <Select options={[{name:'',value:''}]} title="Registration No" />
            </div>
        </div>
      </div>
    </div>
  );
};

export default HomepageSearch;
