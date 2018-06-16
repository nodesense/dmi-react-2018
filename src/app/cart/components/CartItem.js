import React from "react";

export default class CartItem extends React.Component {
    constructor(props) {
        super(props)

        this.state = {

        }
    }
  
    render() {
        let item = this.props.item;
        console.log("CartItem Render ", item.id);
        return (
           <tr>
               <td>{item.name}</td>
               <td>{item.price}</td>
               <td>
                        {item.qty}
                </td>
               <td>{item.qty * item.price}</td>
               <td> 
                    <button onClick={ () => {} }>
                        Update
                   </button>
                   <button onClick={ () =>  this.props.removeItem(item.id) }>
                        Delete
                   </button>
               </td>
           </tr>
        )
    }
}