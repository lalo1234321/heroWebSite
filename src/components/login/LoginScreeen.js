import React from 'react'

export const LoginScreeen = ({history}) => {
    const handleLogin = () => {
        history.replace('/');
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
