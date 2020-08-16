import React from "react";

function Navbar(props) {
    return (
        <div class="row">
            <input onChange={props.findName}
            value={props.inputValue}
            style = {{width: "25%"}} type="text" className="form-control mt-5" placeholder="Search for Name" />
        </div>
    )
};

export default Navbar;