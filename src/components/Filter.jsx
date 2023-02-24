import React, { useState } from "react";

const Filter = () => {
  const [filter, setFilter] = useState({
    internShipType: "",
    level: "",
    period: ""
  });

  function handleApply(e) {
    e.preventDefault();
    console.log(filter);
  }

  function handleClear(e) {
    e.preventDefault();
    setFilter(() => ({
      internShipType: "",
      level: "",
      period: ""
    }));
  }

  function doYourThing(e) {
    setFilter(p => ({ ...p, [e.target.name]: e.target.value }));
  }

  return (
    <form>
      <button className="btn btn-primary" onClick={handleClear}>
        clear
      </button>
      <div className="py-3">
        <select
          className="bg-accent text-white rounded-lg p-3"
          onChange={doYourThing}
          value={filter.internShipType}
          name="internShipType"
        >
          <option>Remote</option>
          <option>Flexiable</option>
          <option>In-Office</option>
        </select>
      </div>
      <div>
        <select
          className="bg-accent text-white rounded-lg p-3"
          onChange={doYourThing}
          value={filter.level}
          name="level"
        >
          <option>easy</option>
          <option>intermediate</option>
          <option>hard</option>
        </select>
      </div>
      <div>
        <input
          type="range"
          min="0"
          max="12"
          value={filter.period === "" ? 0 : filter.period}
          className="range"
          step="3"
          onChange={doYourThing}
          name="period"
        />
        <div className="w-full flex justify-between text-xs px-2">
          <span>1</span>
          <span>3</span>
          <span>6</span>
          <span>9</span>
          <span>12</span>
        </div>
      </div>
      <button className="btn" onClick={handleApply}>
        apply
      </button>
    </form>
  );
};

export default Filter;
