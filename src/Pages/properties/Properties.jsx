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
    <div>
      <Helmet>
        <title>Hospitalities / ViewProperties</title>
      </Helmet>
      <Navbar></Navbar>
      <div className="my-10 w-[1000px] mx-auto">
        <div className="flex justify-center">
          <img src={image} alt="" className="h-[450px] w-[500px] lg:w-[1000px] rounded-3xl text-center" />
        </div>
        <div className="flex justify-between mt-5">
          <h3 className="text-4xl font-bold">{estate_title} </h3>
          <div className="flex gap-2 items-center">
            <FaLocationDot />
            <h3 className="text-xl font-bold"> {location} </h3>
          </div>
        </div>
        <div>
          <p className="text-xl font-semibold text">{price} </p>
        </div>
        <div className="flex items-center justify-between">
          <div>
            <div className="flex items-center">
              <p className="text-2xl font-semibold">Facilities:</p>
              <div className='flex flex-wrap gap-2  text-blue-600  '>
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
            <p className="text-2xl font-bold text-green-600">{area} </p>
          </div>
        </div>
      </div>
      <Footer></Footer>
    </div>
  );
};

export default Properties;