import { createBrowserRouter } from "react-router-dom";

import ShopPage from "../pages/Shop/shop";
import ConatctPage from "../pages/Contact/contact";
import MainPage from "../LayoutPage/MainPage";
import ErrorPage from "../Error/ErrorPage";
import FAQ from "../pages/FAQ/FAQ";
import AboutPage from "../pages/About/About";
import AccountPage from "../pages/Account/Account";
import Checkout from "../pages/Checkout/Checkout";
import HomePage from "../pages/Home/home";
import Cart from "../pages/Cart/Cart";


export const router = createBrowserRouter([
{
    path:'',
    element:<MainPage />,
    errorElement: <ErrorPage />,
    children:
    [
        {
            path:'/',
            element:<HomePage />
        },
        {
            path:'/shop',
            element:<ShopPage />
        },
        {
            path:'/Pages',
            children:[
                {
                    path:'/Pages/Faq',
                    element:<FAQ />,
                },
                {
                    path:'/Pages/Cart',
                    element:<Cart />,
                },
                {
                    path:'/Pages/Account',
                    element:<AccountPage />,
                },
                {
                    path:'/Pages/Checkout',
                    element:<Checkout />,
                }
            ]
        },
        {
            path:'/About',
            element:<AboutPage />
        },
        {
            path:'/contact',
            element:<ConatctPage />
        },
        // Can all routers matches
        {
            path:"*",
            element:<HomePage />
        }
    ],
}
])