import React from "react";
import {Component} from "react";

class PrintInventory extends Component {
    handleClick = () => {
        window.PrintInventory()
    };

    render() {
        return (
            <React.Fragment>
                <input className="nnsod-actions-neutral js-PrintInventory" type="button" onClick={this.handleClick}
                       value="Распечатать"/>
                <div className={"perenos"}/>
            </React.Fragment>
        )
    }
}

export default PrintInventory
