import Footer from "../../Components/ShareComponents/Footer";
import Navbar from "../../Components/ShareComponents/Navbar";
import Banner from "./Banner";
import { useLoaderData } from "react-router-dom";
import Service from "./Service";
import { Helmet } from "react-helmet-async";
import Choice from "./Choice";



const Home = () => {
    const services = useLoaderData()
    console.log(services)
    return (
        <div className="my-12 space-y-12">
            <Helmet>
                <title>Hospitalities / Home</title>
            </Helmet>
            <Navbar></Navbar>
            <Banner></Banner>
            <div className="my-16">
                <div className="text-center space-y-5 mb-10">
                    <h2 className="text-green-400 text-4xl font-bold">Our Service </h2>
                    <p className="text-green-600">Hospitality refers to the friendly and generous reception and entertainment  <br /> of guests, visitors, or strangers. It encompasses  various industries  <br /> including hotels, restaurants</p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">

                    {
                        services.map(service => <Service key={service.id} service={service}></Service>)
                    }
                </div>
            </div>
            <Choice></Choice>
            <Footer></Footer>
        </div>
    );
};

export default Home;