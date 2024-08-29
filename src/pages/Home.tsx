import { useLoaderData } from "react-router-dom";
import { IAnimal } from "../models/IAnimal";
import './styles/home.css'
import { setLocalStorage } from "../helperfunctions/setLocalStorage";
import { compareDates } from "../helperfunctions/getDate";

export const Home = () => {
       
    const animals = useLoaderData() as IAnimal[];
 
    
    animals.map((animal)  => {
        const time = compareDates(animal.lastFed)

        if(time) {
            animal.isFed = false;
        }
       })
        setLocalStorage('animals',animals)
    
    return (
        <>
           <h2> Välkommen, dina djur i Zoo'et kanske behöver dig!</h2>
           <p>Här får du en överblick över vilka djur som är hungriga</p>
           
           <div className="animals">
           {animals.map((animal)  => (
                !animal.isFed && (<div key={animal.id} className="single-animal" >
                    <h4>{animal.name} är hungrig!</h4>
                    <img src={animal.imageUrl} alt={animal.name} onError={({currentTarget}) => {currentTarget.src = '../public/placeholder-image.jpg'}}/>
                        
                </div>)
           ))}
            </div>
           

        </>
    )
}


       