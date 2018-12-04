import React from "react";
import {Component} from "react";

class PrintConnectList extends Component {
    handleClick = () => {
        window.printContactSheet(sessionStorage.getItem('URL'), sessionStorage.getItem('ID'), true);
    };

    render() {
        return (
            <React.Fragment>
                <input className="nnsod-actions-neutral" type="button" onClick={this.handleClick}
                       value="Распечатать лист связи"/>
                <div className={"perenos"}/>
            </React.Fragment>
        )
    }
}

export default PrintConnectList
