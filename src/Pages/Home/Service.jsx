
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'

const Service = ({ service }) => {
    const { estate_title, segment_name, description, price, image, status ,location} = service
    return (
        <div>
            
                <div className="card bg-base-100 shadow-xl">
                    <figure><img className=' h-72' src={image} alt={segment_name} /></figure>
                    <div className="card-body">
                        <h2 className="card-title">{estate_title}</h2>
                   <div className='flex justify-between my-4'>
                        <h2>Category: <span className='text-xl font-semibold mr-12'>{segment_name}</span> </h2>
                        <p>Status: <span className='text-xl font-semibold '>{status} </span></p>
                   </div>
                        <div className="flex ">
                          
                            <p className='text-green-800 text-xl'>{location}</p>
                            <Link to='/properties'> <button className="btn btn-primary">“View Property</button></Link>
                        </div>
                    </div>
                </div>
            

        </div>
    )
}

Service.propTypes = {}

export default Service