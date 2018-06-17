// Events, State apis

import React from 'react';

import store from "../store";

export default class Home extends React.Component {
    
    constructor(props) {
        super(props)
 
    }


    incr() {
        let action = {
            type: 'INCREMENT',
            payload: {
                value: 1
            }
        }

        //Sync
        store.dispatch(action) // calls reducer
        console.log("Counter ", store.getState())
         
    }

     
     decr = () => {
         let action = {
            type: 'DECREMENT',
            payload: {
                value: 1
            }
        }
        
        //Sync
        store.dispatch(action) // calls reducer
        console.log("Counter ", store.getState())
     }

     componentDidMount() {
         this.unsubscribeFn = store.subscribe( () => {
             // this.forceUpdate();
             this.setState({})
         })
     }

     componentWillUnmount() {
         console.log("home will unmount");
         this.unsubscribeFn()// to avoid memory leak
     }

    render() {
         
        let likes = store.getState().counter;

        console.log("Home Render ", likes)

        return (
            <div>
                <h2>Home</h2>

                <span>Likes {likes}</span>

                <button onClick={() => this.incr() }>
                    Incr
                </button>

                 
                <button onClick={this.decr}>
                    Decr
                </button>

            </div>
        )
    }
}