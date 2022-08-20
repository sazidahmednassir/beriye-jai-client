import { useAuthState } from "react-firebase-hooks/auth";
import { NavLink } from "react-router-dom";
import { auth } from "../firebase.init";
import useAdmin from "../hooks/useAdmin";



const DashboardSidebar = ({ children }) => {
   
  const [user] = useAuthState(auth);
  const [admin] = useAdmin(user);
  console.log(admin)
  return (
    <div class='drawer drawer-mobile mt-16 bg-accent'>
      <input id='my-drawer-2' type='checkbox' class='drawer-toggle' />
      <div class='drawer-content flex flex-col items-center justify-center'>
        {/* <!-- Page content here --> */}
        {children}
      </div>
      <div class='drawer-side '>
        <label for='my-drawer-2' class='drawer-overlay'></label>
        <ul class='menu p-4 overflow-y-auto w-80 bg-base-100 text-base-content'>
        
          {/* <li>
            <NavLink to='/dashboard/add-service'>Add Service</NavLink>
          </li> */}
          <li>
            <NavLink to='/dashboard/user'>My Profile</NavLink>
          </li>
          <li>
            <NavLink to='/dashboard/order'>My Order</NavLink>
          </li>
          
          
          <li>
          
           {admin && <NavLink to='/dashboard/add-admin'>Add Admin</NavLink>} 
           {admin && <NavLink to='/dashboard/add-package'>Add Package</NavLink>} 
            
          </li>
        </ul>
      </div>
    </div>
  );
};

export default DashboardSidebar;