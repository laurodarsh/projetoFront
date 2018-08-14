import React from 'react';
import { Switch, Route } from "react-router-dom";

import { Home } from "./home";

export class Main extends React.Component {
    render(){
        return (
            <Switch>
                <Route exact path='/' component={Home}/>
            </Switch>
        );
    }
}