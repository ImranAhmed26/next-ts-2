"use client";

import React from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  increment,
  decrement,
  reset,
} from "@/store/features/counter/counter-slice";
import RouteButton from "../custom-buttons/route-btn";
import { RootState } from "@/store/index";

const CounterExample = () => {
  const count = useSelector((state: RootState) => state.counter.count);
  const dispatch = useDispatch();
  return (
    <div className=" px-24 pt-10">
      <div className="z-10 max-w-5xl w-full items-center justify-between font-mono text-sm lg:flex">
        <RouteButton urlLink="/" title="Home" />
      </div>
      <div className="p-6 mt-3 rounded-md bg-indigo-100 flex flex-col items-center gap-2">
        <div className="flex gap-4 justify-center cursor-default px-2 py-2 w-40 bg-gray-50 rounded-md text-gray-600 font-semibold text-lg">
          <div>Counter:</div>
          <div>{count}</div>
        </div>
        <div className="text-lg w-40 flex gap-2">
          <div className="w-20">
            <button
              className="w-full h-full  px-0 py-2 bg-gray-100 rounded-md text-indigo-600 font-semibold hover:bg-white hover:text-indigo-800"
              onClick={() => dispatch(increment())}
            >
              +
            </button>
          </div>
          <div className="w-20">
            <button
              className="w-full h-full  px-0 py-2 bg-gray-100 rounded-md text-indigo-600 font-semibold hover:bg-white hover:text-indigo-800"
              onClick={() => dispatch(decrement())}
            >
              -
            </button>
          </div>
        </div>
        <div className="w-40">
          <button
            className="w-full h-full  px-0 py-2 bg-gray-100 rounded-md text-indigo-600 font-semibold hover:bg-white hover:text-indigo-800"
            onClick={() => dispatch(reset())}
          >
            Reset
          </button>
        </div>
      </div>
    </div>
  );
};

export default CounterExample;
