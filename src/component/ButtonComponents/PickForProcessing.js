import React from "react";
import {Component} from "react";

class PickForProcessing extends Component {
    constructor(props){
        super(props);
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick() {
        window.AssignToMe(sessionStorage.getItem('URL'), sessionStorage.getItem('ID'));
    }

    render() {
        return (
            <React.Fragment>
                <div>
                    <input className="nnsod-actions-positive" type="button" onClick={this.handleClick} value="Взять в работу"/>
                </div>
                <div className={"perenos"}></div>
            </React.Fragment>
        )
    }
}

export default PickForProcessing
