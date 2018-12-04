import React from "react";
import {Component} from "react";

class PrintCorrectionSheet extends Component {
    handleClick = () => {
        window.printCorrectionSheet(sessionStorage.getItem('URL'), sessionStorage.getItem('ID'), false);
    };

    render() {
        return (
            <React.Fragment>
                <input className="nnsod-actions-neutral" type="button" onClick={this.handleClick}
                       value="Распечатать корректировочный лист"/>
                <div className={"perenos"}/>
            </React.Fragment>
        )
    }
}

export default PrintCorrectionSheet
