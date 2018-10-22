import React from "react";
import {Component} from "react";

class Print extends Component {
    constructor(props){
        super(props);
        this.handleClick = this.handleClick.bind(this);

    }

    handleClick() {
        window.RegistryPrint()
    }

    render() {
        return (
            <React.Fragment>
                <div>
                    <input className="nnsod-actions-neutral js-registryPrint" type="button" onClick={this.handleClick} value="Распечатать"/>
                </div>
                <div className={"perenos"}></div>
            </React.Fragment>
        )
    }
}

export default Print
