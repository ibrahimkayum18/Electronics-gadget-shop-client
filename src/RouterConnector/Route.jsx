import { createBrowserRouter } from "react-router-dom";
import Root from "./Root";
import ErrorPage from "../Pages/ErrorPage";
import Home from "../Pages/Home";
import AddProduct from "../Pages/AddProduct";
import MyCart from "../Pages/MyCart";


const Route = createBrowserRouter([
    {
        path:'/',
        element:<Root></Root>,
        errorElement:<ErrorPage></ErrorPage>,
        children: [
            {
                path:'/',
                element:<Home></Home>
            },
            {
                path:'/addproduct',
                element:<AddProduct></AddProduct>
            },
            {
                path:'/mycart',
                element:<MyCart></MyCart>
            }
        ]
    }
])

export default Route;