import { Helmet } from "react-helmet-async";
import Footer from "../../Components/ShareComponents/Footer";
import Navbar from "../../Components/ShareComponents/Navbar";
import { useLoaderData } from "react-router-dom";
import { useParams } from "react-router-dom";
import { FaLocationDot } from "react-icons/fa6";


const Properties = () => {

  const viewDetails = useLoaderData()
  const { id } = useParams()
  const view = viewDetails.find(view => view.id == id)
  const { estate_title, segment_name, description, price, image, status, area, location, facilities } = view
  // console.log(viewDetails)
  return (
    <div className="w-[400px] md:w-[1000px] mx-auto">
      <Helmet>
        <title>Hospitalities / ViewProperties</title>
      </Helmet>
      <Navbar></Navbar>
      <div className="my-10 ">
        <div className="flex justify-center">
          <img src={image} alt="" className="h-[450px] w-[400px] lg:w-[1000px] rounded-3xl text-center" />
        </div>
        <div className="flex justify-between mt-5">
          <h3 className="text-xl md:text-4xl font-bold">{estate_title} </h3>
          <div className="flex gap-2 items-center">
            <FaLocationDot />
            <h3 className="text-xl font-bold"> {location} </h3>
          </div>
        </div>
        <div className="flex justify-around"> 
          <p className="text-xl font-semibold text">{segment_name} </p>
          <p className="text-xl font-semibold text">{status} </p>
          <p className="text-xl font-semibold text">price: <span className="text-2xl text-green-700 font-bold">{price} </span> </p>
        </div>
        <div className="flex items-center justify-between">
          <div>
            <div className="flex items-center">
              <p className="text-2xl font-semibold">Facilities:</p>
              <div className='flex  gap-2  text-blue-600  '>
                {facilities &&
                  facilities.map(facilitie => (
                    <a
                      key={facilitie}
                      rel='noopener noreferrer'
                      href='#'
                      className='px-3 py-1 rounded-sm hover:underline '
                    >
                      {facilitie}
                    </a>
                  ))}
              </div>
            </div>
          </div>
          <div>
          <p className="text-xl font-semibold text">Area: <span className="text-2xl text-green-700 font-bold">{area} </span> </p>
          </div>
        </div>
        <div>
        <p className="text-2xl font-semibold text">Description: <span className="text-xl text-green-500 font-medium">{description} </span> </p>
        </div>
      </div>
      <Footer></Footer>
    </div>
  );
};

export default Properties;