import { IAnimal } from "../models/IAnimal";
import { compareDates } from "./getDate";
import { setLocalStorage } from "./setLocalStorage";

export const checkIfAnimalIsFed = (animals: IAnimal[]) => {

    animals.map((animal)  => {
        const time = compareDates(animal.lastFed)

        if(time) {
            animal.isFed = false;
        }
       })
        setLocalStorage('animals',animals)

}