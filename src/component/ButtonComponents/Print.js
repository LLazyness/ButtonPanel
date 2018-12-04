import React from "react";
import {Component} from "react";

class Print extends Component {
    handleClick = () => {
        window.RegistryPrint()
    };

    render() {
        return (
            <React.Fragment>
                <input className="nnsod-actions-neutral js-registryPrint" type="button" onClick={this.handleClick}
                       value="Распечатать"/>
                <div className={"perenos"}/>
            </React.Fragment>
        )
    }
}

export default Print
