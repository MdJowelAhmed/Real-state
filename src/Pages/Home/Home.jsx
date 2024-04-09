import Footer from "../../Components/ShareComponents/Footer";
import Navbar from "../../Components/ShareComponents/Navbar";
import Banner from "./Banner";
import { useLoaderData } from "react-router-dom";
import Service from "./Service";

 

const Home = () => {
    const services=useLoaderData()
    console.log(services)
    return (
        <div>
            <Navbar></Navbar>
           <Banner></Banner>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {
                    services.map(service=> <Service key={service.id} service={service}></Service>)
                }
            </div>
           <Footer></Footer>
        </div>
    );
};

export default Home;