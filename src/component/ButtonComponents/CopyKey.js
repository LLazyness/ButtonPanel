import React from "react";
import {Component} from "react";

class CopyKey extends Component {
    constructor(props){
        super(props);
        this.handleClick = this.handleClick.bind(this);

    }

    handleClick() {
        window.copyKeyToClipboard(sessionStorage.getItem('URL'),sessionStorage.getItem('ID'), sessionStorage.getItem('NODENAME'));
    }
    render() {
        return (
            <React.Fragment>
                <div>
                    <input className="nnsod-actions-neutral" type="button" onClick={this.handleClick} value="Скопировать ключ"/>
                </div>
                <div className={"copyKey"}>
                    <span className={"copyKeyToClipboardResult"}>Ключ скопирован</span>
                </div>
                <div className={"perenos"}></div>
            </React.Fragment>
        )
    }
}

export default CopyKey
