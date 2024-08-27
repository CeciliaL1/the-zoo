import { useLoaderData } from "react-router-dom"
import { IAnimal } from "../models/IAnimal"

export const Animal = () => {

    const animal = useLoaderData() as IAnimal;

    return (

        <>
        {animal.name}
        </>
    )
}