import React from "react";
import {Component} from "react";

class SendForReview extends Component {
    handleClick = () => {
        window.doSendForReview('true', 'NnSodSendForReview', 'nnsodwebui.sendforreview', sessionStorage.getItem('ID'), sessionStorage.getItem('ESCAPEREQUEST'));
    };

    render() {
        return (
            <React.Fragment>
                <input className="nnsod-actions-negative" type="button" onClick={this.handleClick}
                       value="Вернуть на доработку"/>
                <div className={"perenos"}/>
            </React.Fragment>
        )
    }
}

export default SendForReview
