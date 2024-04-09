import { Helmet } from "react-helmet-async";
import Navbar from "../../Components/ShareComponents/Navbar";

 

const About = () => {
    return (
        <div>
             <Helmet>
                <title>Hospitalities / AboutUs</title>
            </Helmet>
            <Navbar></Navbar>
            this is about page
        </div>
    );
};

export default About;