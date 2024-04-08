import { Link } from "react-router-dom";
import Navbar from "../../Components/ShareComponents/Navbar";



const Login = () => {
    return (
        <div>
            <Navbar></Navbar>
            <div className="hero min-h-screen bg-base-200">
                <div className="hero-content flex-col">
                    <div className="text-center ">
                        <h1 className="text-5xl font-bold">Login now!</h1>
                       
                    </div>
                    <div className="card shrink-0  min-w-96  shadow-2xl bg-base-100">
                        <form className="card-body">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="email" placeholder="email" className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input type="password" placeholder="password" className="input input-bordered" required />
                                <label className="label">
                                    <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                                </label>
                            </div>
                            <div className="form-control mt-6">
                                <button className="btn btn-primary">Login</button>
                            </div>
                        </form>
                        <div className="text-center mb-5">
                            <p>Did not have account? please <span><Link to='/register' className="text-blue-600 font-semibold">Register</Link></span></p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;