import { createContext, useContext } from "react";

//creo il contesto
export const GlobalContext = createContext();

// 2. Creo1111 un custom hook per semplificare l'uso
export function useGlobalContext() {
  return useContext(GlobalContext);
}   