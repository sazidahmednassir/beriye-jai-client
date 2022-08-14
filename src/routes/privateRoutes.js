import Dashboard from "../pages/Dashboard/Dashboard";
import PurchasePage from "../pages/Home/PurchasePage/PurchasePage";

export const privateRoutes = [
  
  { path: "/dashboard/add-service", name: "DashBoard", Component: Dashboard },
  { path: "/purchase/:id", name: "PurchasePage", Component: PurchasePage },
 
];