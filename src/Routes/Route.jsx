import { createBrowserRouter } from "react-router-dom";
import Main from "../LayOut/Main";
import Home from "../Page/Home/Home";
import OurMenu from "../Page/OurMenu/OurMenu";
import Order from "../Page/Order/Order";
import Login from "../Page/Home/Login/Login";
import SignUp from "../Page/SignUp/SignUp";

const router = createBrowserRouter([
    {
        path:'/',
        element:<Main></Main>,
        children:[
            {
                path:'/',
                element:<Home></Home>,
            },
            {
                path:'/ourMenu',
                element:<OurMenu></OurMenu>
            },
            {
                path:'/order/:category',
                element:<Order></Order>
            },
            {
                path:'login',
                element:<Login></Login>
            },
            {
                path:'signUp',
                element:<SignUp></SignUp>
            }
        ]
    }
])

export default router