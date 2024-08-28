import { useLoaderData, useParams } from "react-router-dom"
import { IAnimal } from "../models/IAnimal"
import { useEffect, useState } from "react"
import { compareDates, formatDate, getDate } from "../helperfunctions/getDate"
import './styles/animal.css'


export const Animal = () => {
    const animal = useLoaderData() as IAnimal;
   
    const { id } = useParams<string>() 
    
     
    const [isFed, setIsFed] = useState(animal.isFed);
    const formatedDate = formatDate(animal.lastFed);
    const [lastFed, setLastFed] = useState(formatedDate);
  
    
    


    

 

    const handleFeed = (id: string) => {
        const animalsInStore = JSON.parse(localStorage.getItem('animals') || '[]') as IAnimal[];
        animalsInStore.map((animal) => {

            if (animal.id === id) {
                animal.isFed = true;
                animal.lastFed = getDate();
                setLastFed(animal.lastFed)
                setIsFed(animal.isFed)
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
                <p>{animal.name} blev matad senast:</p>
                <p>{lastFed}</p>
                {isFed ? <p>{animal.name} är mätt!</p> : <p>{animal.name} är hungrig!</p>}
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