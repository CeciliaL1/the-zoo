import { Link } from "react-router-dom"
import { IAnimal } from "../models/IAnimal"
import './styles/animals.css'
import { useState } from "react"


export const Animals = () => {

    const [animals, setAnimals] = useState<IAnimal[]>(JSON.parse(localStorage.getItem('animals') || '[]'))

     

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