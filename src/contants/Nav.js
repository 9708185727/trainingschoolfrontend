import {
  HOME_ROUTE,
  LOGIN_ROUTE,
  REGISTER_ROUTE,
  OPP_ROUTE,
  SERVICE_ROUTE,
  SUB_ROUTE,
  CONTACT_ROUTE,
  ABOUT_ROUTE,
} from "./ListUrl";
const NavList = [
  {
    auth:true,
    label: "Home",
    route: HOME_ROUTE,
  },
  {
    auth:true,
    label: "Opportunities",
    route: OPP_ROUTE,
  },
  {  auth:true,
    label: "Submission",
    route: SUB_ROUTE,
  },
  
  {
    auth:false,
    label: "Login",
    route: LOGIN_ROUTE,
  },
  {
    auth:false,
    label: "Register",
    route: REGISTER_ROUTE,
  },
  {  auth:false,
    label: "About",
    route: ABOUT_ROUTE,
  },
  {  auth:false,
    label: "Contact",
    route: CONTACT_ROUTE,
  },
  {  auth:false,
    label: "Service",
    route: SERVICE_ROUTE,
  },
];
export default NavList;
