import { createContext } from "react";
// step 1;
export const BioContext = createContext();
// step 2;
export const BioProvider = ({ children }) => {
  const myName = "ashish prabhakar";
  const myAge="20"
  console.log("🚀 ~ BioProvider ~ myAge:", myAge)
  console.log("🚀 ~ BioProvider ~ myName:", myName)
  
  return <BioContext.Provider value={{myName,myAge}}>{children}</BioContext.Provider>;
};
