import './App.css';
import Home from './Components/Home/Home';
import Layout from './Components/Layout/Layout';
import {  RouterProvider, createBrowserRouter, createHashRouter } from 'react-router-dom';
import Products from './Components/Products/Products';
import Catagories from './Components/Catagories/Catagories';
import Register from './Components/Register/Register';
import Login from './Components/Login/Login';
import NotFound from './Components/NotFound/NotFound';
import Cart from './Components/Cart/Cart';
import Brands from './Components/Brands/Brands';
import ProtectedRoutes from './Components/ProtectedRoutes/ProtectedRoutes';
import { useContext, useEffect } from 'react';
import { tokenContext } from './context/tokenContext';
import Details from './Components/Details/Details';
import Cheakout from './Components/Cheakout/Cheakout';
import AllOrders from './Components/AllOrders/AllOrders';
import Wishlist from './Components/WishList/WishList';



let routers = createHashRouter([
  {
    path: "/", element: <Layout></Layout>, children: [
      { index: true, element: <ProtectedRoutes><Home></Home></ProtectedRoutes> },
      { path: "products", element: <ProtectedRoutes><Products></Products></ProtectedRoutes> },
      { path: "Catagories", element: <ProtectedRoutes><Catagories></Catagories></ProtectedRoutes> },
      { path: "brands", element: <ProtectedRoutes><Brands></Brands></ProtectedRoutes> },
      { path: "cart", element: <ProtectedRoutes><Cart></Cart></ProtectedRoutes> },
      { path: "details/:id", element: <ProtectedRoutes><Details></Details></ProtectedRoutes> },
      { path: "Cheakout", element: <ProtectedRoutes><Cheakout></Cheakout></ProtectedRoutes> },
      { path: "allorders", element: <ProtectedRoutes><AllOrders></AllOrders></ProtectedRoutes> },
      { path: "wishlist", element: <ProtectedRoutes><Wishlist></Wishlist></ProtectedRoutes> },


      { path: "register", element: <Register></Register> },
      { path: "login", element: <Login></Login> },

      { path: "*", element: <NotFound></NotFound> },


    ]
  }
])




function App() {
  let { setToken } = useContext(tokenContext)
  useEffect(() => {
    if (localStorage.getItem("userToken")) {
      setToken(localStorage.getItem("userToken"))
    }
  }, [])
  return (
      <RouterProvider router={routers}></RouterProvider>
  )
}

export default App;
