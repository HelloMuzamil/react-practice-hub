import React from "react";

const Category = () => {
  const btnClasses =
    "px-4 py-2 border  text-black-500 rounded-md   hover:bg-green-500 hover:text-white font-bold ";
  return (
    <>
      <div>
        <h1 className="mt-6 font-extrabold text-gray-600 ml-2.5 text-[24px] text-center">
          Find The Best Food
        </h1>
      </div>
      <div className="flex gap-2.5 ml-2.5 mt-6 items-center justify-center">
        <button className={btnClasses}>All</button>
        <button className={btnClasses}>Lunch</button>
        <button className={btnClasses}>BreakFast</button>
        <button className={btnClasses}>Dinner</button>
        <button className={btnClasses}>Snacks</button>
      </div>
    </>
  );
};

export default Category;
