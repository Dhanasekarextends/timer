import React, { Component } from "react";

class Reset extends Component {
    render() {
        return(
            <div onClick={this.props.onClick} className="reset-key"><i className="fa fa-stop rest" aria-hidden="true"></i></div>
        )
    }
}

export default Reset;