import { Link, NavLink } from "react-router-dom";
import { CgProfile } from "react-icons/cg";
import Aos from 'aos'
import 'aos/dist/aos.css'
import { useContext, useEffect } from 'react'
import { AuthContext } from "../AuthProvider/AuthProvider";


const Navbar = () => {
    const {logOut,user}=useContext(AuthContext)
    useEffect(() => {
        Aos.init()
    }, [])
    const navLinks = <>
        <li> <NavLink to='/'><button className="text-xl font-bold" >Home</button></NavLink> </li>
        <li> <NavLink to='/login'><button className="text-xl font-bold" >Login</button></NavLink> </li>
        <li> <NavLink to='/about'><button className="text-xl font-bold" >About Us</button></NavLink> </li>
    </>
    return (
        <div className="navbar bg-red-100 rounded-3xl" data-aos="zoom-out-down" data-aos-duration="2000" >
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        {/* <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg> */}
                    </div>
                    <ul tabIndex={0} className="menu menu-sm dropdown-content  ">
                        {
                            navLinks
                        }
                    </ul>
                </div>
                <a className="btn btn-ghost text-2xl">Hospitalities</a>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">

                    {
                        navLinks
                    }
                </ul>
            </div>
            <div className="navbar-end">
                {
                    user ? <div className="dropdown dropdown-hover">
                        <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                                <div className="w-10 rounded-full">
                                    <img src={user?.photoURL || <CgProfile /> } />
                                </div>
                            </label>
                            <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                                <li>
                                    <button className="btn btn-sm  btn-ghost">{user?.displayName||'user name not found'}</button>

                                </li>
                                <li>
                                    <button
                                        onClick={logout}
                                        className="btn btn-sm  btn-ghost">Logout</button>

                                </li>
                            </ul>
                    </div> : <Link to='/login'><button className="btn">Login</button></Link>
                }

               
            </div>
        </div>
    );
};

export default Navbar;