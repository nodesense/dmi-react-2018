import React, { Component } from 'react';
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
      <div  >
          <Header title="Product App" />
      
          <ProductList />
          

          <Cart />

          <Home />

          <Footer title="Product App" 
                  year={2018} />
      </div>
    );
  }
}

export default App;
