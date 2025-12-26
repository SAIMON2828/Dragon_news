import { createBrowserRouter } from "react-router";
import Home from "../Layout/Home";
import Homep from "../components/pages/Homep";
import Category from "../components/pages/Category";
import Login from "../components/pages/Login";
import Register from "../components/pages/Register";
import AuthLayout from "../Layout/AuthLayout";
import NewsDetails from "../components/pages/NewsDetails";
import PrivateRouter from "../provider/PrivateRouter";

const router = createBrowserRouter(
    [
        {
            path: "/",
            element: <Home></Home>,
            children: [
                {
                    path: "/",
                    element: <Homep></Homep>,
                },
                {
                    path: "/category/:id",
                    element: <Category></Category>,
                    loader: () => fetch("/news.json"),
                },
            ]

        },
        {
            path: "/auth",
            element: <AuthLayout></AuthLayout>,
            children: [
                {
                    path: "/auth/login",
                    element: <Login></Login>,
                },
                {
                    path: "/auth/register",
                    element: <Register></Register>,
                },
            ]
        },
        {
            path: "/news-details/:id",
            element:( <PrivateRouter>
                         <NewsDetails></NewsDetails>
                     </PrivateRouter>),
            loader: () => fetch("/news.json"),
        },
        {
            path: "/*",
            element: <h2>404</h2>
        },
    ]
)

export default router;