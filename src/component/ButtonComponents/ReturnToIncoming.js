import React from "react";
import {Component} from "react";

class ReturnToIncoming extends Component {
    handleClick = () => {
        window.ReturnToIncoming(sessionStorage.getItem('URL'), sessionStorage.getItem('ID'));
    };

    render() {
        return (
            <React.Fragment>
                <input className="nnsod-actions-neutral" type="button" onClick={this.handleClick}
                       value="Вернуть во входящие"/>
                <div className={"perenos"}/>
            </React.Fragment>
        )
    }
}

export default ReturnToIncoming
