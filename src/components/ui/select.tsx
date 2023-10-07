import React from "react";

type optionsType = { name: string; value: string | number }[];

const Select = ({
  options,
  title,
}: {
  options: optionsType;
  title: string;
}) => {
  let optionValues = options;


  return (
    <div>
      <div>
        <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-800 text-center">
          {title}
        </label>
        <select
          id="countries"
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
        >
          {optionValues.map((item, idx) => {
            return (
              <option value={item.value} key={idx}>
                {item.name}
              </option>
            );
          })}
        </select>
      </div>
    </div>
  );
};

export default Select;
