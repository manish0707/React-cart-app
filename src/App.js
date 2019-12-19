import React from 'react';
import './App.css';
import { Route, Switch } from 'react-router-dom';
import Home from './components/Home';
import ProductList from './components/ProductList';
import Cart from './components/Cart';
import ProductInfo from './components/ProductInfo';
import OrderComplete from './components/OrderComplete';

function App() {
  return (
    <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/products" component={ProductList} />
      <Route exact path="/cart" component={Cart} />
      <Route exact path="/product/:id" component={ProductInfo} />
      <Route exact path="/cart/complete" component={OrderComplete} />
    </Switch>
  );
}

export default App;
