import React, { useContext } from "react";
import { GlobalContext } from "../context/Context";

const Filter = () => {
  const { filter, setFilter, setFilterTrue } = useContext(GlobalContext);

  function handleApply(e) {
    e.preventDefault();
    setFilterTrue(p => !p);
  }

  function handleClear(e) {
    e.preventDefault();
    setFilterTrue(p => !p);
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
          min="1"
          max="12"
          value={filter.period === "" ? 0 : filter.period}
          className="range"
          step="1"
          onChange={doYourThing}
          name="period"
        />
        <div className="w-full flex justify-between text-xs px-2">
          {[...Array(12)].map((_, i) =>
            <span key={i}>
              {i}
            </span>
          )}
        </div>
      </div>
      <button className="btn" onClick={handleApply}>
        apply
      </button>
    </form>
  );
};

export default Filter;
