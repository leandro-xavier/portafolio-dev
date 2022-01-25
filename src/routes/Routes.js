import React from 'react';
import { BrowserRouter,Switch, Route} from 'react-router-dom'
import Home from '../components/pages/Home';
import Proyects from '../components/pages/Proyects';

const Routes = () => {

    return(
        <BrowserRouter>
            <Switch>
                <Route exact path="/" component={Home} />
                <Route path="/proyects" component={Proyects}/>
                
            </Switch>
        </BrowserRouter>
    )
}

export default Routes