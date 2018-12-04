import React from "react";
import {Component} from "react";

class PickForProcessing extends Component {
    handleClick = () => {
        window.AssignToMe(sessionStorage.getItem('URL'), sessionStorage.getItem('ID'));
    };

    render() {
        return (
            <React.Fragment>
                <input className="nnsod-actions-positive" type="button" onClick={this.handleClick}
                       value="Взять в работу"/>
                <div className={"perenos"}/>
            </React.Fragment>
        )
    }
}

export default PickForProcessing
