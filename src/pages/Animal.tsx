import { useLoaderData} from "react-router-dom"
import { IAnimal } from "../models/IAnimal"
import {  useState } from "react"
import { formatDate, getDate } from "../helperfunctions/getDate"
import { getLocalStorage } from "../helperfunctions/getLocalStorage"
import { setLocalStorage } from "../helperfunctions/setLocalStorage"
import './styles/animal.css'


export const Animal = () => {
    const animal = useLoaderData() as IAnimal;
    const formatedDate = formatDate(animal.lastFed);

    const [isFed, setIsFed] = useState(animal.isFed);
    const [lastFed, setLastFed] = useState(formatedDate);

    const handleFeed = async (id: string) => {
        const animalsInStore = await getLocalStorage<IAnimal[]>('animals')
        animalsInStore.map((animal) => {

            if (animal.id === id) {
                animal.isFed = true;
                animal.lastFed = getDate();
                setLastFed(animal.lastFed)
                setIsFed(animal.isFed)
            }
        })
        setLocalStorage('animals', animalsInStore)
    }

    return ( 
        <>
        <div className="animal-card">
            <div className="animal-info">
            <h3>{animal.name}</h3>
            <img src={animal.imageUrl} alt={animal.name} onError={({currentTarget}) => {currentTarget.src = '../public/placeholder-image.jpg'}}/>
            <p>{animal.longDescription}</p>
            </div>

            <div className="animal-feed-info">
                <p>{animal.name} blev matad senast:</p>
                <p>{lastFed}</p>
                {isFed ? <p>{animal.name} är mätt!</p> : <p>{animal.name} är hungrig!</p>}
                <button disabled={isFed} onClick={() => {handleFeed(animal.id)}}>Mata mig!</button>
            </div>   
        </div>
        </>
    )
}
