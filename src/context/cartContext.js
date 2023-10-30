import axios from "axios";
import { createContext, useEffect, useState } from "react";
export let CartContext = createContext();
let headers = {
    token: localStorage.getItem("userToken")
}

function addToCart(id) {
    return axios.post(`https://ecommerce.routemisr.com/api/v1/cart`, {
        productId: id
    }, {
        headers
    }).then((res) => res).catch((err) => err)
}





function getCart() {
    return axios.get(`https://ecommerce.routemisr.com/api/v1/cart`, {
        headers
    })
        .then((res) => res)
        .catch((err) => err)
}

function deleteProductFromCart(id) {
    return axios.delete(`https://ecommerce.routemisr.com/api/v1/cart/${id}`, {
        headers
    })
        .then((res) => res)
        .catch((err) => err)
}


function deleteAll() {
    return axios.delete(`https://ecommerce.routemisr.com/api/v1/cart`, {
        headers
    })
        .then((res) => res)
        .catch((err) => err)
}



function updateProductQuantity(id, count) {
    return axios.put(`https://ecommerce.routemisr.com/api/v1/cart/${id}`, {
        count
    }, {
        headers
    })
        .then((res) => res)
        .catch((err) => err)
}

let token = localStorage.getItem("userToken")

export default function CartContextProvider(props) {



    const [cartId, setCartId] = useState(null)
    const [numOfCartItems, setnumOfCartItems] = useState(null)


    function onlinePayment(shippingAddress) {
        return axios.post(`https://ecommerce.routemisr.com/api/v1/orders/checkout-session/${cartId}?url=https://AhmedAbdAlZaher.github.io/`,
            {
                shippingAddress,
            },
            {
                headers,
            }
        )
            .then((res) => res)
            .catch((err) => err)
    }

    async function getInitalCart() {
        let { data } = await getCart();
        setnumOfCartItems(data?.numOfCartItems)
        setCartId(data?.data._id)
    }

    useEffect(() => {
        getInitalCart();
    }
        , [])


    return <CartContext.Provider value={{ addToCart, getCart, deleteProductFromCart, updateProductQuantity, onlinePayment, numOfCartItems, setnumOfCartItems, }}>
        {props.children}
    </CartContext.Provider>
}