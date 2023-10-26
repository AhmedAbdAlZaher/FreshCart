import axios from "axios";
import { createContext, useEffect, useState } from "react";
import { useJwt } from "react-jwt";
export let AllordersContext = createContext();
export default function AllordersContextProvider (props) { 
    // let data = localStorage.getItem("userToken")


    // const { decodedToken, isExpired } = useJwt(data);



// console.log(decodedToken)

    return<AllordersContext.Provider>
        {props.children}
    </AllordersContext.Provider>
}