import React, { createContext } from "react";
import { faker } from "@faker-js/faker";

const GlobalContext = createContext();
const internships = [...Array(30)].map(() => ({
  id: faker.datatype.uuid(),
  company: faker.company.companyName(),
  stipend: faker.finance.amount(5, 100, 0, "₹"),
  duration: faker.datatype.number({ min: 1, max: 12 }),
  position: faker.datatype.number({ min: 1, max: 20 }),
  internshipType: faker.helpers.arrayElement([
    "Remote",
    "Flexible",
    "In-Office"
  ]),
  experienceLevel: faker.helpers.arrayElement(["easy", "intermediate", "hard"])
}));
console.log(internships);
const Context = ({ children }) => {
  return <GlobalContext.Provider>{children}</GlobalContext.Provider>;
};

export default Context;
