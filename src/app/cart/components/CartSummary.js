import React from "react";

export default class CartSummary extends React.Component {
    constructor(props) {
        super(props)
    }

    // update cycle
    // when it is called
    // on update cycle, when parent render called
    componentWillReceiveProps(nextProps) {
        console.log("Cart summary will receive")
        console.log("Next props ", nextProps)
        console.log("Current props ", this.props)

        // this.props.amount != ....
    }

    // update cycle
    // called when? on every parent render on update cycle
    // called when? this.setState
    // NOT (on forceUpdate, shouldComponentUpdate not called)
    shouldComponentUpdate(nextProps, nextState) {
        console.log("summary should update")
        
        return nextProps.count != this.props.count ||
               nextProps.amount != this.props.amount 
               
        // return true; // calls render
        // return false; // no render call
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