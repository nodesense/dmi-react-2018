import React from "react";

// Pure component, implments shouldComponentUpdate
// it compare props and state

export default class CartItem extends React.PureComponent {
    constructor(props) {
        super(props)

        // Initialize state from props
        this.state = {
            qty: props.item.qty
        }
    }

    updateQty = (e) => {
        let input = e.target

        this.setState({
            qty: parseInt(input.value) || 0
        })
    }
  
    render() {
        let item = this.props.item;
        console.log("CartItem Render ", item.id);
        return (
           <tr>
               <td>{item.name}</td>
               <td>{item.price}</td>
               <td>
                    <input value={this.state.qty} 
                           onChange={this.updateQty} 
                    />
                </td>
               <td>{item.qty * item.price}</td>
               <td> 
                    <button onClick={ () => this.props
                                            .updateItem(item.id, this.state.qty)} >
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