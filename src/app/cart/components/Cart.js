import React from "react";

export default class Cart extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            items: [
                {id: 1, name: "Product 1", price: 100, qty: 1}
            ]
        }
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
    }
  
    removeItem = (id) => {
        
    }

    updateItem = (id, qty) => {
        
    }

    empty = () => {
        
    }

    dummyRefresh = () => {
        this.setState({
            flag: true
        })
    }

    render() {
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
            </div>
        )
    }
}