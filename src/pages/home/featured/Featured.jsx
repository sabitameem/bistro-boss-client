import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import featuredImg from '../../../assets/home/featured.jpg'
import './Featured.css'


const Featured = () => {
    return (
        <div className="featured-item bg-fixed text-white pt-5 my-20">
            <SectionTitle subHeading={'Check it out'} heading={'FROM OUR MENU'}></SectionTitle>
            <div className="md:flex justify-center bg-slate-800 bg-opacity-30  px-6 items-center md:pt-12 md:pb-20 md:px-36">
                <div>
                    <img src={featuredImg} alt="" />
                </div>
                <div className="md:ml-10">
                    <p>Jun 28, 2023</p>
                    <p className="uppercase">WHERE CAN I GET SOME?</p>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Error voluptate facere, deserunt dolores maiores quod nobis quas quasi. Eaque repellat recusandae ad laudantium tempore consequatur consequuntur omnis ullam maxime tenetur.</p>
                    <button className=" lg:mt-2 mt-0 mb-4 px-2 py-1 lg:py-2 text-white  rounded-md border-b-2 border-gray-100 hover:bg-white hover:text-black uppercase">add to cart</button>
                </div>
            </div>
        </div>
    );
};

export default Featured;