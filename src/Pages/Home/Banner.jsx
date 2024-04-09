

const Banner = () => {
    return (
        <div className="grid grid-cols-1 md:grid-cols-5 bg-amber-50">
            <div className="col-span-3 carousel h-72 lg:h-[470px] w-full bg-amber-50 py-5">
                <div id="slide1" className="carousel-item relative w-full ">
                    <img src="https://i.ibb.co/6Ynsp1H/sonevajani-1880.webp" className="w-full rounded-full" />
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">

                        <a href="#slide4" className="btn btn-circle">❮</a>

                        <a href="#slide2" className="btn btn-circle">❯</a>

                    </div>
                </div>
                <div id="slide2" className="carousel-item relative w-full">
                    <img src="https://i.ibb.co/qds4RpT/35122-940x-erosantorini-img-2663-3000.webp" className="w-full rounded-full" />
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide1" className="btn btn-circle">❮</a>
                        <a href="#slide3" className="btn btn-circle">❯</a>
                    </div>
                </div>
                <div id="slide3" className="carousel-item relative w-full">
                    <img src="https://i.ibb.co/cX4yFMz/35126-940x-rs2883-amanemu-suite-interior.webp" className="w-full rounded-full" />
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide2" className="btn btn-circle">❮</a>
                        <a href="#slide4" className="btn btn-circle">❯</a>
                    </div>
                </div>
                <div id="slide4" className="carousel-item relative w-full">
                    <img src="https://i.ibb.co/x8rwrxY/35125-940x-nakar-hotel-palma-de-mallorcac326be934e98.webp" className="w-full rounded-full" />
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide3" className="btn btn-circle">❮</a>
                        <a href="#slide1" className="btn btn-circle">❯</a>
                    </div>
                </div>
            </div>
            <div className="col-span-2 text-center mt-20 ">
                <h2 className="text-4xl font-bold text-green-600 mb-4">Celebrate Where Every  <br /> Guest Feels at Home</h2>
                <p>Welcome to our hospitality haven! Discover exceptional, <br /> exquisite dining experiences, and personalized service <br />  tailored to make your stay unforgettable.</p>
                <button className="btn btn-secondary mt-9">Explore More</button>
            </div>
        </div>
    );
};

export default Banner;