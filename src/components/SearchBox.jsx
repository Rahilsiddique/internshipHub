import React, { useContext, useState } from "react";
import { GlobalContext } from "../context/Context";
import { softwareTechnologies } from "../utils/techs";
import { RxCross2 } from "react-icons/rx"

const SearchBox = () => {

  const [tech,setTech] = useState([...softwareTechnologies])

  const { value, setValue, selectedTech, setSelectedTech, tempI } =  useContext(GlobalContext)

  function handleSelection(selection){
    setSelectedTech(p => ([...p,selection]))
    setTech((p) => ([...p.filter(e => e !== selection)]))
    setValue(() => "")
  }

  function handleDelete(e){
    const updatedTech = selectedTech.filter(v => v !== e)
    setTech((p) => ([...p,e]))
    setSelectedTech(() => updatedTech)
  }
  return (
    <>
      <div className="w-full flex gap-4">
        <input
          type="text"
          placeholder="Type here"
          className="input input-bordered w-full max-w-full"
          onChange={(e) => setValue(e.target.value)}
          value={value}
        />
      </div>
      <div className={value ? `flex flex-col border cursor-pointer absolute top-32 left-3 max-h-[30%]  overflow-y-scroll w-[95%] md:w-[70%] bg-primary z-10`: `hidden`}>
        {tech.filter(e => {
          const searchTerm = value.toLowerCase()
          const techName = e.toLowerCase()
          return searchTerm && techName.includes(searchTerm)
        }).map(e =>
          <div className="flex flex-col border-b p-4 text-black" onClick={() => handleSelection(e)}>
            {e}
          </div>
        )}
      </div>
      <div className="flex gap-4 flex-wrap justify-between w-full">{selectedTech.map(e => <div className="badge badge-info badge-lg badge-secondary flex gap-2">
        <RxCross2 size={20} className="cursor-pointer" onClick={() => handleDelete(e)}/>
        {e}
      </div>)}
      <div className="flex justify-end">{tempI.length}</div>
      </div>
    </>
  );
};

export default SearchBox;
