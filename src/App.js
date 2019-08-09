import React, {Component} from 'react';
import './App.css';
import Header from './components/UI/Header/Header';

import Home from './components/Home/Home';
import Seller from './components/Seller/Seller';
import Products from './components/Products/Products';
import About from './components/About/About';

import { Route, Switch, withRouter} from 'react-router-dom';

class App extends Component{
  render(){

    let route = (
      <Switch>
        <Route path="/seller" component={Seller}/>
        <Route path="/products" component={Products}/>
        <Route path="/about" component={About}/>
        <Route path="/" component={Home}/>
      </Switch>
    );
    
    return(
      <div className="App">
        <Header/>
        <br/>
        {route}
        
        
      </div>
    );
  }
}

export default App;
