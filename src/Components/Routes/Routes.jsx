import { createBrowserRouter } from "react-router-dom";
import Root from "../Root/Root";
import Home from "../../Pages/Home/Home";
import ErrorPage from "../../Pages/Error/ErrorPage";
import About from "../../Pages/about/About";
import Login from "../../Pages/Login/Login";
import Register from "../../Pages/Register/Register";
import Properties from "../../Pages/properties/Properties";

const router=createBrowserRouter([
    {
        path: '/',
        element:<Root></Root>,
        errorElement:<ErrorPage></ErrorPage>,
        children:[
            {
                path: '/',
                element: <Home></Home>,
                loader:()=>fetch('fakeData.json')
            },
            {
                path: '/properties/:id',
                element: <Properties></Properties>,
                loader:()=>fetch('fakeData.json')
            },
            {
                path: '/about',
                element:  <About></About>
            },
            {
                path: '/login',
                element:  <Login></Login>
            },
            {
                path: '/register',
                element: <Register></Register>
            },
        ]
    }
])

export default router;