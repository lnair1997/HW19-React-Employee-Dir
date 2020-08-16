import React from "react";
import "./style.css";

function Navbar(props) {
    return (
        <div className="row">
            <input onChange={props.findName}
                value={props.inputValue}
                type="text" className="form-control" placeholder="Search for Name" id="search" />
        </div>
    )
};

export default Navbar;