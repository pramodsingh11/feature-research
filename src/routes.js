/* eslint-disable */
import React from 'react'
import {Route,Switch} from 'react-router-dom'
import Question from './pages/Question';
import ThankYou from './pages/ThankYou';




export const Routes = () => {
    return (
        
            <Switch>
                {/* <Route exact path="/" component={Home}/> */}
            <Route exact path="/" component={Question}/>
               <Route exact path="/thank-you" component={ThankYou}/>
              
            </Switch>
        
    )
}