import React, { useContext } from 'react'
import { Link, NavLink } from 'react-router-dom'
import { AuthContext } from '../../auth/AuthContext'
import { types } from '../../types/types';



// tener en cuenta el arbol de componenetes para que así podamos acceder a algunas propiedades específicas
// también es necesario jugar con el envió de valores por las props y así utilizarlos en diferentes componentes
// sin embargo el uso de las properties entre componenetes es una mala prática,
// es por eso que utlizaremos el context para acceder a alguna propiedad del arbol de componenetes
export const Navbar = ({history}) => {
    const {user, dispatch} = useContext(AuthContext);
    
    const handleLogOut = () => {
        history.replace('/login');
        dispatch({
            type:types.logout,
            payload: {
                user:''
            }
        });
    }
    
    
    return (
        <nav className="navbar navbar-expand-sm navbar-dark bg-dark">
            
            <Link 
                className="navbar-brand" 
                to="/"
            >
                Asociaciones
            </Link>

            <div className="navbar-collapse">
                <div className="navbar-nav">

                    <NavLink 
                        activeClassName="active"
                        className="nav-item nav-link" 
                        exact
                        to="/marvel"
                    >
                        Marvel
                    </NavLink>

                    <NavLink 
                        activeClassName="active"
                        className="nav-item nav-link" 
                        exact
                        to="/dc"
                    >
                        DC
                    </NavLink>
                    <NavLink 
                        activeClassName="active"
                        className="nav-item nav-link" 
                        exact
                        to="/search"
                    >
                        Search
                    </NavLink>
                </div>
            </div>

            <div className="navbar-collapse collapse w-100 order-3 dual-collapse2">
                <ul className="navbar-nav ml-auto">
                    <span className="nav-item nav-link text-info">
                        {user.name}
                    </span>

                    
                    <button 
                        className="btn btn-secondary btn-lg active"
                        onClick={handleLogOut} 
                    >
                        Logout
                    </button>
                </ul>
            </div>
        </nav>
    )
}