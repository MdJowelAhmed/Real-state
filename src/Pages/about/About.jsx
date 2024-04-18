import { Helmet } from "react-helmet-async";
import Navbar from "../../Components/ShareComponents/Navbar";
import Footer from "../../Components/ShareComponents/Footer";



const About = () => {
    return (
        <div>
            <Helmet>
                <title>Hospitalities / AboutUs</title>
            </Helmet>
            <Navbar></Navbar>
            <div className="bg-amber-50 lg:p-7 rounded-3xl m-10">
                <div>
                    <h2 className="text-5xl text-center font-semibold my-5">About us</h2>
                    <h2 className="">Welcome to Hospitality, your ultimate destination for discovering the best hospitality services and accommodations around the world.</h2>
                </div>

                <div className="">
                    <h2 className="text-2xl text-center font-semibold mt-5 mb-4">Our Mission</h2>
                    <p>At Hospitality Haven, our mission is to connect travelers with exceptional hospitality experiences, ensuring memorable stays and unforgettable journeys. We strive to provide a platform where users can explore a diverse range of options, from luxury resorts to cozy bed and breakfasts, and everything in between.</p>
                </div>
                <div className="">
                    <h2 className="text-2xl text-center font-semibold mt-5 mb-4">Our Offer</h2>
                    <ul>
                        <li>
                            <p><span className="text-2xl"> Comprehensive Listings:</span>We curate an extensive database of hospitality establishments, offering detailed information to help users make informed decisions about their travel plans.</p>
                        </li>
                        <li>
                            <p><span className="text-2xl"> Personalized Recommendations:</span> Our advanced recommendation system tailors suggestions based on user preferences, ensuring each traveler finds the perfect match for their needs and preferences.</p>
                        </li>
                        <li>
                            <p><span className="text-2xl"> Exceptional Customer Service:</span>Our dedicated team is committed to providing excellent customer support, assisting users throughout their journey, from initial inquiries to post-stay feedback..</p>
                        </li>
                    </ul>

                </div>
                <div className="my-8">
                    <h2 className="text-2xl text-center font-semibold mt-5 mb-4"> Customers Review</h2>
                    <ul className="space-y-3">
                        <li>
                            Booking through Hospitality Haven was the best decision I made for my vacation. The accommodations exceeded my expectations, and the customer service was exceptional. I cant wait to book my next trip!
                            <h2 className="text-2xl text-green-900">Jane makkram, Italy</h2>
                        </li>
                        <li>
                            I travel frequently for work, and Hospitality Haven has become my go-to platform for finding comfortable and convenient accommodations. The website is easy to use, and I always receive prompt assistance whenever I have questions.
                            <h2 className="text-2xl text-green-900">Jane Smith, Canada</h2>
                        </li>
                        <li>
                            I stumbled upon Hospitality Haven while planning a last-minute getaway with my family. I was impressed by the variety of options available and the competitive prices. Our stay was fantastic, and I wouldnt hesitate to recommend this website to fellow travelers.
                            <h2 className="text-2xl text-green-900">David Lee, Singapore</h2>
                        </li>
                    </ul>
                </div>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default About;