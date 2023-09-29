import React, { useState, useEffect } from "react";

const StateExample = () => {
  const [state, setState] = useState("Koso Suzuki");
  return (
    <div>
      <div>Name in current state: {state}</div>
      <div>
        <input
          className="border-gray-800 border rounded-md outline-none px-1 text-base font-medium"
          type="text"
          name="name"
          onChange={(e) => {
            setState(e.target.value);
          }}
        />
      </div>
    </div>
  );
};

export default StateExample;
