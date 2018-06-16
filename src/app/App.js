import React, { Component } from 'react';

import {BrowserRouter, 
        Switch,
        Route
      } from 'react-router-dom';

import './App.css';

import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./components/Home";

import Cart from "./cart/components/Cart";
import ProductList from "./cart/components/ProductList";

// App is parent
// Header and Footer are child component
// Data => parent to child (props)
class App extends Component {
  render() {

    console.log("App render")

    return (
      <BrowserRouter>
      <div  >
          <Header title="Product App" />

          <Switch>
              <Route path="/" exact component={Home} />
              <Route path="/products" component={ProductList} />
              <Route path="/cart" component={Cart} />
          </Switch>

{/*       
          <ProductList />
          <Cart />
           <Home /> */}

          <Footer title="Product App" 
                  year={2018} />
      </div>
      </BrowserRouter>
    );
  }
}

export default App;
