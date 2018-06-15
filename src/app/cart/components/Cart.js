import React from "react";

import CartList from "./CartList"
import CartSummary from "./CartSummary"


export default class Cart extends React.Component {
     // Creation Cycle 1
    constructor(props) {
        super(props)

        this.state = {
            items: [
                {id: 1, name: "Product 1", price: 100, qty: 1}
            ],
            amount: 0,
            count: 0
        }
        console.log("Cart Created")

    }

    // creation life cycle 2
    componentWillMount() {
        console.log("Cart will mount")
        // pre-compute
        this.recalculate()
    }

    //Es.NEXT 
    addItem = () => {
        let id = Math.ceil(Math.random() * 100000)

        let item = {
            id, //id: id (es6 syle)
            name: `Product ${id}`,
            price: 1 + Math.ceil(Math.random() * 100),
            qty: 1
        }

        // Mutablity vs Immutablity
        //BAD, mutation
        //this.state.items.push(item)

        //items.push (item) ==> mutable
        // items = [...items, item] => immutable

        //GOOD
        let items = [...this.state.items, item]

        this.setState({
            items
        })

    }
  
    removeItem = (id) => {
        
    }

    updateItem = (id, qty) => {
        
    }

    empty = () => {
        
    }

    // amount, count to be recalculated
    recalculate() {
        let items = this.state.items;

        let amount =0,
            count = 0;

        for (let item of items) {
            amount += item.price * item.qty;
            count += item.qty;
        }

        this.setState({
            // amount: amount,
            // count: count
            amount,
            count
        })

    }

    dummyRefresh = () => {
        this.setState({
            flag: true
        })
    }

    render() {
        console.log("Cart render")

        return (
            <div>
                <h2>Cart</h2>

                <button onClick={this.addItem}>
                    Add Item
                </button>
                <button onClick={this.empty}>
                    Empty
                </button>
                <button onClick={this.dummyRefresh}>
                    Refresh
                </button>

                <CartList   items={this.state.items}>
                </CartList>

                <CartSummary amount={this.state.amount}
                             count={this.state.count}   
                >
                </CartSummary>
            </div>
        )
    }
}