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
                   
                        <div style={{backgroundColor: animal.isFed ? '#9de0bb' : '#f09d81'}} className="single-animal" >
                              {animal.isFed ? <p>Mätt</p> : <p>Hungrig!</p> }
                            <h3>{animal.name}</h3>
                             <ImagePresentation name={animal.name} src={animal.imageUrl}></ImagePresentation>
                            
                            <p>{animal.shortDescription}</p>
                            <Link to={`/animals/${animal.id}`} ><button>Ta hand om djuret</button></Link>
                        </div>
                        
                ) )}
            </div>
        </>
    )
}