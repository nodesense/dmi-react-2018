import React from "react";

import CartList from "./CartList"
import CartSummary from "./CartSummary"

import { Button, Alert, DropdownButton, MenuItem, ButtonToolbar} from 'react-bootstrap';


const BUTTONS = ['Default', 'Primary', 'Success', 'Info', 'Warning', 'Danger'];

function renderDropdownButton(title, i) {
  return (
    <DropdownButton
      bsStyle={title.toLowerCase()}
      title={title}
      key={i}
      id={`dropdown-basic-${i}`}
    >
      <MenuItem eventKey="1">Action</MenuItem>
      <MenuItem eventKey="2">Another action</MenuItem>
      <MenuItem eventKey="3" active>
        Active Item
      </MenuItem>
      <MenuItem divider />
      <MenuItem eventKey="4">Separated link</MenuItem>
    </DropdownButton>
  );
}


export default class Cart extends React.Component {
     // Creation Cycle 1
    constructor(props) {
        super(props)

        this.state = {
            items: [
                {id: 1, name: "Product 1", price: 100, qty: 1}
            ],

            // Derived data, from items
            amount: 0,
            count: 0,

            message: '',
            flag: true
        }
        console.log("Cart Created")

    }

    // creation life cycle 2
    componentWillMount() {
        console.log("Cart will mount")
        // pre-compute
        this.recalculate(this.state.items)
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

        //GOOD, immutable
        let items = [...this.state.items, item]

        // setState is async
        this.setState({
            items
        }, () => {
            // called after render
            console.log("Add item set state callback")
            // this.recalculate()
        })

        this.recalculate(items)
    }
  
    removeItem = (id) => {
        console.log("ID is ", id)

        let items = this.state
                        .items.filter(item => item.id != id)

        this.setState({items})
        this.recalculate(items)

    }

    updateItem = (id, qty) => {
        console.log(id, qty)
        let items = this.state.items.map( item => {
            if (item.id == id) {
                return {...item, qty: qty}
            } else {
                return item
            }
        })

        this.setState({items})
        this.recalculate(items)
    }

    empty = () => {
        this.setState( (prevState, props) => {
            return {items: [], 
                    count: 0, 
                    amount: 0};
          });
    }

    // amount, count to be recalculated
    recalculate(items) {
        //let items = this.state.items;

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


    dummyRefresh2 = () => {
        console.log("Refresh2 called")
        this.setState({
            temp: 10
        })
    }

    dummyRefresh3 = () => {
        console.log("Refresh3 called")
        this.setState({
            temp3: 30
        })
    }


    dummyRefresh = () => {
        console.log("Refresh called")
        this.setState({
            flag: true
        })

        this.setState({
            message: 'Refreshing now 1'
        })

        this.setState({
            flag: false
        })

        this.setState({
            message: 'Refreshing done'
        })

    }

    // shouldComponentUpdate(nextProps, nextState) {
    //     console.log("Next State ", nextState)
    //     console.log("Current State", this.state)
    //     return true;
    // }

    render() {
        console.log("Cart render", this.state)


        const buttonsInstance = (
            <ButtonToolbar>{BUTTONS.map(renderDropdownButton)}</ButtonToolbar>
        );
        
        return (
            <div>
                <h2>Cart</h2>

                        <div className="alert alert-success" role="alert">
                          Saved Successfully
                        </div>

                        <Alert bsStyle="success">
                            <strong>Saved Successfully</strong>  
                            </Alert>

                        {buttonsInstance}

                <Button onClick={this.addItem}>
                    Add Item
                </Button>

                <Button onClick={this.empty}>
                    Empty
                </Button>
 

                <div  onClick={this.dummyRefresh3}>
                <div  onClick={this.dummyRefresh2}>
                <Button onClick={this.dummyRefresh}>
                    Refresh
                </Button>
                </div>
                </div>

                <CartList   items={this.state.items}
                            removeItem={(id) => this.removeItem(id)} 
                            updateItem={this.updateItem}   
                >
                </CartList>

                <CartSummary amount={this.state.amount}
                             count={this.state.count}   
                >
                </CartSummary>
            </div>
        )
    }
}