import { createContext, ReactNode } from "react";
import { doctors } from "../assets/assets";

export interface DoctorsType{
    _id: string,
    name: string,
    image: string,
    speciality: string,
    degree: string,
    experience: string,
    about:string,
    fees: number,
    address: {
      line1: string,
      line2: string,
    },
}

interface AppContextType{
    doctors: DoctorsType[],
}
export const AppContext = createContext<AppContextType|any>({});
const AppContextProvider = (props: {children: ReactNode}) => {
  const value:AppContextType = { doctors };
  return (
    <AppContext.Provider value={value}>{props.children}</AppContext.Provider>
  );
};

export default AppContextProvider;
