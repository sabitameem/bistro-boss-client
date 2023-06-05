import {  NavLink, Outlet } from "react-router-dom";
import {
  FaBook,
  FaCalendarAlt,
  FaHome,
  FaShoppingCart,
  FaUsers,
  FaUtensils,
  FaWallet,
} from "react-icons/fa";
import useCart from "../hooks/UseCart";
import useAdmin from "../hooks/useAdmin";

const DashBoard = () => {

  const [cart]=useCart()

  // TODO: load data from the server to have dynamic isAdmin based on Data
  const [isAdmin] = useAdmin()

  return (
    <div className="drawer drawer-mobile">
      <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content">
        {/* <!-- Page content here --> */}
        <Outlet></Outlet>
        <label
          htmlFor="my-drawer-2"
          className="btn border-0 btn-sm ml-28 md:ml-[370px] bg-custom-color text-white drawer-button lg:hidden"
        >
          Open drawer
        </label>
      </div>
      <div className="drawer-side">
        <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
        <ul className="menu p-4 w-80 bg-custom-color">
          {/* <!-- Sidebar content here --> */}
          {
                        isAdmin ? <>
                            <li><NavLink to="/dashboard/adminHome"><FaHome></FaHome> Admin Home</NavLink></li>
                            <li><NavLink to="/dashboard/addItem"> <FaUtensils></FaUtensils> Add an Item</NavLink></li>
                            <li><NavLink to="/dashboard/manageItems"><FaWallet></FaWallet> Manage Items</NavLink></li>
                            <li><NavLink to="/"><FaBook></FaBook> Manage Bookings(not implemented)</NavLink></li>
                            <li><NavLink to="/dashboard/allUsers"><FaUsers></FaUsers> All Users</NavLink></li>
                            
                        </> : <>
                            <li><NavLink to="/dashboard/userHome"><FaHome></FaHome> User Home</NavLink></li>
                            <li><NavLink to="/dashboard/reservations"><FaCalendarAlt></FaCalendarAlt>Reservations</NavLink></li>
                            <li><NavLink to="/"><FaWallet></FaWallet> Payment History</NavLink></li>
                            <li>
                                <NavLink to="/dashboard/mycart"><FaShoppingCart></FaShoppingCart> My Cart
                                    <span className="badge inl badge-secondary">+{cart?.length || 0}</span>
                                </NavLink>

                            </li>
                        </>
                    }


          <div className="divider"></div>
          <li>
            <NavLink to="/"><FaHome></FaHome> Home </NavLink>
          </li>
          <li>
            <NavLink to="/menu">Our Menu</NavLink>
          </li>

          <li>
            <NavLink to="/order/salad">Order Food</NavLink>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default DashBoard;
