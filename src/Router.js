import React from 'react';
import { Switch, Route } from 'react-router-dom'
import App from './App';
// import PageNotFound from './components/PageNotFound'

const Router = (props) => {
    return (
          <Switch>
            <Route exact path='/' component={App}/>
            {/* <Route component={PageNotFound}/> */}
        </Switch>
    )
}


export default Router;