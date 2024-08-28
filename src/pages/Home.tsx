import { useLoaderData } from "react-router-dom";
import { IAnimal } from "../models/IAnimal";
import './styles/home.css'

export const Home = () => {
       
    const animals = useLoaderData() as IAnimal[];
    
    return (
        <>
           <h2> Välkommen, dina djur i Zoo'et kanske behöver dig!</h2>
           <p>Här får du en överblick över vilka djur som är hungriga</p>
           <div className="presentation">
                {animals.map((animal) => {

                    if (!animal.isFed) {
                        return (
                            <>
                            <div className="short-presentation" key={animal.id}>
                                <p>{animal.name} är hungrig!</p>
                                <img src={animal.imageUrl} alt={animal.name} onError={({currentTarget}) => {currentTarget.src = '../public/placeholder-image.jpg'}}/>
                            </div>
                                
                            </>
                        )
                    }
                })}
           </div>
        </>
    )
}