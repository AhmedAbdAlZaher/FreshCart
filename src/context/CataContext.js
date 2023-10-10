import axios from "axios";
import { createContext, useEffect, useState } from "react";
export let CataContext = createContext();

function getAllCatagories() {
    return axios.get("https://ecommerce.routemisr.com/api/v1/categories")
        .then((res) => res)
        .catch((err) => err)
}

function getSubCatagories(id) {
    return axios.get(`https://ecommerce.routemisr.com/api/v1/categories/${id}/subcategories`)
        .then((res) => res)
        .catch((err) => err)
}


export default function CataContextProvider(props) {


    return <CataContext.Provider value={{ getAllCatagories, getSubCatagories, }}>

        {props.children}

    </CataContext.Provider>

}