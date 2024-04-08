import { createBrowserRouter } from "react-router-dom";
import Root from "../Root/Root";
import Home from "../../Pages/Home/Home";
import ErrorPage from "../../Pages/Error/ErrorPage";
import About from "../../Pages/about/About";

const router=createBrowserRouter([
    {
        path: '/',
        element:<Root></Root>,
        errorElement:<ErrorPage></ErrorPage>,
        children:[
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/about',
                element:  <About></About>
            },
        ]
    }
])

export default router;