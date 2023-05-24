import Category from "../Category/Category";
import ChefService from "../ChefService/ChefService";
import Banner from "../banner/Banner";


const Home = () => {
    return (
        <div>
           <Banner></Banner>
           <Category></Category>
           <ChefService></ChefService>
        </div>
    );
};

export default Home;