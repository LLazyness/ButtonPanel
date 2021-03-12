import React from "react";
import {Component} from "react";

class AcceptOriginal extends Component {
    handleClick = () => {
        window.AcceptOriginals(sessionStorage.getItem('URL'), sessionStorage.getItem('ID'), false);
    };

    render() {
        return (
            <React.Fragment>
                <input className="nnsod-actions-positive" type="button" onClick={this.handleClick}
                       value="Принять ПД"/>
                <div className={"perenos"}/>
            </React.Fragment>
        )
    }
}

export default AcceptOriginal
