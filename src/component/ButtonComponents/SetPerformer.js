import React from "react";
import {Component} from "react";

class SetPerformer extends Component {
    constructor(props){
        super(props);
        this.handleClick = this.handleClick.bind(this);

    }

    handleClick() {
        window.SetPerformer(sessionStorage.getItem('ID'));
    }
    render() {
        return (
            <React.Fragment>
                <div>
                    <input className="nnsod-actions-neutral" type="button" onClick={this.handleClick} value="Назначить исполнителя"/>
                </div>
                <div className={"perenos"}></div>
            </React.Fragment>
        )
    }
}

export default SetPerformer
