import React from "react";

//create object, calls render to get v.dom
export default class Header extends React.Component {
    
    constructor(props) {
        super(props)
        console.log("Header created", props)
    }
    
    // keyword
    // create virtual dom, return v dom
    render() {
        console.log("Header render")
        // props is a keyword
        let title = this.props.title;

        return (
            <div>
                <h1> {title} </h1>
                <hr />
            </div>
        )
    }
}