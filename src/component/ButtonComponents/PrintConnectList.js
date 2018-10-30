import React from "react";
import {Component} from "react";

class PrintConnectList extends Component {
    constructor(props){
        super(props);
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick() {
        window.printContactSheet(sessionStorage.getItem('URL'), sessionStorage.getItem('ID'), true);
    }

    render() {
        return (
            <React.Fragment>
                <div>
                    <input className="nnsod-actions-neutral" type="button" onClick={this.handleClick} value="Распечатать лист связи"/>
                </div>
                <div className={"perenos"}></div>
            </React.Fragment>
        )
    }
}

export default PrintConnectList
