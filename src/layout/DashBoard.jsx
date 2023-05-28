import {  NavLink, Outlet } from "react-router-dom";
import {
  FaCalendarAlt,
  FaHome,
  FaShoppingCart,
  FaWallet,
} from "react-icons/fa";
import useCart from "../hooks/UseCart";

const DashBoard = () => {

  const [cart]=useCart()

  return (
    <div className="drawer drawer-mobile">
      <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content flex flex-col items-center justify-center">
        {/* <!-- Page content here --> */}
        <Outlet></Outlet>
        <label
          htmlFor="my-drawer-2"
          className="btn btn-primary drawer-button lg:hidden"
        >
          Open drawer
        </label>
      </div>
      <div className="drawer-side">
        <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
        <ul className="menu p-4 w-80 bg-custom-color">
          {/* <!-- Sidebar content here --> */}
          <li>
            <NavLink to='UserHome'>
              <FaHome></FaHome> User Home
            </NavLink>
          </li>
          <li>
            <NavLink to='history'>
              <FaWallet></FaWallet> Payment History
            </NavLink>
          </li>
          <li>
            <NavLink to='reservations'>
              <FaCalendarAlt></FaCalendarAlt> Reservations
            </NavLink>
          </li>
          <li>
            <NavLink to='myCart'>
              <FaShoppingCart></FaShoppingCart> My Cart
              <span className="badge badge-secondary">+{cart?.length || 0}</span>
            </NavLink>
          </li>
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
