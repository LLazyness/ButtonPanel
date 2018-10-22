import React from "react";
import {Component} from "react";

class BankStatementCardRegistryLink extends Component {
    constructor(props){
        super(props);
        this.handleClick = this.handleClick.bind(this);

    }

    handleClick() {
        window.popupWindow(sessionStorage.getItem('URL') + '?func=nnsodwebui.showbankstatementdocumentsregistry&nodeId='+ sessionStorage.getItem('ID'), '', 800, 500, 'yes', 'yes');
    }
    render() {
        return (
            <React.Fragment>
                <div>
                    <input className="nnsod-actions-neutral" type="button" onClick={this.handleClick} value="Открыть реестр платежных документов"/>
                </div>
                <div className={"perenos"}></div>
            </React.Fragment>
        )
    }
}

export default BankStatementCardRegistryLink
