import { Helmet } from "react-helmet-async";
import CallUs from "../CallUs/CallUs";
import Category from "../Category/Category";
import ChefRecommendation from "../ChefRecommendation/ChefRecommendation";
import ChefService from "../ChefService/ChefService";
import PopularMenu from "../PopularMenu/PopularMenu";
import Testimonial from "../Testimonial/Testimonial";
import Banner from "../banner/Banner";
import Featured from "../featured/Featured";


const Home = () => {
    return (
        <div>
            <Helmet>
                <title>Bistro Boss | Home</title>
            </Helmet>
           <Banner></Banner>
           <Category></Category>
           <ChefService></ChefService>
           <PopularMenu></PopularMenu>
           <CallUs></CallUs>
           <ChefRecommendation></ChefRecommendation>
           <Featured></Featured>
           <Testimonial></Testimonial>
        </div>
    );
};

export default Home;