import React from 'react';
import HomepageSearch from './homepage-search';

const LandingPage = () => {
  return (
    <div className="w-full h-full">
      <div className=" text-Text text-4xl font-bold drop-shadow-lg p-4 bg-Grey/70 my-4 rounded-lg lg:w-[1000px] text-center">
        The new way to buy your tyres online 
      </div>
      <div className="mt-10">
        <HomepageSearch />
      </div>
    </div>
  );
};

export default LandingPage;
