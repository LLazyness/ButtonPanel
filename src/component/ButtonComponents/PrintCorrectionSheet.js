import React from "react";
import {Component} from "react";

class PrintCorrectionSheet extends Component {
    constructor(props){
        super(props);
        this.handleClick = this.handleClick.bind(this);

    }

    handleClick() {
        window.printCorrectionSheet(sessionStorage.getItem('URL'), sessionStorage.getItem('ID'), false);
    }
    render() {
        return (
            <React.Fragment>
                <div>
                    <input className="nnsod-actions-neutral" type="button" onClick={this.handleClick} value="Распечатать корректировочный лист"/>
                </div>
                <div className={"perenos"}></div>
            </React.Fragment>
        )
    }
}

export default PrintCorrectionSheet
