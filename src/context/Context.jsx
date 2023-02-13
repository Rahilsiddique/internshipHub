import React, { createContext, useContext, useState } from "react";
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

const internships = [...internshipsOg];

const Context = ({ children }) => {
  const [value, setValue] = useState("");
  const [selectedTech, setSelectedTech] = useState([]);

  const del = e => {
    selectedTech.map(se =>
      e.technologies.map(
        te => (se === te ? console.log(se, te) : console.log("nothing"))
      )
    );
  };
  internships.map(e => del(e));
  return (
    <GlobalContext.Provider
      value={{ internships, value, setValue, selectedTech, setSelectedTech }}
    >
      {children}
    </GlobalContext.Provider>
  );
};

export default Context;

export const internContext = () => {
  return useContext(GlobalContext);
};
