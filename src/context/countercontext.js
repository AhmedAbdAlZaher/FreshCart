import { createContext, useState } from "react";

let counterContext =createContext();


 export default function CounterContextProvider(props){
  let[counter , setCounter] = useState(10)



    return<counterContext.Provider value={counter}>
{props.children}
    </counterContext.Provider>
}