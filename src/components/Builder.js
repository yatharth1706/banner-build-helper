import React, { useState } from "react";
import svgs from "./svgConfig";

function Builder() {
  const [currentTheme, setCurrentTheme] = useState(svgs[0]);

  return (
    <div className="p-3 w-5/6 mx-auto shadow bg-white">
      <h3 className="text-xl text-center mt-4">Banner Builder</h3>

      <div className="w-full">
        <div className="h-auto flex flex-col">
          <span className="text-center mt-4">Theme</span>
          <div className="w-full h-auto mt-4 flex space-x-4 overflow-x-scroll py-4 flex-nowrap scrolling-touch items-start">
            {svgs.map((image) => (
              <div className="flex-none rounded-full h-40 w-40">
                <img
                  src={"/images/" + image}
                  alt={image}
                  className="rounded-full w-full h-full object-cover cursor-pointer"
                  onClick={() => setCurrentTheme(image)}
                />
              </div>
            ))}
          </div>
        </div>

        {/* <div className="h-auto">
          <span>Layout</span>
        </div>
         */}
        <div className="h-auto flex flex-col mt-4">
          <h3 className="text-center mt-4 mb-4">Final Output</h3>
          <div className="w-5/6 h-80 mx-auto">
            <img src={"/images/" + currentTheme} className="w-full h-full object-cover" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Builder;
