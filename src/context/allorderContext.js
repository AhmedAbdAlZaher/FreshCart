import axios from "axios";
import React, { createContext, useEffect, useState } from "react";
import { jwtDecode } from "jwt-decode";
export let AllordersContext = createContext();

let headers = {
    token: localStorage.getItem("userToken")
}

export default function AllordersContextProvider(props) {
    const data = localStorage.getItem("userToken");
    const { id } = data ? jwtDecode(data) : {};

    function getuserorders() {
        return axios.get(`https://ecommerce.routemisr.com/api/v1/orders/user/${id}`,
            {
                headers
            })
            .then((res) => res)
            .catch((err) => err)
    }


    return <AllordersContext.Provider value={{ getuserorders }}>
        {props.children}
    </AllordersContext.Provider>
}