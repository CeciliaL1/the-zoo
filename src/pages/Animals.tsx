import { Link, useLoaderData} from "react-router-dom"
import { IAnimal } from "../models/IAnimal"
import { ImagePresentation } from "../components/ImagePresentation";
import { checkIfAnimalIsFed } from "../helperfunctions/checkIfAnimalIsFed";
import './styles/animals.css'


export const Animals = () => {
    const animals = useLoaderData() as IAnimal[];
  
   checkIfAnimalIsFed(animals)
        
    return (
        <>
            <div className="animals">
                {animals.map((animal) => (
                        <div style={{backgroundColor: animal.isFed ? 'Green' : 'pink'}} className="single-animal" key={animal.id}>
                              {animal.isFed ? <p>Mätt</p> : <p>Hungrig!</p> }
                            <h3>{animal.name}</h3>
                            <Link to={`/animals/${animal.id}`}>
                                <ImagePresentation name={animal.name} src={animal.imageUrl}></ImagePresentation>
                            </Link>
                            <p>{animal.shortDescription}</p>
                        </div>
                ) )}
            </div>
        </>
    )
}