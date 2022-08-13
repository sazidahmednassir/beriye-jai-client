import About from "../pages/About";
import Contact from "../pages/Contact";
import Home from "../pages/Home/Home";
import Login from "../pages/Login";
import { default as Package, default as Services } from "../pages/Package";
import SignUp from "../pages/SignUp";

export const publicRoute = [
  { path: "/", name: "Home", Component: Home },
  { path: "/about", name: "About", Component: About },
  { path: "/services", name: "Services", Component: Services },
  { path: "/contact", name: "Contact", Component: Contact },
  { path: "/login", name: "Login", Component: Login },
  { path: "/signup", name: "SignUp", Component: SignUp },
  {path: "/package", name: "Package", Component: Package }
];