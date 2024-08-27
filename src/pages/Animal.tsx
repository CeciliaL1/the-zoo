import { useLoaderData } from "react-router-dom"
import { IAnimal } from "../models/IAnimal"
import './styles/animal.css'
import { useState } from "react"
import { formatDate, getFeedDate } from "../helperfunctions/getDate"

export const Animal = () => {
    const animal = useLoaderData() as IAnimal;
    const [isFed, setIsFed] = useState(animal.isFed);
    const formatedDate = formatDate(animal.lastFed);
    const [lastFed, setLastFed] = useState(formatedDate);

    console.log(lastFed)

    
    const handleFeed = (id: string) => {
        const animalsInStore = JSON.parse(localStorage.getItem('animals') || '[]') as IAnimal[];

        animalsInStore.map((animal) => {
            if (animal.id === id) {
                animal.isFed = true;
                animal.lastFed = getFeedDate();
                setLastFed(animal.lastFed)
                setIsFed(true)
            }
        })
        localStorage.setItem('animals', JSON.stringify(animalsInStore))
    }

    return ( 

        <>
        <div className="animal-card">
            <div className="animal-info">
            <h3>{animal.name}</h3>
            <img src={animal.imageUrl} alt={animal.name} />
            <p>{animal.longDescription}</p>
            </div>

            <div className="animal-feed-info">
                {isFed ? <p>Mätt!</p> : <p>Hungrig!</p>}
                <p>{lastFed}</p>
                <button disabled={isFed} onClick={() => {handleFeed(animal.id)}}>Mata mig!</button>
                

            </div>
            
        </div>
        </>
    )
}

/*

    const getDate = () => {
     

        return `${year}-${month}-${day} ${hour}:${minute > 10 ? `0${minute}` : minute }`
    }*/