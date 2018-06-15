import React from "react";

import CartItem from "./CartItem"

export default class CartList extends React.Component {
    constructor(props) {
        super(props)
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
                               <CartItem item={item} key={item.id} />
                           ))
                       }

                   </tbody>
               </table>
            </div>
        )
    }
}