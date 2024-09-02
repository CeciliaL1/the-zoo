import { createBrowserRouter } from "react-router-dom";
import { Layout } from "./pages/Layout";
import { Home } from "./pages/Home";
import { Animals } from "./pages/Animals";
import { Animal } from "./pages/Animal";
import { NotFound } from "./pages/NotFound";
import { Suspense } from "react";
import { Spinner } from "./components/Spinner";
import { animalLoader, animalsLoader } from "./loaders/AnimalLoader";

const repo = '/the-zoo-CeciliaL1/'

export const router = createBrowserRouter([
    {
        path: '/',
        element: <Layout></Layout>,
        errorElement: <NotFound></NotFound>,
        children: [{
            path: '/',
            element: <Suspense fallback={<Spinner></Spinner>}><Home></Home></Suspense>,
            loader: animalsLoader
        },
        {
            path: '/animals',
            element: <Suspense fallback={<Spinner></Spinner>}><Animals></Animals></Suspense>,
            loader: animalsLoader
        },
        {
            path: '/animals/:id',
            element: <Suspense fallback={<Spinner></Spinner>}><Animal></Animal></Suspense>,
            loader: animalLoader
        }]
    }
],
{ basename: repo }
);