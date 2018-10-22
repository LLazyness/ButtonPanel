import React from "react";
import {Component} from "react";

class AcceptOriginal extends Component {
    constructor(props){
        super(props);
        this.handleClick = this.handleClick.bind(this);

    }

    handleClick() {
        window.AcceptOriginals(sessionStorage.getItem('URL'), sessionStorage.getItem('ID'), false);
    }
    render() {
        return (
            <React.Fragment>
                <div>
                    <input className="nnsod-actions-neutral" type="button" onClick={this.handleClick} value="Принять оригиналы"/>
                </div>
                <div className={"perenos"}></div>
            </React.Fragment>
        )
    }
}

export default AcceptOriginal
