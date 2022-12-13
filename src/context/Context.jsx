import React, { createContext } from "react";

const GlobalContext = createContext();

const Context = ({ children }) => {
  return <GlobalContext.Provider>{children}</GlobalContext.Provider>;
};

export default Context;
