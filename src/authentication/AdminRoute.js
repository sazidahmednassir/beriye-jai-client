import { signOut } from "firebase/auth";
import { useAuthState } from "react-firebase-hooks/auth";
import { Navigate, Outlet, useLocation } from "react-router-dom";
import { auth } from "../firebase.init";
import useAdmin from "../hooks/useAdmin";
import Loading from "../Shared/Loading";

const AdminRoute = ({children}) => {
  const location = useLocation();
  const [user, loading] = useAuthState(auth);
  
  const [admin, adminLoading] = useAdmin(user);
  console.log(admin)

  if(loading || adminLoading ){
    return <Loading></Loading>
}

  if (!user || !admin) {
    signOut(auth);
    return <Navigate to='/login' state={{ from: location }} replace />;
  }

  return children;
  
};

export default AdminRoute;