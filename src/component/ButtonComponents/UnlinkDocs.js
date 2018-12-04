import React from "react";
import {Component} from "react";

class UnlinkDocs extends Component {
     handleClick = () => {
        window.doUnlink(sessionStorage.getItem('URL'), sessionStorage.getItem('ID'));
    };

    render() {
        return (
            <React.Fragment>
                <input className="nnsod-actions-positive" type="button" onClick={this.handleClick}
                       value="Отвязать документы в УС"/>
                <div className={"perenos"}/>
            </React.Fragment>
        )
    }
}

export default UnlinkDocs
