import {
  createBrowserRouter,
 
} from "react-router-dom";
import Main from "../layout/Main";
import Home from "../pages/home/home/Home";
import Menu from "../pages/menu/Menu/Menu";
import Order from "../pages/order/Oder/Order";
import Login from "../pages/login/Login";
import SignUp from "../pages/signUp/SignUp";
import DashBoard from "../layout/DashBoard";
import MyCart from "../pages/DashBoard/MyCart/MyCart";
import PrivateRoutes from "./PrivateRoutes";
import AllUsers from "../pages/DashBoard/AllUsers/AllUsers";
import AddItem from "../pages/DashBoard/AddItem/AddItem";
import AdminRoute from "./AdminRoute";
import ManageItems from "../pages/DashBoard/manageItems/ManageItems";
import Payment from "../pages/DashBoard/payment/Payment";
import UserHome from "../pages/DashBoard/UserHome/UserHome";
import AdminHome from "../pages/DashBoard/AdminHome/AdminHome";
import ErrorPage from "../pages/ErrorPage/ErrorPage";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    errorElement:<ErrorPage></ErrorPage>,
    children :[
      {
          path:'/',
          element :<Home></Home>
      },
      {
          path: 'menu',
          element:<Menu></Menu>
      },
      {
          path: 'order/:category',
          element: <Order></Order>
      },
      {
          path:'login',
          element:<Login></Login>
      },
      {
          path:'signUp',
          element:<SignUp></SignUp>
      },
    ],
  },
  {
    path: 'dashboard',
    element: <PrivateRoutes><DashBoard></DashBoard></PrivateRoutes>,
    errorElement: <ErrorPage></ErrorPage>,
    children:[
      {
        path: 'userHome',
        element:<UserHome></UserHome>
      },
      {
        path: 'myCart',
        element: <MyCart></MyCart>
      },
      {
        path:'payment',
        element: <Payment></Payment>
      },
      {
        path:'adminHome',
        element: <AdminRoute><AdminHome></AdminHome></AdminRoute>
      },
      {
        path: 'allUsers',
        element: <AdminRoute><AllUsers></AllUsers></AdminRoute>
      },
      {
        path: 'addItem',
        element:<AdminRoute><AddItem></AddItem> </AdminRoute>     
      },
      {
        path: 'manageItems',
        element: <AdminRoute><ManageItems></ManageItems></AdminRoute>
      },
    ]
  }
]);