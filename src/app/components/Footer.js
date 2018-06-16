import React from "react";

import PropTypes from "prop-types";

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

//Keywords

Footer.propTypes = {
    title: PropTypes.string,
    year: PropTypes.number.isRequired // mandatory
}

//keyword
Footer.defaultProps = {
    title: 'React App'
}