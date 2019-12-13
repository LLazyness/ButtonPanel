import React from "react";
import {Component} from "react";

class RemoveFromInventory extends Component {
    handleClick = () => {
        window.RemoveFromInventory()
    };

    render() {
        return (
            <React.Fragment>
                <input className="nnsod-actions-neutral js-UpdateInventory" type="button" onClick={this.handleClick}
                       value="Изъять из описи дел"/>
                <div className={"perenos"}/>
            </React.Fragment>
        )
    }
}

export default RemoveFromInventory
