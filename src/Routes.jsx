import React from 'react'
import {
    RouterProvider,
    createRoutesFromElements,
    Route,
    createBrowserRouter,
  } from "react-router-dom";
import  {HOME_ROUTE,LOGIN_ROUTE,REGISTER_ROUTE,OPP_ROUTE,SERVICE_ROUTE,SUB_ROUTE,CONTACT_ROUTE,ABOUT_ROUTE} from './contants/ListUrl'
import Home from './pages/Home.jsx'
import Submissions from './pages/submission/Submissions.jsx'
import Opportunities from './pages/opportunity/Opportunities.jsx'
import Login from './pages/authpage/login.jsx'
import Register from './pages/authpage/Register.jsx'
import About from './pages/About.jsx'
import Service from './pages/Service.jsx'
import Contact from './pages/Contact.jsx'
import MainLayout from './layouts/MainLayout.jsx';

const Routes = () => {
    const router=createBrowserRouter(createRoutesFromElements(
        <Route element={<MainLayout/>}>
            <Route path={HOME_ROUTE} element={<Home/>}/>
            <Route path={SUB_ROUTE} element={<Submissions/>}/>
            <Route path={OPP_ROUTE} element={<Opportunities/>}/>
            <Route path={LOGIN_ROUTE} element={<Login/>}/>
            <Route path={REGISTER_ROUTE} element={<Register/>}/>
            <Route path={ABOUT_ROUTE} element={<About/>}/>
           
            <Route path={SERVICE_ROUTE} element={<Service/>}/>
            <Route path={CONTACT_ROUTE} element={<Contact/>}/>

        </Route>
    ));
    return <RouterProvider router={router}></RouterProvider>;
}

export default Routes