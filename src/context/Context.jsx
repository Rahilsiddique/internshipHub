import React, { createContext } from "react";
import { faker } from "@faker-js/faker";
import { softwareTechnologies } from "../utils/techs";

export const GlobalContext = createContext();
const internships = [...Array(30)].map(() => ({
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
console.log(internships);
const Context = ({ children }) => {
  return (
    <GlobalContext.Provider value={{ internships }}>
      {children}
    </GlobalContext.Provider>
  );
};

export default Context;
