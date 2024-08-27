import { Params } from "react-router-dom";
import { getData } from "../services/serviceBase";
import { IAnimal } from "../models/IAnimal";

const BASE_URL = 'https://animals.azurewebsites.net/api/animals'

interface IMovieLoader {
    params: Params<string>
}

export const animalsLoader = async () => {
    const animalInStoreage = JSON.parse(localStorage.getItem('animals') || '[]')

    if (animalInStoreage.length > 0) {
        return animalInStoreage
    } else {
        const response = await getData<IAnimal[]>(`${BASE_URL}`)
        localStorage.setItem('animals', JSON.stringify(response))
        return response
    }
   
};

export const animalLoader = async ({params}: IMovieLoader) => {
   
    return await getData<IAnimal>(`${BASE_URL}/${params.id}`)
}