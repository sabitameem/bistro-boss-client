import { useContext } from "react";
import { AuthContext } from "../../provider/AuthProvider";
import Swal from "sweetalert2";
import { useLocation, useNavigate } from "react-router-dom";
import useCart from "../../hooks/UseCart";


const FoodCard = ({item}) => {
    const {name,recipe,image,price,_id}= item;
    const navigate =useNavigate()
    const location=useLocation()
    const [, refetch]=useCart()  
    const {user}=useContext(AuthContext)
    
    const handleAddToCart =(item)=>{
         console.log(item)
         if(user && user.email){
          const cartItem ={menuItemId :_id, name,image, price, email:user?.email}
          fetch('https://bistro-boss-server-indol.vercel.app/carts',{
            method: 'POST',
            headers:{
              'content-type': 'application/json',
            },
            body:JSON.stringify(cartItem)
          })
          .then(res=> res.json())
          .then(data =>{
            if(data.insertedId){
              refetch()
              Swal.fire({
                position: 'top-end',
                icon: 'success',
                title: 'Food added on the cart',
                showConfirmButton: false,
                timer: 1500
              })
            }
          })
         }
         else{
          Swal.fire({
            title: 'Please login first to order the food',
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Login now'
          }).then((result) => {
            if (result.isConfirmed) {
              navigate('/login', {state : {from:location}})
            }
          })
         }
    }

    return (
        <div className="card w-96 bg-base-100 shadow-xl">
        <figure><img src={image} alt="Shoes" /></figure>
        <p className="absolute bg-slate-800 text-white right-0 mr-4 mt-4 px-4 rounded-lg">{price}</p>
        <div className="card-body text-center">
          <h2 className="font-semibold uppercase text-gray-900">{name}</h2>
          <p>{recipe}</p>
          <div className="mx-auto">
            <button onClick={()=> handleAddToCart(item)} className="btn btn-outline border-0 border-b-4 mt-8 mb-3 text-yellow-500 hover:text-yellow-400 hover:border-b-yellow-500">ADD TO CART</button>
          </div>
        </div>
      </div>
    );
};

export default FoodCard;