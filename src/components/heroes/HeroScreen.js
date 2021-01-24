import React, { useMemo } from 'react'
import { Redirect, useParams } from 'react-router-dom'
import { getHeroById } from '../../selectors/getHeroById';

export const HeroScreen = ({history}) => {
    const handleReturn = () => {
        // si alguine entra a una página desde un url y le da regresar habrá errores
        if( history.length <=2) {
            history.push('/');
        } else {
            history.goBack();

        }
    }
    // hook creado por react 

    // const params = useParams();
    // console.log(params);
    const {heroeid} = useParams();
    // console.log(heroeid);
    const hero = useMemo(() =>getHeroById(heroeid) , [heroeid]);

    // const hero = getHeroById(heroeid);

    

    if(!hero) {
        return <Redirect to="/"/> 
    }

    const {
        superhero,
        publisher,
        alter_ego,
        first_appearance,
        characters
    } = hero;
    console.log(hero);
    return (
        <div className="row mt-5">
            <div className="col-4">
                <img src={`../assets/heroes/${heroeid}.jpg`}
                alt={superhero}
                className = "img-thumbnail animate__animated animate__fadeInLeft"    
            ></img>
            </div>
            
            
            <div className="col-8">
                <h1>{superhero}</h1>
                <ul className="list-group list-group-flush">
                    <li className="list-group-item"><b>Alter ego: {alter_ego} </b></li>
                    <li className="list-group-item"><b>Publisher: {publisher} </b></li>
                    <li className="list-group-item"><b>First appearance: {first_appearance} </b></li>
                       
                </ul>
                <h5>Characters</h5>
                <p>{characters}</p>

                <button 
                    className="btn btn-outline-info"
                    onClick={handleReturn}
                >
                    Return
                </button>
            </div>
        </div>
    )
}
