import { Params } from "react-router-dom";
import { getData } from "../services/serviceBase";
import { IAnimal } from "../models/IAnimal";

const BASE_URL = 'https://animals.azurewebsites.net/api/animals'

interface IMovieLoader {
    params: Params<string>
}
const animalInStoreage = JSON.parse(localStorage.getItem('animals') || '[]')

export const animalsLoader = async () => {
   

    if (animalInStoreage.length > 0) {
        return animalInStoreage
    } else {
        const response = await getData<IAnimal[]>(`${BASE_URL}`)
        localStorage.setItem('animals', JSON.stringify(response))
        return response
    }
   
};

export const animalLoader = async ({params}: IMovieLoader) => {
    
    console.log(animalInStoreage.find((animal: IAnimal) => animal.id == params.id))
    if (animalInStoreage.length > 0) {
        return animalInStoreage.find((animal:IAnimal) => animal.id == params.id)
    } else {
        const response = await getData<IAnimal>(`${BASE_URL}/${params.id}`)
        return response
    }
    
}