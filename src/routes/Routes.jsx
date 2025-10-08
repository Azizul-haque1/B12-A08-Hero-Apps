import { createBrowserRouter } from "react-router";
import MainLayout from "../Layout/MainLayout";
import Home from "../pages/Home";
import Apps from "../pages/Apps";
import Installation from "../pages/Installation";

export const router = createBrowserRouter([
    {
        path: '/',
        Component: MainLayout,
        errorElement: <h1>error</h1>,
        children: [
            {
                index: true,
                path: '/',
                Component: Home,
            },
            {
                path: '/apps',
                Component: Apps,
            },
            {
                path: '/installation',
                Component: Installation,
            },
        ]

    }
])