

const MenuItems = ({item}) => {
    const {name,recipe,image,price}= item;

    return (
        <div className="flex space-x-2">
            <img style={{borderRadius: '0 200px 200px 270px'}} className="w-[100px]" src={image} alt="" />
            <div>
                <h3 className="uppercase">{name} ----------------------</h3>
                <p>{recipe}</p>
            </div>
            <p className="text-yellow-500">${price}</p>
        </div>
    );
};

export default MenuItems;