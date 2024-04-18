import { useContext } from "react";
import Navbar from "../ShareComponents/Navbar";
import { AuthContext } from "../AuthProvider/AuthProvider";
import Footer from "../../Components/ShareComponents/Footer";


const UserProfile = () => {
    const { user } = useContext(AuthContext)
    console.log(user)

    return (
        <div>
            <Navbar></Navbar>
            <div className="text-center my-10">
                <img className="m-5 mx-auto" src={user?.photoURL} alt="" />
                <h2>{user?.displayName} </h2>
                <h2>{user?.email} </h2>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default UserProfile;