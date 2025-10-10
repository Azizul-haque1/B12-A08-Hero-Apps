import { createBrowserRouter } from "react-router";
import MainLayout from "../Layout/MainLayout";
import Home from "../pages/Home";
import Apps from "../pages/Apps";
import Installation from "../pages/Installation";
import NoFoundError from "../pages/ErrorPage/NoFoundError";
import AppError from "../pages/ErrorPage/AppError";
import AppDetails from "../components/AppDetails";

export const router = createBrowserRouter([
    {
        path: '/',
        Component: MainLayout,
        errorElement: <NoFoundError />,
        children: [
            {
                index: true,
                path: '/',
                loader: async () => await fetch('../allAppData.json').then(res => res.json()),
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


            {
                path: '/apps/:id',
                Component: AppDetails,
                errorElement: <AppError />
            },
        ]


    },


])