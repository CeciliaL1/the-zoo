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
                    <Link to={`/animals/${animal.id}`}>
                        <div className="single-animal" key={animal.id}>
                            <h3>{animal.name}</h3>
                            <p>{animal.latinName}</p>
                            <img src={animal.imageUrl} alt={animal.name} /> 
                
                        </div>
                    </Link>
                ) )}
            </div>
        </>
    )
}