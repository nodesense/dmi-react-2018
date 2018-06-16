import React from "react";

import CartItem from "./CartItem"

export default class CartList extends React.Component {
    constructor(props) {
        super(props)
    }
  
    shouldComponentUpdate(nextProps, nextState) {
        console.log("cart list should update")

        return this.props.items != nextProps.items
    }


    render() {
        console.log("CartList Render ");
        
        let items = this.props.items;

        return (
            <div>
                <h2>Cart List</h2>

               <table>
                   <thead>
                       <tr>
                           <th>Name</th>
                           <th>Price</th>
                           <th>Qty</th>
                           <th>Total</th>
                           <th>Remove</th>
                       </tr>
                   </thead>

                   <tbody>

                       {
                           items.map( item => (
                               <CartItem item={item} 
                                         key={item.id} 
                                         removeItem={this.props.removeItem}
                                         updateItem={this.props.updateItem}
                                         />
                           ))
                       }

                   </tbody>
               </table>
            </div>
        )
    }
}