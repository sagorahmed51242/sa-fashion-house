import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../mainlayout/MainLayout";
import Products from "../pages/Products";
import Error404 from "../pages/Error404";
import Home from "../pages/Home";
import ProductDetails from "../pages/ProductDetails";
import CartPage from "../pages/CartPage";
import UserSingInOrResisterPage from "../pages/UserSingInOrResisterPage";
import UserProfile from "../pages/UserProfile";
import ProtectedRoutes from "../components/ProtectedRoutes";

const router = createBrowserRouter([
    {
        path:"/",
        element:<MainLayout/>,
        errorElement:<Error404/>,
        children:[
            {
                path:"/",
                element:<Home/>,
                loader: () => fetch('https://dummyjson.com/products/category-list')
            },
            {
                path: "/product/:category",
                element: <Products />
            },
            {
                path: "/products/:category",
                element: <Products />
            },
            {
                path: "/product-details/:id",
                element: <ProductDetails />
            },
            {
                path: "/cart",
                element: <CartPage />
            },
            {
                path:'/sign-in',
                element:<UserSingInOrResisterPage/>
            },
            {
                path:'/profile',
                element: (
                <ProtectedRoutes>
                    < UserProfile />
                </ProtectedRoutes>
                )
            }
        ]
    },

])

export default router