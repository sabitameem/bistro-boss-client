

const FoodCard = ({item}) => {
    const {name,recipe,image,price}= item;
   

    return (
        <div className="card w-96 bg-base-100 shadow-xl">
        <figure><img src={image} alt="Shoes" /></figure>
        <p className="absolute bg-slate-800 text-white right-0 mr-4 mt-4 px-4 rounded-lg">{price}</p>
        <div className="card-body text-center">
          <h2 className="font-semibold uppercase text-gray-900">{name}</h2>
          <p>{recipe}</p>
          <div className="mx-auto">
            <button className="btn btn-outline border-0 border-b-4 mt-8 mb-3 text-yellow-500 hover:text-yellow-400 hover:border-b-yellow-500">ADD TO CART</button>
          </div>
        </div>
      </div>
    );
};

export default FoodCard;