 import './App.css';
import Home from './Components/Home/Home';
import Layout from './Components/Layout/Layout';

import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Products from './Components/Products/Products';
import Catagories from './Components/Catagories/Catagories';
import Register from './Components/Register/Register';
import Login from './Components/Login/Login';
import NotFound from './Components/NotFound/NotFound';
import Cart from './Components/Cart/Cart';
import Brands from './Components/Brands/Brands';



let routers = createBrowserRouter([
  {
  path:"/",element:<Layout></Layout>,children:[
    {index:true, element:<Home></Home>},
    {path:"products", element:<Products></Products>},
    {path:"Catagories", element:<Catagories></Catagories>},
    {path:"brands", element:<Brands></Brands>},
    {path:"cart", element:<Cart></Cart>},
    {path:"register", element:<Register></Register>},
    {path:"login", element:<Login></Login>},

    {path:"*", element:<NotFound></NotFound>},


  ]}
])




function App() {
  return (
  <RouterProvider router={routers}></RouterProvider>
  )
}

export default App;
