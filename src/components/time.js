import React, { Component } from "react";

class Time extends Component {
    render() {
        return (
            <div>
                <div className="value-top">{this.props.hrs} : {this.props.min} : {this.props.sec}</div>
                <div className="value-bot"> {this.props.sec} </div>
            </div>
        )
    }
}

export default Time;