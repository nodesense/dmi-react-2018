import React from "react";

import {NavLink} from 'react-router-dom';

//create object, calls render to get v.dom
export default class Header extends React.Component {
    
    constructor(props) {
        super(props)
        console.log("Header created", props)
    }
    
    // keyword
    // create virtual dom, return v dom
    render() {
        console.log("Header render")
        // props is a keyword
        let title = this.props.title;

        return (
<div>
    <h1> {title} </h1>

    <NavLink to="/" className="button">Home</NavLink>
    <NavLink to="/products" className="button">Products</NavLink>
    <NavLink to="/cart" className="button">Cart</NavLink>
    <NavLink to="/redux-cart" className="button">Redux Cart</NavLink>
    <hr />
</div>
        )
    }
}