import PurchasePage from "../pages/Home/PurchasePage/PurchasePage";
import CustomPackage from "../pages/CustomPackage"
import AddReview from "../pages/Dashboard/AddReview";
export const privateRoutes = [
  
 
  

  { path: "/purchase/:id", name: "PurchasePage", Component: PurchasePage },
  { path: "/custom-package", name: "CustomPackage", Component: CustomPackage },
  
 
];