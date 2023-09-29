"use client";
import React from "react";
import { Select, SelectItem } from "@nextui-org/react";
import { animals } from "@/components/landing-page/lib/data";
import SizeImage from "../../../public/images/tyre-03.png";
import RegImage from "../../../public/images/tyre-01.png";
import Image from "next/image";

const HomepageSearch = () => {
  return (
    <div className="flex gap-10">
      <div className="w-1/2 h-full rounded-lg min-w-lg px-6 py-6 bg-white/70">
        <div className="flex flex-col items-center">
          <div>
            <Image
              className="rounded-lg"
              src={SizeImage}
              alt="Search by Size"
              width={300}
              height={300}
            />
          </div>
          <div className="text-xl font-bold text-gray-800 p-2">
            Search by size
          </div>
          <div>
            <Select
              isRequired
              label="Favorite Animal"
              placeholder="Select an animal"
              defaultSelectedKeys={["cat"]}
              className="max-w-xs"
            >
              {animals.map((animal) => (
                <SelectItem key={animal.value} value={animal.value}>
                  {animal.label}
                </SelectItem>
              ))}
            </Select>
          </div>
        </div>
      </div>
      <div className="w-1/2 h-full rounded-lg min-w-lg  px-6 py-6 bg-white/70">
        <div className="flex flex-col items-center">
          <div>
            <Image
              className="rounded-lg"
              src={RegImage}
              alt="Search by Size"
              width={300}
              height={300}
            />
          </div>
          <div className="text-xl font-bold text-gray-800 p-2">
            Search by reg
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomepageSearch;
