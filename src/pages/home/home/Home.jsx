import CallUs from "../CallUs/CallUs";
import Category from "../Category/Category";
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
        </div>
    );
};

export default Home;