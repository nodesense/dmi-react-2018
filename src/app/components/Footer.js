import React from "react";

// just calls method to get v.dom
export default function Footer(props) {
    console.log("Footer render")

    // props should be read only
    // Error
   // props.year = 2020;

    return (
        <div>
            <hr />
            <p>Copyrights@ {props.title}, {props.year} </p>
        </div>
    )
}