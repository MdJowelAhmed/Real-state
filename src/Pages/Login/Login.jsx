import { Link, useLocation, useNavigate } from "react-router-dom";
import Navbar from "../../Components/ShareComponents/Navbar";
import { Helmet } from "react-helmet-async";
import { useContext } from "react";
import { AuthContext } from "../../Components/AuthProvider/AuthProvider";
import { useForm } from "react-hook-form";
import { FaGoogle } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";



const Login = () => {
    const { login, googleLogin, githubLogin } = useContext(AuthContext)
    const navigate=useNavigate()
    const location=useLocation()

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm()

    const onSubmit = data => {

        // console.log(data)
        const { email, password } = data;
        // console.log(data)
        login(email, password)
            .then(result => {
                console.log(result.user)
            })
            .catch(error => {
                console.log(error)
            })
    }
    const handleSocialLogin =socialprovider=>{
        socialprovider()
        .then(result=>{
           if(result.user){
            navigate(location?.state || "/")
           }
        })
    }
    return (
        <div>
            <Helmet>
                <title>Hospitalities / Login</title>
            </Helmet>
            <Navbar></Navbar>
            <div className="hero min-h-screen bg-base-200">
                <div className="hero-content flex-col">
                    <div className="text-center ">
                        <h1 className="text-5xl font-bold">Login now!</h1>

                    </div>
                    <div className="card shrink-0  min-w-96  shadow-2xl bg-base-100">
                        <form onSubmit={handleSubmit(onSubmit)} className="card-body">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="email" placeholder="email" className="input input-bordered" {...register("email", { required: true })} />
                                {errors.email && <span className="text-red-600 text-sm">This field is required</span>}
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input type="password" placeholder="password" className="input input-bordered" {...register("password", { required: true })} />
                                {errors.password && <span className="text-red-600 text-sm">{errors.Password.message}</span>}
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
                        <div className="divider divider-accent">Login With</div>
                        <div className="mx-5 mb-5 flex justify-between">
                            <div>
                               
                                <button onClick={() =>handleSocialLogin(googleLogin)} className="btn btn-accent"> <FaGoogle /> Google</button>
                            </div>
                            <button onClick={() =>handleSocialLogin(githubLogin)} className="btn btn-accent"><FaGithub /> Github</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;