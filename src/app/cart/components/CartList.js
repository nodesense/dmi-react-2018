import React from "react";

export default class CartList extends React.Component {
    constructor(props) {
        super(props)
    }
  
    render() {
        console.log("CartList Render ");
        return (
            <div>
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
                       
                   </tbody>
               </table>
            </div>
        )
    }
}