import React from 'react'
import {
    BrowserRouter as Router,
    Switch,
    Route
  } from "react-router-dom";
import { LoginScreeen } from '../components/login/LoginScreeen';

import { DashboardRoutes } from './DashboardRoutes';


export const AppRouter = () => {
    return (
        <Router>
      <div>

        <Switch>
            <Route exact path="/login" component={LoginScreeen}/>      
            <Route  path="/" component={DashboardRoutes}/>    
        </Switch>
      </div>
    </Router>
    )
}
