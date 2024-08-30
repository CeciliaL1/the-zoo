import { useLoaderData } from "react-router-dom";
import { IAnimal } from "../models/IAnimal";
import { ImagePresentation } from "../components/ImagePresentation";
import { checkIfAnimalIsFed } from "../helperfunctions/checkIfAnimalIsFed";
import './styles/home.css'

export const Home = () => {
       
    const animals = useLoaderData() as IAnimal[];
 
   checkIfAnimalIsFed(animals)
    
    
    return (
        <>
           <h2> Välkommen, dina djur i Zoo'et kanske behöver dig!</h2>
           <p>Här får du en överblick över vilka djur som är hungriga</p>
           
           <div className="animals">
           {animals.map((animal)  => (
                !animal.isFed && (<div key={animal.id} className="single-animal" >
                    <h4>{animal.name} är hungrig!</h4>
                    <ImagePresentation name={animal.name} src={animal.imageUrl}></ImagePresentation>
                </div>)
           ))}
            </div>
           

        </>
    )
}


       