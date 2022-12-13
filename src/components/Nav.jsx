import React from "react";

const Nav = () => {
  return (
    <div className="flex justify-between px-8 py-4 border-b-2 items-center">
      <div className="text-2xl">logo</div>
      <div className="flex gap-4 text-xl md:">
        <div className="px-2 cursor-pointer">Internships</div>
        <div className="px-2 cursor-pointer">Applied</div>
      </div>
    </div>
  );
};

export default Nav;
