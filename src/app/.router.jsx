import { createBrowserRouter } from "react-router-dom";
import Login from "../features/auth/pages/LoginPage";
import Browse from "../features/browse/pages/BrowsePage";

export const appRouter = createBrowserRouter([
    {
        path:"/",
        element:<Login/>
    },
    {
        path:"/browse",
        element:<Browse/>
    }
])