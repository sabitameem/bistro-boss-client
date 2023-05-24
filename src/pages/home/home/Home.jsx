import CallUs from "../CallUs/CallUs";
import Category from "../Category/Category";
import ChefRecommendation from "../ChefRecommendation/ChefRecommendation";
import ChefService from "../ChefService/ChefService";
import PopularMenu from "../PopularMenu/PopularMenu";
import Banner from "../banner/Banner";


const Home = () => {
    return (
        <div>
           <Banner></Banner>
           <Category></Category>
           <ChefService></ChefService>
           <PopularMenu></PopularMenu>
           <CallUs></CallUs>
           <ChefRecommendation></ChefRecommendation>
        </div>
    );
};

export default Home;