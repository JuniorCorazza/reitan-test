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

export const Router = () => {
    return (
        <RouterProvider router={router} />
    )
}