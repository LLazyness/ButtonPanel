import React from "react";
import {Component} from "react";

class SetPerformer extends Component {
    handleClick = () => {
        window.SetPerformer(sessionStorage.getItem('ID'));
    };

    render() {
        return (
            <React.Fragment>
                <input className="nnsod-actions-neutral" type="button" onClick={this.handleClick}
                       value="Назначить исполнителя"/>
                <div className={"perenos"}/>
            </React.Fragment>
        )
    }
}

export default SetPerformer
