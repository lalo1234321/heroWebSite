import React, { useContext } from 'react'
import { AuthContext } from '../../auth/AuthContext'
import { types } from '../../types/types';

export const LoginScreeen = ({history}) => {
    const {dispatch} = useContext(AuthContext);
    const handleLogin = () => {
        dispatch({
            type : types.login,
            payload : {
                name : 'Lalo' 
            }
        });

        // el orden en el que se pongan las instrucciones no importa, debido a que react le dará prioridad 
        //  a las operaciones sincronas, y después las asincronas
        history.replace('/');
        // console.log('alg0   ',user);
        // history.push('/');
    }


    return (
        <div className="container mt-5">
            <h1>Login</h1>
            <hr></hr>
            <button
                className="btn btn-primary"
                onClick={handleLogin}
            >
                Login
            </button>
        </div>
    )   
}
