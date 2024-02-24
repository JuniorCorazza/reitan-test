import {
    createBrowserRouter,
    RouterProvider,
} from "react-router-dom";
import { CatPage } from "@/pages";

const router = createBrowserRouter([
    {
        path: "*",
        element: <CatPage />,
    },
]);

/* 
Quite uneccessary to create a router for just one component, 
but the company might want to to more functions later on
*/
export const Router = () => {
    return (
        <RouterProvider router={router} />
    )
}