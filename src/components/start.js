import React, { Component } from "react"

class Start extends Component {
    render() {
        return(
            <div onClick={()=>this.props.onClick()} className="first-key">{this.props.icon}</div>
        )
    }
}

export default Start;