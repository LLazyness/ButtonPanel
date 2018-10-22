import React from "react";
import {Component} from "react";

class Suspend extends Component {
    constructor(props){
        super(props);
        this.handleClick = this.handleClick.bind(this);

    }

    handleClick() {
        window.Suspend(sessionStorage.getItem('URL'), sessionStorage.getItem('ID'));
    }
    render() {
        return (
            <React.Fragment>
                <div>
                    <input className="nnsod-actions-neutral" type="button" onClick={this.handleClick} value="Отложить"/>
                </div>
                <div className={"copyKey"}>
                    <span className="showMessageSuspend">РК отложены</span>
                </div>
                <div className={"perenos"}></div>
            </React.Fragment>
        )
    }
}

export default Suspend
