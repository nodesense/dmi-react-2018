// Events, State apis

import React from 'react';

export default class Home extends React.Component {
    
    constructor(props) {
        super(props)

        //State, Mutable, owned by this component
        // initialize state
        // state is a keyword
        this.state = {
            likes: 0
        }
    }

    incr() {
        console.log("Incr before ", this.state.likes)

        //BAD, directly mutating state
        this.state.likes++;

        console.log("Incr after ", this.state.likes)

        //BAD
        // keyword, trigger react to call render method
        this.forceUpdate()

        //console.trace()
    }

    //ES.NEXT solution for this
    // create function only once
    // GOOD
     decr = () => {
        console.log("Decr before ", this.state.likes)

        //Good
        // react keyword, to set/change the state
        // calls render method, after state merge
        // Async
        this.setState({
            likes: this.state.likes - 1
        }, () => {
            // called after merge state, called after render
            console.log("Set State callback ", this.state.likes);
        } )

        console.log("Decr after ", this.state.likes)
     }

    render() {
         
        console.log("Home Render ", this.state.likes)

        return (
            <div>
                <h2>Home</h2>

                <span>Likes {this.state.likes}</span>

                <button onClick={() => this.incr() }>
                    Incr
                </button>

                {/* JSX Comment 
                    this.decr is es.next
                */}
                <button onClick={this.decr}>
                    Decr
                </button>

            </div>
        )
    }
}