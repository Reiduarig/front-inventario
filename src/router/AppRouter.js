import React from 'react'
import { 
    BrowserRouter as Router,
    Route,
    Routes 
} from "react-router-dom";

import { InventarioPage } from '../pages/InventarioPage';
import { LoginPage } from '../pages/LoginPage';
import { PrivateRoute } from './PrivateRoute';


export const AppRouter = () => {
    
    return (
       
        <Router>
            <Routes>  
                <Route element={ <PrivateRoute /> }   >
                    <Route exact path="/" element={ <InventarioPage /> } />  
                </Route>
                <Route exact path="/login" element={ <LoginPage /> } />
            </Routes>   
        </Router>
    )
}
