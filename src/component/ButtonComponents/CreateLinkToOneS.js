import React from "react";
import {Component} from "react";

class CreateLinkToOneS extends Component {
    constructor(props){
        super(props);
        this.handleClick = this.handleClick.bind(this);

    }

   handleClick() {
        window.doCommitLink(sessionStorage.getItem('URL'),sessionStorage.getItem('ID'), sessionStorage.getItem('SUBTYPE'));
    }
    render() {
        return (
            <React.Fragment>
                <div>
                    <input className="nnsod-actions-positive" type="button" onClick={this.handleClick} value="Сформировать ссылку в УС"/>
                </div>
                <div className={"perenos"}></div>
            </React.Fragment>
        )
    }
}

export default CreateLinkToOneS
