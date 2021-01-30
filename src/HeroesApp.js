import React, { useEffect, useReducer } from 'react'
import { AuthContext } from './auth/AuthContext'
import { authReducer } from './auth/authReducer'
import { AppRouter } from './routers/AppRouter'

const init = () => {
    // si no existe entonces retornará un objeto que tendrá la propiedad logged en false
    return JSON.parse(localStorage.getItem('user')) || {
        logged : false 
    };
}

export const HeroesApp = () => {
    // el init se ejecuta, luego se pasa al initial state y así se obtiene el estado incial de la aplicación
    const [user, dispatch] = useReducer(authReducer, {}, init)
    // ahora el user y el dispatch se podrán usar a lo largo de todo el sistema

    // crear un efecto para cuando el usuario cambié, el localstorage se modifiqué
    // a la hora de recargar el navegador los valores segirán ahí
    // si se modifica desde components/hooks, se redibujará todo 
    useEffect(() => {
        localStorage.setItem('user', JSON.stringify(user));
        
    }, [user])


    return (
        <div>
            <AuthContext.Provider value={{user, dispatch}}>
                <AppRouter/>
            </AuthContext.Provider>     
        </div>
    )
}
