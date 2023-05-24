import {
    createBrowserRouter,
   
  } from "react-router-dom";
import Main from "../layout/Main";
import Home from "../pages/home/home/Home";
import Menu from "../pages/menu/Menu/Menu";

 export const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      children :[
        {
            path:'/',
            element :<Home></Home>
        },
        {
            path: 'menu',
            element:<Menu></Menu>
        },
      ]
    },
  ]);