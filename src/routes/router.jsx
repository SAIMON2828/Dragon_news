import { createBrowserRouter } from "react-router";
import Home from "../Layout/Home";
import Homep from "../components/pages/Homep";
import Category from "../components/pages/Category";

const router = createBrowserRouter(
    [
        {
            path:"/",
            element:<Home></Home>,
            children:[
                {
                    path:"/",
                    element:<Homep></Homep>,
                },
                {
                    path:"/category/:id",
                    element:<Category></Category>,
                    loader: ()=> fetch("/news.json"),
                },
            ]
            
        },
        {
            path:"/auth",
            element:<h2>Authentification layout</h2>
        },
        {
            path:"/news",
            element:<h2>News layout</h2>
        },
        {
            path:"/*",
            element:<h2>404</h2>
        },
    ]
)

export default router;