import React from "react";
import {Component} from "react";

class ErrorRegistry extends Component {
    handleClick = () => {
        window.openErrorRegistry(sessionStorage.getItem('ID'));
    };

    render() {
        return (
            <React.Fragment>
                <input className="nnsod-actions-neutral errorRegistry" type="button" onClick={this.handleClick}
                       value="Реестр необработанных РК"/>
                <div className={"perenos"}></div>
            </React.Fragment>
        )
    }
}

export default ErrorRegistry
