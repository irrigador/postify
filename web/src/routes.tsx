import React from 'react';

import {
    BrowserRouter, Route,} from "react-router-dom";
  import Form from './form';
import List from './List';
import Landing from './pages/Landing';


function Routes() {
    return (
        <BrowserRouter> 
            <Route path="/" exact component={Landing} />
            <Route path="/study" component={List}  />
            <Route path="/cadastro" component={Form}  />
        </BrowserRouter>
    );
}

export default Routes;
