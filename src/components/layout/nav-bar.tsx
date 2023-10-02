'use client';
import React from 'react';
import { CustomRouter } from '../helper/custom-router';

const PrimaryNavBar = () => {
  return (
    <div className="sticky z-30 top-0">
      <div
        // onClick={() => CustomRouter.router("")}
        className="w-full main-navbar-bg drop-shadow h-20 p-6 text-White font-medium text-lg "
      >
        {' > nav-bar'}
      </div>
    </div>
  );
};

export default PrimaryNavBar;
