import React from "react";
import {Component} from "react";

class Suspend extends Component {
    handleClick = () => {
        window.Suspend(sessionStorage.getItem('URL'), sessionStorage.getItem('ID'));
    };

    render() {
        return (
            <React.Fragment>
                <input className="nnsod-actions-neutral" type="button" onClick={this.handleClick} value="Отложить"/>
                <div className={"copyKey"}>
                    <span className="showMessageSuspend">РК отложены</span>
                </div>
                <div className={"perenos"}/>
            </React.Fragment>
        )
    }
}

export default Suspend
