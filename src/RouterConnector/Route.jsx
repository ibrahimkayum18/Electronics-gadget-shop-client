import { createBrowserRouter } from "react-router-dom";
import Root from "./Root";
import ErrorPage from "../Pages/ErrorPage";
import Home from "../Pages/Home";
import AddProduct from "../Pages/AddProduct";
import MyCart from "../Pages/MyCart";
import LogIn from "../Pages/LogIn";
import Register from "../Pages/Register";
import PrivetRouter from "../Providers/PrivetRouter";


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
                element:<PrivetRouter><AddProduct></AddProduct></PrivetRouter>
            },
            {
                path:'/mycart',
                element:<PrivetRouter><MyCart></MyCart></PrivetRouter>
            },
            {
                path: '/login',
                element: <LogIn></LogIn>
            },
            {
                path: '/register',
                element: <Register></Register>
            }
        ]
    }
])

export default Route;