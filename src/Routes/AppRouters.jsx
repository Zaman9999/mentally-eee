import React from 'react'
import {
  createBrowserRouter,
  Outlet,
  RouterProvider,
  ScrollRestoration
} from "react-router-dom";
import Home from '../Pages/Home';
import Corporate from '../Pages/Corporate'
import Otp1 from '../Pages/Otp1'
import Signup1 from '../Pages/Signup1';
import Signin1 from '../Pages/Signin1';
import School from '../Pages/School'
import About1 from '../Pages/About1';
import Doctors1 from '../Pages/Doctors1';
import Faq1 from '../Pages/Faq1';
import Contact from '../Pages/Contact1';
 const Layout = ()=>{
  return (
    <div>
    
      <Outlet/>
          
    </div>
  )
 }
 const router = createBrowserRouter([
  {
   path:"/",
   element:<Layout/>,
   children:[
    {
    path:"/",
    element:<Home/>,
    },
  {
  path:"/collab/corporate",
  element:<Corporate/>,
},
{
  path:"/collab/school",
  element:<School/>,
},
{
  path:"/home",
  element:<Home/>,
},
{
  path:"/about",
  element:<About1/>
},
{
  path:"/doctor",
  element:<Doctors1/>
},
{
  path:"/faq",
  element:<Faq1/>
},
{
  path:"/contact",
  element:<Contact/>
}
    
   ]
  },
  {
    path:"/signup",
    element:<Signup1/>
  },
  {
  path:"/signin",
  element:<Signin1/>
  },
  {
  path:"/otp",
  element:<Otp1/>
  },
  
])

function AppRouters() {
  return (
   <RouterProvider router={router}/>
  )
}

export default AppRouters;