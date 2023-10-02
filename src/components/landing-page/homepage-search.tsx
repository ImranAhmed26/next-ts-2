'use client';
import React from 'react';
import SizeImage from '../../../public/images/tyre-03.png';
import RegImage from '../../../public/images/tyre-02.png';
import Image from 'next/image';

const HomepageSearch = () => {
  return (
    <div className="flex items-center justify-center gap-10">
      <div className=" h-full bg-Grey drop-shadow-lg p rounded-lg p-6 ">
        <div className="flex flex-col items-center ">
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
          <div></div>
        </div>
      </div>
      <div className=" h-full bg-Grey drop-shadow-lg p rounded-lg p-6">
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
