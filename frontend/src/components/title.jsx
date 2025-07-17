import React from "react";

const Title = ({ text, subText }) => {
  return (
    <div className="inline-flex gap-2 items-center mb-3 text-xl">
      <p className="text-gray-500">
        {text} <span className="text-gray-700 font-medium">{subText}</span>
      </p>
      <p className="w-8 sm:w-12 h-[1px] sm:h-[2px] bg-gray-700" />
    </div>
  );
};

export default Title;
