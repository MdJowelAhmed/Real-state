import { createBrowserRouter } from "react-router-dom";
import Root from "../Root/Root";
import Home from "../../Pages/Home/Home";
import ErrorPage from "../../Pages/Error/ErrorPage";
import About from "../../Pages/about/About";
import Login from "../../Pages/Login/Login";
import Register from "../../Pages/Register/Register";
import Properties from "../../Pages/properties/Properties";
import UserProfile from "../Profile/UserProfile";
import UpdateProfile from "../Profile/UpdateProfile";
import PrivateRoute from "../PrivateRoute/PrivateRoute";

const router=createBrowserRouter([
    {
        path: '/',
        element:<Root></Root>,
        errorElement:<ErrorPage></ErrorPage>,
        children:[
            {
                path: '/',
                element: <Home></Home>,
                loader:()=>fetch('/fakeData.json')
            },
            {
                path: '/properties/:id',
                element: <PrivateRoute>
                    <Properties></Properties>
                </PrivateRoute>,
                loader:()=>fetch('/fakeData.json')
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
            {
                path: '/user',
                element:<PrivateRoute>
                     <UserProfile></UserProfile>
                </PrivateRoute>
            },
            {
                path: '/update',
                element: <PrivateRoute>
                    <UpdateProfile></UpdateProfile>
                </PrivateRoute>
            },
        ]
    }
])

export default router;