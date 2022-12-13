import React from "react";

const SearchBox = () => {
  return (
    <div className="py-4 px-6">
      <div className="bg-slate-200 flex justify-center items-center h-24 rounded-lg gap-3">
        <input className="w-[60%] h-8 rounded-lg outline-blue-400 p-1" />
        <button className="bg-blue-400 px-3 py-1 rounded-lg">Search</button>
      </div>
      <div></div>
    </div>
  );
};

export default SearchBox;
