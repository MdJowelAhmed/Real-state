
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'

const Service = ({ service }) => {
    const { estate_title, segment_name, description, price, image, status } = service
    return (
        <div>
            
                <div className="card bg-base-100 shadow-xl">
                    <figure><img className=' h-72' src={image} alt={segment_name} /></figure>
                    <div className="card-body">
                        <h2 className="card-title">{estate_title}</h2>
                        <p>If a dog chews shoes whose shoes does he choose?</p>
                        <div className="card-actions justify-end">
                           <Link to='/properties'> <button className="btn btn-primary">“View Property</button></Link>
                        </div>
                    </div>
                </div>
            

        </div>
    )
}

Service.propTypes = {}

export default Service