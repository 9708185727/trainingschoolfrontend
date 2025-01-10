import React from "react";
import {
  RouterProvider,
  createRoutesFromElements,
  Route,
  createBrowserRouter,
} from "react-router-dom";
import {
  HOME_ROUTE,
  LOGIN_ROUTE,
  REGISTER_ROUTE,
  OPP_ROUTE,
  SERVICE_ROUTE,
  SUB_ROUTE,
  CONTACT_ROUTE,
  ABOUT_ROUTE,
} from "./contants/ListUrl";
import Home from "./pages/Home.jsx";


import Login from "./pages/authpage/login.jsx";
import Register from "./pages/authpage/Register.jsx";
import About from "./pages/About.jsx";
import Service from "./pages/Service.jsx";
import Contact from "./pages/Contact.jsx";
import MainLayout from "./layouts/MainLayout.jsx";
import UnAuthLayout from "./layouts/OutAuthLayout.jsx";
import AuthLayout from "./layouts/AuthLayout.jsx";

import OppDetailView from "./pages/opportunity/OppDetailView.jsx";
import OppList from "./pages/opportunity/OppList.jsx";
import AddOpp from "./pages/opportunity/AddOpp.jsx";
import EditOpp from "./pages/opportunity/EditOpp.jsx";
import SubDetailView from "./pages/submission/SubDetailView.jsx";
import SubList from "./pages/submission/SubList.jsx";
import AddSub from "./pages/submission/AddSub.jsx";
import EditSub from "./pages/submission/EditSub.jsx";

const Routes = () => {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route element={<MainLayout />}>
        <Route element={<AuthLayout />}>
          <Route path={HOME_ROUTE} element={<Home />} />
    
          <Route path={SUB_ROUTE}>
            <Route index element={<SubList />} />
            <Route path={":id"} element={<SubDetailView />} />
           
            <Route path={"edit/:id"} element={<EditSub/>} />
          </Route>
          <Route path={OPP_ROUTE}>
            <Route index element={<OppList />} />
            <Route path={"add/submission/:id"} element={<AddSub/>} />
            <Route path={":id"} element={<OppDetailView />} />
            <Route path={"add"} element={<AddOpp/>} />
            <Route path={"edit/:id"} element={<EditOpp/>} />
          </Route>
         
        </Route>
        
        <Route path={ABOUT_ROUTE} element={<About />} />

        <Route path={SERVICE_ROUTE} element={<Service />} />
        <Route path={CONTACT_ROUTE} element={<Contact />} />

        <Route element={<UnAuthLayout />}>
          <Route path={LOGIN_ROUTE} element={<Login />} />
          <Route path={REGISTER_ROUTE} element={<Register />} />
        </Route>
      </Route>
    )
  );
  return <RouterProvider router={router}></RouterProvider>;
};

export default Routes;
