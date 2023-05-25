import { Helmet } from "react-helmet-async";
import Cover from "../../Shared/cover/Cover";
import menuImg from '../../../assets/menu/banner3.jpg'
import dessertImg from '../../../assets/menu/dessert-bg.jpeg'
import pizzaImg from '../../../assets/menu/pizza-bg.jpg'
import soupImg from '../../../assets/menu/soup-bg.jpg';
import saladImg from '../../../assets/menu/salad-bg.jpg';
import useMenu from "../../../hooks/UseMenu";
import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import MenuCategory from "../MenuCategory/MenuCategory";
import MenuItems from "../../Shared/MenuItems/MenuItems";
import { Link } from "react-router-dom";


const Menu = () => {
  
    const [menu]=useMenu();
    const offered =menu.filter(item => item.category === 'offered')
    const desserts =menu.filter(item => item.category === 'dessert')
    const soup =menu.filter(item => item.category === 'soup')
    const salad =menu.filter(item => item.category === 'salad')
    const pizza =menu.filter(item => item.category === 'pizza')


    return (
        <div>
            <Helmet>
                <title>Bistro Boss | Menu</title>
            </Helmet>
            <Cover img={menuImg} title='Our menu' subtitle={'Would you like to try a dish?'}></Cover>
            <SectionTitle subHeading="Don't miss" heading="today's offer"></SectionTitle>
            {/* offered */}
            <div className="pt-8">
    
         <div className="grid md:grid-cols-2 gap-10 my-16 mx-3 lg:mx-0">
                {offered.map(item=>
                    <MenuItems
                    key={item._id}
                    item={item}
                    ></MenuItems>
                    )}
            </div>
            <div className="text-center">
               <Link to='/order/salad'>
               <button className="btn btn-outline border-0 border-b-4 mt-8 mb-3 ">ORDER YOUR FAVOURITE FOOD</button>
               </Link>
            </div>
       </div>
       
            {/* dessert */}
            <MenuCategory
            items={desserts}
            title={'dessert'}
            subtitle={'Wanna try some desserts?'}
            img={dessertImg}
            ></MenuCategory>
            {/* pizza */}
            <MenuCategory
            items={pizza}
            title={'pizza'}
            subtitle={'Take a bite....'}
            img={pizzaImg}
            ></MenuCategory>
            {/* salads */}
            <MenuCategory
            items={salad}
            title={'salad'}
            subtitle={'Want to try something healthy?'}
            img={saladImg}
            ></MenuCategory>
            {/* soup  */}
            <MenuCategory
            items={soup}
            title={'soup'}
            subtitle={'Want to try something different?'}
            img={soupImg}
            ></MenuCategory>
            
        </div>
    );
};

export default Menu;