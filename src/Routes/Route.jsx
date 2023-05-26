import { createBrowserRouter } from "react-router-dom";
import Main from "../LayOut/Main";
import Home from "../Page/Home/Home";
import OurMenu from "../Page/OurMenu/OurMenu";

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
                path:'ourMenu',
                element:<OurMenu></OurMenu>
            }
        ]
    }
])

export default router