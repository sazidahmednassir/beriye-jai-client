import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "./App.css";
import AdminRoute from "./authentication/AdminRoute";
import PrivateRoute from "./authentication/PrivateRoute";
import Navbar from "./components/Navbar";
import AddAdmin from "./pages/Dashboard/AddAdmin";
import AddPackage from "./pages/Dashboard/AddPackage";
import AddReview from "./pages/Dashboard/AddReview";
import Dashboard from "./pages/Dashboard/Dashboard";
import MyOrders from "./pages/Dashboard/MyOrders";
import Payment from "./pages/Dashboard/Payment";
import MyProfile from "./pages/Home/MyProfile";
import { privateRoutes } from "./routes/privateRoutes";
import { publicRoute } from "./routes/publicRoutes";
import Footer from "./Shared/Footer";
function App() {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <>
    
      <Navbar>
      <ToastContainer/>
        <Routes>
  
          {/* <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/services" element={<Services />} />
          <Route path="/login" element={<Login />} /> */}
          {publicRoute.map(({ path, Component }, index) => (
            <Route key={index} path={path} element={<Component />} />
          ))}

          <Route element={<PrivateRoute />}>
            {privateRoutes.map(({ path, Component }, index) => (
              <Route key={index} path={path} element={<Component />} />
            ))}
          </Route>
          {/* <Route element={<AdminRoute />}>
          <Route path='/dashboard' element={<Dashboard/>}>
            <Route path='add-admin' element={<AddAdmin/>} />
            
            <Route path='add-service' element={<AddService />}
            
             />
          </Route> */}

          <Route path="/dashboard" element={  <privateRoutes><Dashboard/></privateRoutes> } >
        <Route index element={<MyProfile></MyProfile>}></Route>
        {/* <Route path="addreview" element={<AddReview></AddReview>}></Route> */}
        {/* <Route path="updateprofile" element={<UpdateProfile></UpdateProfile>}></Route> */}
        <Route path="user" element={<MyProfile></MyProfile>}></Route>
        <Route path="add-review" element={<AddReview></AddReview>}></Route>
        <Route path="order" element={<MyOrders></MyOrders>}></Route>
        <Route path="add-package" element={<AdminRoute><AddPackage></AddPackage></AdminRoute>}></Route>
        
        <Route path="payment/:id" element={<Payment></Payment>}></Route>
        <Route path="add-admin" element={<AdminRoute><AddAdmin></AddAdmin></AdminRoute>}></Route>
        {/* <Route path="manageorder" element={<RequireAdmin><ManageOrders></ManageOrders></RequireAdmin>}></Route>
        <Route path="addproduct" element={<RequireAdmin><AddProduct></AddProduct></RequireAdmin>}></Route>
        <Route path="manageproduct" element={<RequireAdmin><ManageProducts></ManageProducts></RequireAdmin>}></Route> */}
        
      
        </Route>
        </Routes>
        <Footer></Footer>
      </Navbar>
   
     
    </>
  );
}

export default App;
