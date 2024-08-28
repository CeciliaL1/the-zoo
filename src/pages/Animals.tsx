import { Link, useLoaderData} from "react-router-dom"
import { IAnimal } from "../models/IAnimal"
import './styles/animals.css'
import { useEffect } from "react";
import { compareDates } from "../helperfunctions/getDate";




export const Animals = () => {

   
    const animals = useLoaderData() as IAnimal[];
    
    useEffect(() => {
        const animalsInStore = JSON.parse(localStorage.getItem('animals') || '[]') as IAnimal[];
   
       animalsInStore.map((animal)  => {
        const time = compareDates(animal.lastFed)

        if(time) {
            animal.isFed = false;
        }
       })
        localStorage.setItem('animals', JSON.stringify(animalsInStore))
    },[])

    return (
        <>
            <div className="animals">
                {animals.map((animal) => (
                        <div style={{backgroundColor: animal.isFed ? 'Green' : 'pink'}} className="single-animal" key={animal.id}>
                              {animal.isFed ? <p>Mätt</p> : <p>Hungrig!</p> }
                            <h3>{animal.name}</h3>
                            <Link to={`/animals/${animal.id}`}><img src={animal.imageUrl} alt={animal.name} /></Link>
                            <p>{animal.shortDescription}</p>
                          
                        </div>
                    
                ) )}
            </div>
        </>
    )
}