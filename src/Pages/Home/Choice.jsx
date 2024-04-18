import 'animate.css';
const Choice = () => {
    return (
        <div data-aos="zoom-in"   data-aos-duration="3000">
            <h2 className="text-4xl text-orange-600 text-center animate__animated animate__bounce">Why Choice us?</h2>
            <p className="text-sm text-orange-600 text-center">Choice US Hospitalities" could refer to a variety of entities in the hospitality industry including hotels,,<br /> restaurants, or hospitality management companies operating in the United States. <br /> Here's a brief description of why one might choose them</p>

            <div className="grid md:grid-cols-5 grid-cols-1 my-10">
                <div className="col-span-3  space-y-6">
                    <p><span className="text-2xl font-medium text-amber-600 m-3">Quality Service:</span> Choice US Hospitalities may prioritize delivering top-notch service to their guests or customers, ensuring a pleasant and memorable experience.</p>
                    <p><span className="text-2xl font-medium text-amber-600 m-3">Diverse Options:</span> They might offer a range of accommodations, dining options, or services to cater to different preferences and needs, providing flexibility and choice to their clientele.</p>
                    <p><span className="text-2xl font-medium text-amber-600 m-3">Convenience and Accessibility:</span>These entities may be strategically located in prime areas, offering convenient access to attractions, transportation, or business hubs, enhancing the overall convenience for guests.</p>
                    <p><span className="text-2xl font-medium text-amber-600 m-3">Value for Money:</span> They might strive to offer competitive pricing or packages, providing good value for the quality of service and amenities provided.</p>
                    <p><span className="text-2xl font-medium text-amber-600 m-3">Reputation and Trustworthiness:</span>  Choice US Hospitalities might have built a strong reputation for reliability, safety, and trustworthiness, reassuring guests of a positive experience.</p>
                </div>
                <div className=" col-span-2">
                    <div>
                        <img  className="rounded-3xl p-5 h-[500px] w-full" src="https://images.unsplash.com/photo-1596701062351-8c2c14d1fdd0?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
                    </div>
                </div>
            </div>

        </div>
    );
};

export default Choice;