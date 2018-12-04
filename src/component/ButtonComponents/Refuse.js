import React from "react";
import {Component} from "react";

class Refuse extends Component {
    handleClick = () => {
        window.Refuse(sessionStorage.getItem('URL'), sessionStorage.getItem('ID'));
    };

    render() {
        return (
            <React.Fragment>
                <input className="nnsod-actions-neutral" type="button" onClick={this.handleClick} value="Отклонить ПД"/>
                <div className={"perenos"}/>
            </React.Fragment>
        )
    }
}

export default Refuse
