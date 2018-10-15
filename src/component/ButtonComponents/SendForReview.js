import React from "react";
import {Component} from "react";

class SendForReview extends Component {
    constructor(props){
        super(props);
        this.handleClick = this.handleClick.bind(this);

    }

    handleClick() {
        window.doSendForReview('true', 'NnSodSendForReview', 'nnsodwebui.sendforreview', sessionStorage.getItem('ID'), sessionStorage.getItem('ESCAPEREQUEST'));
    }
    render() {
        return (
            <React.Fragment>
                <div>
                    <input className="nnsod-actions-neutral" type="button" onClick={this.handleClick} value="Вернуть на доработку"/>
                </div>
                <div className={"perenos"}></div>
            </React.Fragment>
        )
    }
}

export default SendForReview
