import React from "react";
import {Component} from "react";

class UnlinkDocs extends Component {
    constructor(props){
        super(props);
        this.handleClick = this.handleClick.bind(this);

    }

    handleClick() {
        window.doUnlink(sessionStorage.getItem('URL'),sessionStorage.getItem('ID'));
    }
    render() {
        return (
            <React.Fragment>
                <div>
                    <input className="nnsod-actions-positive" type="button" onClick={this.handleClick} value="Отвязать документы в УС"/>
                </div>
                <div className={"perenos"}></div>
            </React.Fragment>
        )
    }
}

export default UnlinkDocs
