import React from "react";
import {Component} from "react";

class CopyKey extends Component {
    handleClick = () => {
        window.copyKeyToClipboard(sessionStorage.getItem('URL'), sessionStorage.getItem('ID'), sessionStorage.getItem('NODENAME'));
    };

    render() {
        return (
            <React.Fragment>
                <input className="nnsod-actions-neutral" type="button" onClick={this.handleClick}
                       value="Скопировать ключ"/>
                <div className={"copyKey"}>
                    <span className={"copyKeyToClipboardResult"}>Ключ скопирован</span>
                </div>
                <div className={"perenos"}></div>
            </React.Fragment>
        )
    }
}

export default CopyKey
