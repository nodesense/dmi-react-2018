import React from "react";

export default class CartSummary extends React.Component {
    constructor(props) {
        super(props)
    }
  
    render() {
        console.log("CartSummary Render ");
        return (
            <div>
                <h2>Cart Summary</h2>
                <p>Amount: {this.props.amount} </p>
                <p>Total Items: {this.props.count} </p>
            </div>
        )
    }
}