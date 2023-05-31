import React from "react";
import CircularArray from "./CircularArray";

const BuiltFor = () => {
  return (
    <div className="-mt-12 bg-black pb-[220px] min-h-screen max-h-fit rounded-t-[3.5rem]">
      <div className="grid grid-cols-2 gap-7 mx-auto pt-[150px] px-[130px]">
        <div className="flex flex-col">
          <p className="text-white font-thin text-2xl">Built for</p>
          <CircularArray />
        </div>

        <div className="text-[#FFFFFF] flex flex-col max-w-[420px]">
          <p className="invisible text-white font-thin text-2xl ">Built for</p>
          and every professional who is interested in content creation and
          establishing a brand presence on social media platforms
        </div>
      </div>
    </div>
  );
};

export default BuiltFor;
