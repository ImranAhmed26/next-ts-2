'use client';
import React, { useState, useEffect } from 'react';
// import SizeImage from '../../../public/images/tyre-03.png';
// import RegImage from '../../../public/images/tyre-02.png';
// import Image from 'next/image';
import Select from '@/components/ui/select';
import { rimSize, width, profile } from '@/constants/constant';
import Input from '../ui/input';
import SelectButton from '../ui/select-button';
import { GET } from '@/lib/api';

const HomepageSearch = () => {
  const [data, setData] = useState();
  useEffect(() => {
    GET('/tyres/alltyres').then((data:any) => {
      setData(data);
    });
  }, []);
  console.log('data', data)
  return (
    <div className="flex items-center justify-center gap-10">
      <div className="w-1/2 h-full drop-shadow-lg p rounded-md p-6 bg-Grey/60">
        <div className="flex flex-col items-center ">
          <div>
            {/* <Image
              className="rounded-md shadow-md"
              src={SizeImage}
              alt="Search by Size"
              width={300}
              height={300}
            /> */}
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
              <Select options={rimSize} title="Size" />
            </div>
          </div>
          <div>
            <SelectButton />
          </div>
        </div>
      </div>
      <div className="w-1/2 h-full drop-shadow-lg p rounded-md p-6 bg-Grey/60">
        <div className="flex flex-col items-center">
          <div>
            {/* <Image
              className="rounded-md"
              src={RegImage}
              alt="Search by Size"
              width={300}
              height={300}
            /> */}
          </div>
          <div className="text-xl font-bold p-2">Search by ID</div>
          <div>
            <Input options={rimSize} title="Number" />
          </div>
          <div>
            <SelectButton />
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomepageSearch;
