import { NavLink } from "react-router-dom";
import { CgProfile } from "react-icons/cg";
import Aos from 'aos'
import 'aos/dist/aos.css'
import { useEffect } from 'react'


const Navbar = () => {
    useEffect(() => {
        Aos.init()
    }, [])
    const navLinks = <>
        <li> <NavLink to='/'><button className="text-xl font-bold" >Home</button></NavLink> </li>
        <li> <NavLink to='/login'><button className="text-xl font-bold" >Login</button></NavLink> </li>
        <li> <NavLink to='/about'><button className="text-xl font-bold" >About Us</button></NavLink> </li>
    </>
    return (
        <div className="navbar bg-red-100 rounded-3xl" data-aos="zoom-out-down"  data-aos-duration="2000" >
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
                <p className="text-5xl mr-3"> <CgProfile ></CgProfile></p>
                <a className="btn">Button</a>
            </div>
        </div>
    );
};

export default Navbar;