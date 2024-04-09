import { Helmet } from "react-helmet-async";
import Footer from "../../Components/ShareComponents/Footer";
import Navbar from "../../Components/ShareComponents/Navbar";
import { useLoaderData } from "react-router-dom";


const Properties = () => {
    const viewDetails=useLoaderData()
    const {id, estate_title, segment_name, description, price}=viewDetails
    console.log(viewDetails)
    return (
        <div>
             <Helmet>
                <title>Hospitalities / ViewProperties</title>
            </Helmet>
            <Navbar></Navbar>
          <div>
            <h2>{estate_title}</h2>
            View Properties
          </div>
            <Footer></Footer>
        </div>
    );
};

export default Properties;