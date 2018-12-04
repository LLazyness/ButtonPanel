import React from "react";
import {Component} from "react";

class BankStatementCardRegistryLink extends Component {
    handleClick = () => {
        window.popupWindow(sessionStorage.getItem('URL') + '?func=nnsodwebui.showbankstatementdocumentsregistry&nodeId=' + sessionStorage.getItem('ID'), '', 800, 500, 'yes', 'yes');
    };

    render() {
        return (
            <React.Fragment>
                <input className="nnsod-actions-neutral" type="button" onClick={this.handleClick}
                       value="Открыть реестр платежных документов"/>
                <div className={"perenos"}/>
            </React.Fragment>
        )
    }
}

export default BankStatementCardRegistryLink
