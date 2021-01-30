import React from 'react'
import { Redirect, Route } from 'react-router-dom'
// impt es un atajo para que te genere la importaciónde las proptypes
import PropTypes from 'prop-types';
// para obtener las demás propiedades es necesario utlizar el operador rest (checar diferencia con el operador spread y rest)
// el rest es el que está dentro de los argumentos dentro de un functional component
// Y el spread es el que está dentro de un componente 
// el path caerá en el operador rest 
export const PrivateRouter = ({
    isAuthenticated,
    component : Component,
    ...rest
}) => {

    
    return (
        // pasamos todas las propiedades que se estén pasando; exact, path, etc
        <Route {...rest}
            component={ (props) => (
                (isAuthenticated)
                    ?
                    (<Component {...props}/>)
                    :
                    (<Redirect to="/login"/>)
            )}
        
        />
    )
}


// darle már restricciones a las props

PrivateRouter.propTypes = {
    isAuthenticated : PropTypes.bool.isRequired,
    component : PropTypes.func.isRequired
}