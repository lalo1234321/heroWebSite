import React, { useMemo } from 'react'
import { getHeroesByPublisher } from '../../selectors/getHeroesByPublisher'
import { HeroCard } from './HeroCard';

export const HeroList = ({publisher}) => {
    // const heroes = getHeroesByPublisher(publisher); al usar use memo para que esta funciónse ejecute cuando el publisher cambie
    const heroes = useMemo(() => getHeroesByPublisher(publisher), [publisher]);
    return (
        <div className="card-columns animate__animated animate__fadeIn">
           {
                heroes.map( hero => (
                    <HeroCard 
                        key={hero.id} 
                        {...hero}
                    />
                        
                    
                ) )
                
           } 
            
            
        </div>
    )
}
  