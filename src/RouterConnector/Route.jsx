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
                element:<PrivetRouter><MyCart></MyCart></PrivetRouter>,
                loader: () => fetch('http://localhost:5000/cart')
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
                element: <PrivetRouter><Products></Products></PrivetRouter>,
                loader: () => fetch('http://localhost:5000/shopifyProducts#')
            },
            {
                path: '/seemore/:id',
                element: <PrivetRouter><SeeMore></SeeMore></PrivetRouter>,
                loader: () => fetch('http://localhost:5000/shopifyProducts#')
            },
            {
                path: '/update/:id',
                element: <PrivetRouter><Update></Update></PrivetRouter>,
                loader: ({params}) => fetch(`http://localhost:5000/shopifyProducts#/${params.id}`)
            },
        ]
    }
])

export default Route;