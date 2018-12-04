import React from "react";
import {Component} from "react";

class CreateLinkToOneS extends Component {
    handleClick = () => {
        window.doCommitLink(sessionStorage.getItem('URL'), sessionStorage.getItem('ID'), sessionStorage.getItem('SUBTYPE'));
    };

    render() {
        return (
            <React.Fragment>
                <input className="nnsod-actions-positive" type="button" onClick={this.handleClick}
                       value="Сформировать ссылку в УС"/>
                <div className={"perenos"}></div>
            </React.Fragment>
        )
    }
}

export default CreateLinkToOneS
