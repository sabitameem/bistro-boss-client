import { Link } from "react-router-dom";
import MenuItems from "../../Shared/MenuItems/MenuItems";
import Cover from "../../Shared/cover/Cover";


const MenuCategory = ({items,title,subtitle,img}) => {
    return (
       <div className="pt-8">
       {title &&  <Cover img={img} title={title} subtitle={subtitle}></Cover>}
         <div className="grid md:grid-cols-2 gap-10 my-16 mx-3 lg:mx-0">
                {items.map(item=>
                    <MenuItems
                    key={item._id}
                    item={item}
                    ></MenuItems>
                    )}
            </div>
            <div className="text-center">
               <Link to={`/order/${title}`}>
               <button className="btn btn-outline border-0 border-b-4 mt-8 mb-3 ">ORDER YOUR FAVOURITE FOOD</button>
               </Link>
            </div>
       </div>
    );
};

export default MenuCategory;