import { Link } from "react-router-dom";
import Navbar from "../../Components/ShareComponents/Navbar";
import { useForm } from "react-hook-form"


const Register = () => {
    const {
        register,
        handleSubmit,
        watch,
        formState: { errors },
      } = useForm()

      const onSubmit=data=>{
        console.log(data)
      }
    return (
        <div>
            <Navbar></Navbar>
            <div className="hero min-h-screen bg-base-200">
                <div className="hero-content flex-col">
                    <div className="text-center ">
                        <h1 className="text-5xl font-bold">Register First!</h1>

                    </div>
                    <div className="card shrink-0  min-w-96  shadow-2xl bg-base-100">
                        <form onSubmit={handleSubmit(onSubmit)} className="card-body">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Your Name</span>
                                </label>
                                <input type="text" name="Name" placeholder="Your Name" className="input input-bordered" {...register("Name", { required: true })}/>
                                {errors.Name && <span className="text-red-600 text-sm">This field is required</span>}
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="email" name="Email" placeholder="Your Email" className="input input-bordered" {...register("Email", { required: true })} />
                                {errors.Email && <span className="text-red-600 text-sm">This field is required</span>}
                            </div>
                          
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Image URL</span>
                                </label>
                                <input type="text" name="image" placeholder="Image URL" className="input input-bordered" />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input type="password" name="Password" placeholder="password" className="input input-bordered" {...register("Password", { required: true })} />
                                {errors.Password && <span className="text-red-600 text-sm">This field is required</span>}
                               
                            </div>
                            <div className="form-control mt-6">
                                <button className="btn btn-primary">Register</button>
                            </div>
                        </form>
                        <div className="text-center mb-5">
                            <p>Have you account? please <span><Link to='/login' className="text-blue-600 font-semibold">Login</Link></span></p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Register;