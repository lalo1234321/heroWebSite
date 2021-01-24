import React, { useMemo } from 'react';
import queryString from 'query-string';
import { useLocation } from 'react-router-dom';
import { useForm } from '../../hooks/useForm';
import { HeroCard } from '../heroes/HeroCard';
import { getHeroesByName } from '../../selectors/getHeroesByName';

export const SearchScreen = ({history}) => {
    // obtener valores de la url
    const location = useLocation();
    // console.log(queryString.parse( location.search ));
    const {q = ''} = queryString.parse( (location.search) );  
    console.log(q);

    
    const [ formValues, handleInputChange] = useForm({
        searchText: q
    }); 

    const {searchText} = formValues;

    const heroesFiltered = useMemo(() => getHeroesByName(q),[q]);
    const handleSearch = (e) => {
        e.preventDefault();
        history.push(`?q=${searchText}`)
    }
// {...hero}manda todas las propiedes de hero
    return (
        <div>
            <h1>SearchScreen</h1>
            <hr/>
             
            <div className="row">
                <div className="col-5">
                    <h4>SearchForm</h4>
                    <hr/>
                    <form onSubmit={handleSearch}>
                        <input
                            type="text"
                            placeholder="Find your hero"
                            className="form-control"
                            name="searchText"
                            autoComplete="off"
                            value={searchText}
                            onChange={handleInputChange}
                        />
                        <button
                            type="submit"
                            className="btn m-1 btn-block btn-outline-primary"
                        >
                            Search
                        </button>

                    </form>
                </div>

                <div className="col-7">
                    <h4>Results</h4>
                    <hr/>
                    {
                        (q === '')
                            ?
                            <div className="alert alert-info">
                                Search a hero
                            </div>
                            :
                            <div className="animate__animated animate__fadeInLeft">
                            {
                                heroesFiltered.map( hero => (
                                    <HeroCard
                                        key={hero.id}
                                        {...hero} 
                                    />
                                ))
                            }
                            </div>
                    }
                    
                    {
                        (q !=='' && heroesFiltered.length === 0)
                            &&
                            <div className="alert alert-info">
                                No information found with name {q}
                            </div>
                    }
                    
                </div>
            </div>

        </div>
    )
}
