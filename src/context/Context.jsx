import React, { createContext, useContext, useEffect, useState } from "react";
import { faker } from "@faker-js/faker";
import { softwareTechnologies } from "../utils/techs";

export const GlobalContext = createContext();

const internshipsOg = [...Array(30)].map(() => ({
  id: faker.datatype.uuid(),
  company: faker.company.companyName(),
  stipend: faker.finance.amount(5, 100, 0, "₹"),
  duration: faker.datatype.number({ min: 1, max: 12 }),
  positionNo: faker.datatype.number({ min: 1, max: 20 }),
  internshipType: faker.helpers.arrayElement([
    "Remote",
    "Flexible",
    "In-Office"
  ]),
  jobTitle: faker.name.jobTitle(),
  experienceLevel: faker.helpers.arrayElement(["easy", "intermediate", "hard"]),
  technologies: faker.helpers.arrayElements(
    softwareTechnologies,
    Math.floor(Math.random() * 10 + 1)
  )
}));

const Context = ({ children }) => {
  let internships = [...internshipsOg];

  const [value, setValue] = useState("");
  const [selectedTech, setSelectedTech] = useState([]);
  const [tempI, setTempI] = useState([...internships]);
  const [filter, setFilter] = useState({
    internShipType: "",
    level: "",
    period: ""
  });
  const [filterTrue, setFilterTrue] = useState(false);

  useEffect(
    () => {
      const temp = [];
      internships.forEach(e => {
        selectedTech.forEach(st => {
          if (JSON.stringify(e.technologies).includes(JSON.stringify(st))) {
            temp.push(e);
          }
        });
      });
      setTempI(() => {
        if (temp.length === 0) {
          return internships;
        } else {
          return temp;
        }
      });
    },
    [selectedTech]
  );

  useEffect(
    () => {
      const temp = [];
      internships.forEach(e => {
        if (
          e.internshipType === filter.internShipType &&
          e.experienceLevel === filter.level &&
          e.duration <= filter.period
        ) {
          temp.push(e);
        }
      });
      setTempI(() => {
        if (temp.length === 0) {
          return internships;
        } else {
          return temp;
        }
      });
    },
    [filterTrue]
  );

  return (
    <GlobalContext.Provider
      value={{
        tempI,
        value,
        setValue,
        selectedTech,
        setSelectedTech,
        filter,
        setFilter,
        filterTrue,
        setFilterTrue
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};

export default Context;

export const internContext = () => {
  return useContext(GlobalContext);
};
