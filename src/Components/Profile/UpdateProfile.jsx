import { useContext } from "react";
import Footer from "../ShareComponents/Footer";
import Navbar from "../ShareComponents/Navbar";
import { AuthContext } from "../AuthProvider/AuthProvider";



const UpdateProfile = () => {
    const {updateUserProfile}=useContext(AuthContext)

    const handleUpdateProfile=(e)=>{
        e.preventDefault()
       
        const name=e.target.name.value;
        const image=e.target.image.value
        updateUserProfile(name,image)
        .then((result)=>{
            console.log(result)
        })
        .catch(error=>{
            console.log(error)
        })
    }
    return (
        <div>
            <Navbar></Navbar>
            <div className="hero min-h-screen bg-base-200 my-10">
                <div className="hero-content flex-col ">
                    <div className="text-center">
                       
                        
                    </div>
                    <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                        <form onSubmit={handleUpdateProfile} className="card-body">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Name</span>
                                </label>
                                <input type="text" placeholder="Your name" className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Image</span>
                                </label>
                                <input type="text" placeholder="image url" className="input input-bordered" required />
                              
                            </div>
                            <div className="form-control mt-6">
                                <button className="btn btn-primary">UpdateProfile</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default UpdateProfile;