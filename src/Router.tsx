import { createBrowserRouter } from "react-router-dom";
import { Layout } from "./pages/Layout";
import { Home } from "./pages/Home";
import { Animals } from "./pages/Animals";
import { animalLoader, animalsLoader } from "./loaders/AnimalLoader";
import { Animal } from "./pages/Animal";

export const router = createBrowserRouter([
    {
        path: '/',
        element: <Layout></Layout>,
        children: [{
            path: '/',
            element: <Home></Home>
        },
        {
            path: '/animals',
            element: <Animals></Animals>,
            loader: animalsLoader
        },
        {
            path: '/animals/:id',
            element: <Animal></Animal>,
            loader: animalLoader
        }]
    }
])