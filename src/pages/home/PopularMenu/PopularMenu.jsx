
import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import MenuItems from "../../Shared/MenuItems/MenuItems";
import useMenu from "../../../hooks/UseMenu";


const PopularMenu = () => {
   const [menu]=useMenu()
   const popular =menu.filter(item => item.category === 'popular')


    // const [menu,setMenu]= useState([]);

    // useEffect(()=>{
    //     fetch('menu.json')
    //     .then(res=>res.json())
    //     .then(data=> {
    //         const popularItems= data.filter(item=> item.category=== 'popular')
    //         setMenu(popularItems)
    //     })
    // },[])


    return (
        <section className="mb-12">
            <SectionTitle
            subHeading={'Check it out'}
            heading={'FROM OUR MENU'}
            ></SectionTitle>
            <div className="grid md:grid-cols-2 gap-10 mx-3 lg:mx-0">
                {popular.map(item=>
                    <MenuItems
                    key={item._id}
                    item={item}
                    ></MenuItems>
                    )}
            </div>
            <div className="text-center">
                <button className="btn btn-outline border-0 border-b-4 mt-8 mb-3 ">View Full Menu</button>
            </div>

        </section>
            
        
    );
};

export default PopularMenu;