import {Route, BrowserRouter as Router} from "react-router-dom"
import Home from "./pages/Home";
import beverage from "./pages/beverage"

import React from 'react'

export default function App2() {
    return (
        <div>
         
            <Router>
            <switch>
                
                <Route path="/beverage" component={beverage}/>
                <Route path="/" exact component={Home}/>
                </switch>
            </Router>
            
        </div>
    )
}
