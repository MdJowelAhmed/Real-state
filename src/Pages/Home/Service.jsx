
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
import Aos from 'aos'
import 'aos/dist/aos.css'
import { useEffect } from 'react'


const Service = ({ service }) => {
    const { id, estate_title, segment_name, description, price, image, status, location } = service

    useEffect(() => {
        Aos.init()
    }, [])
    return (
        <div>

            <div className="card bg-base-100 shadow-xl " data-aos="flip-left"
                data-aos-easing="ease-out-cubic"
                data-aos-duration="2000">
                <figure><img className=' h-72' src={image} alt={segment_name} /></figure>
                <div className="card-body">
                    <h2 className="card-title">{estate_title}</h2>
                    <div className='flex justify-between my-4'>
                        <h2>Category: <span className='text-xl font-semibold mr-12'>{segment_name}</span> </h2>
                        <p>Status: <span className='text-xl font-semibold '>{status} </span></p>
                    </div>
                    <div className="flex ">

                        <p className='text-green-800 text-xl'>{location}</p>
                        <Link to={`/properties/${id}`} ><button className="btn btn-primary">ViewProperty</button></Link>
                    </div>
                </div>
            </div>


        </div>
    )
}

Service.propTypes = {
    service: PropTypes.object
}

export default Service