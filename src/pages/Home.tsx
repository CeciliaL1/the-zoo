import { useLoaderData } from "react-router-dom";
import { IAnimal } from "../models/IAnimal";
import './styles/home.css'

export const Home = () => {
       
    const animals = useLoaderData() as IAnimal[];
    const hungryAnimals = animals.filter((animal) => animal.isFed != true);
    
    return (
        <>
           <h2> Välkommen, dina djur i Zoo'et kanske behöver dig!</h2>
           <p>Här får du en överblick över vilka djur som är hungriga</p>
           
           <div className="animals">
           {hungryAnimals.map((animal)  => (
                <div key={animal.id} className="single-animal" >
                    <h4>{animal.name} är hungrig!</h4>
                    <img src={animal.imageUrl} alt={animal.name} onError={({currentTarget}) => {currentTarget.src = '../public/placeholder-image.jpg'}}/>
                        
                </div>
           ))}
            </div>
           

        </>
    )
}


       