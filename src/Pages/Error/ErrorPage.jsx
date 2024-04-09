import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";


const ErrorPage = () => {
    return (
        <div>
            <Helmet>
                <title>Hospitalities / ErrorPage</title>
            </Helmet>
            <img className="mt-16 mb-6 mx-auto" src="https://t3.ftcdn.net/jpg/04/77/50/36/360_F_477503654_pH4oa2ZAI1wwsaYTgLl3f580ABWqh84C.jpg" alt="" />

            <div className="text-center">
                <Link to='/' > Back to <button className="btn text-2xl font-medium"> Home</button> </Link>
            </div>
        </div>
    );
};

export default ErrorPage;