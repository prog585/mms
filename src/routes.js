// core components
import Dashboard from "views/admin/Dashboard.js";
import Assets from "views/admin/Assets.js";
import Icons from "views/admin/Icons.js";

import Login from "views/auth/Login.js";
import Profile from "views/admin/Profile.js";
import Register from "views/auth/Register.js";

import AccountCircle from "@material-ui/icons/AccountCircle";
import Grain from "@material-ui/icons/Grain";
import ContactSupportIcon from '@material-ui/icons/ContactSupport';
import Person from "@material-ui/icons/Person";
import Tv from "@material-ui/icons/Tv";
import VpnKey from "@material-ui/icons/VpnKey";

var routes = [
 
  {
    path: "/index",
    name: "Dashboard",
    icon: Tv,
    iconColor: "Primary",
    component: Dashboard,
    layout: "/admin",
  },
  {
    path: "/assets",
    name: "Assets",
    icon: Grain,
    iconColor: "Primary",
    component: Assets,
    layout: "/admin",
  },
  {
    path: "/icons",
    name: "Support",
    icon: ContactSupportIcon,
    iconColor: "Warning",
    component: Icons,
    layout: "/admin",
  },
  {
    path: "/user-profile",
    name: "User Profile",
    icon: Person,
    iconColor: "WarningLight",
    component: Profile,
    layout: "/admin",
  },
 
  {
    path: "/login",
    name: "Login",
    icon: VpnKey,
    iconColor: "Info",
    component: Login,
    layout: "/auth",
  },
  {
    path: "/register",
    name: "Register",
    icon: AccountCircle,
    iconColor: "ErrorLight",
    component: Register,
    layout: "/auth",
  },
  
];
export default routes;
