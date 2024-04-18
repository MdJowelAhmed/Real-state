import { useContext } from "react";
import Navbar from "../ShareComponents/Navbar";
import { AuthContext } from "../AuthProvider/AuthProvider";
import Footer from "../../Components/ShareComponents/Footer";
import { Helmet } from "react-helmet-async";
import 'animate.css';


const UserProfile = () => {
    const { user } = useContext(AuthContext)
    console.log(user)

    return (
        <div>
             <Helmet>
                <title>Hospitalities / userProfile</title>
            </Helmet>
            <Navbar></Navbar>
            <div className="text-center my-10">
                <img className="m-5 mx-auto rounded-full w-40 " src={user?.photoURL} alt="" />
                <h2 className="text-5xl text-blue-900 font-semibold my-5 animate__animated animate__bounce">{user?.displayName} </h2>
                <h2 className="text-3xl text-blue-400 font-semibold">{user?.email} </h2>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default UserProfile;