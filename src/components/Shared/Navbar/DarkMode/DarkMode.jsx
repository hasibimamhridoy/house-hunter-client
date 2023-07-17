import React from "react";
import useAuth from "../../../../hooks/useAuth";

const DarkMode = () => {

    const {handleDarkMode} = useAuth()

    

  return (
    <div>
      <div className="flex justify-end w-full">
        <label className="relative inline-flex items-center cursor-pointer">
        <input
        type="checkbox"
        onChange={handleDarkMode}
        className="sr-only peer"
      />          <div className="w-11 h-6 bg-gray-200 rounded-full peer dark:bg-gray-700 peer-focus:ring-2 peer-focus:ring-sky-300 dark:peer-focus:ring-sky-600 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-gray-700"></div>
        </label>
      </div>
    </div>
  );
};

export default DarkMode;
