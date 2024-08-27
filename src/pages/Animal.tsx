import { useLoaderData } from "react-router-dom"
import { IAnimal } from "../models/IAnimal"
import './styles/animal.css'
import { useState } from "react"

export const Animal = () => {
    const animal = useLoaderData() as IAnimal;
    const [isFed, setIsFed] = useState(animal.isFed)

    const handleFeed = (id: string) => {
        const animalsInStore = JSON.parse(localStorage.getItem('animals') || '[]') as IAnimal[];

        animalsInStore.map((animal) => {
            if (animal.id === id) {
                animal.isFed = true
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
                {isFed ? <p>Full</p> : <p>Hungry!</p>}
                <p>{animal.lastFed}</p>
                <button disabled={isFed} onClick={() => {handleFeed(animal.id)}}>Mata mig!</button>
                

            </div>
            
        </div>
        </>
    )
}