import { Params } from "react-router-dom";
import { getData } from "../services/serviceBase";
import { IAnimal } from "../models/IAnimal";
import { getLocalStorage } from "../helperfunctions/getLocalStorage";
import { setLocalStorage } from "../helperfunctions/setLocalStorage";

const BASE_URL = 'https://animals.azurewebsites.net/api/animals'

interface IAnimalLoader {
    params: Params<string>
}


export const animalsLoader = async () => {
    const animalInStoreage = await getLocalStorage<IAnimal[]>('animals')
    if (animalInStoreage.length > 0) {
        return animalInStoreage
    } else {
        const response = await getData<IAnimal[]>(`${BASE_URL}`)
        setLocalStorage('animals', response)
        return response
    } 
};

export const animalLoader = async ({params}: IAnimalLoader) => {
    const animalInStoreage = await getLocalStorage<IAnimal[]>('animals')
    
    if (animalInStoreage.length > 0) {
        return animalInStoreage.find((animal:IAnimal) => animal.id == params.id)
    } else {
        const response = await getData<IAnimal>(`${BASE_URL}/${params.id}`)
        return response
    }
}