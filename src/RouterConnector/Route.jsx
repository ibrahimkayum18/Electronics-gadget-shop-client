import { createBrowserRouter } from "react-router-dom";
import Root from "./Root";
import ErrorPage from "../Pages/ErrorPage";
import Home from "../Pages/Home";
import AddProduct from "../Pages/AddProduct";
import MyCart from "../Pages/MyCart";
import LogIn from "../Pages/LogIn";
import Register from "../Pages/Register";
import PrivetRouter from "../Providers/PrivetRouter";
import Products from "../Pages/Products";
import SeeMore from "../Components/SeeMore";
import Update from "../Pages/Update";


const Route = createBrowserRouter([
    {
        path:'/',
        element:<Root></Root>,
        errorElement:<ErrorPage></ErrorPage>,
        children: [
            {
                path:'/',
                element:<Home></Home>,
                loader: () => fetch("http://localhost:5000/shopifyProducts")
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
            },
            {
                path: '/products/:brand',
                element: <Products></Products>,
                loader: () => fetch('http://localhost:5000/shopifyProducts#')
            },
            {
                path: '/seemore/:id',
                element: <SeeMore></SeeMore>,
                loader: () => fetch('http://localhost:5000/shopifyProducts#')
            },
            {
                path: '/update/:id',
                element: <Update></Update>,
                loader: () => fetch('http://localhost:5000/shopifyProducts#')
            },
        ]
    }
])

export default Route;