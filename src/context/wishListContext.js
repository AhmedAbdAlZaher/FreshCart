import { createContext } from "react";
import axios from "axios";
export let wishListContext = createContext()

let headers = {
    token:localStorage.getItem("userToken")
}
 
function addToWishList(id){
    return axios.post(`https://ecommerce.routemisr.com/api/v1/wishlist` ,{
       productId:id
   },{
       headers 
   }).then((res)=>res).catch((err)=>err)
   }
   
   

export default function WishListContextProvider (props) {  



    return <wishListContext.Provider value={{addToWishList , }}>

        {props.children}

    </wishListContext.Provider>
}
