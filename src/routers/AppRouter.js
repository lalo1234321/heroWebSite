import React, { useContext } from 'react'
import {
    BrowserRouter as Router,
    Switch
  } from "react-router-dom";
import { AuthContext } from '../auth/AuthContext';
import { LoginScreeen } from '../components/login/LoginScreeen';
import { DashboardRoutes } from './DashboardRoutes';
import { PrivateRouter } from './PrivateRouter';
import { PublicRouter } from './PublicRouter';


export const AppRouter = () => {

    const {user} = useContext(AuthContext);
    console.log(user)

    return (
        <Router>
      <div>

        <Switch>
            <PublicRouter exact path="/login" component={LoginScreeen} isAuthenticated={user.logged}/> 
                 {/* Forma antigua */}
            {/* <Route  path="/" component={DashboardRoutes}/>     */}
                  {/* Forma de proteger rutas privadas */}
            <PrivateRouter path="/" component={DashboardRoutes} isAuthenticated={user.logged}/>      

        </Switch>
      </div>
    </Router>
    )
}
