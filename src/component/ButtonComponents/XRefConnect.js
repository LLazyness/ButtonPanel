import React from "react";
import {Component} from "react";

class XRefConnect extends Component {
    constructor(props){
        super(props);
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick() {
        window.getListRelatedRK(sessionStorage.getItem('URL'));
    }
    render() {
        return (
            <React.Fragment>
                <div>
                    <input className="nnsod-actions-neutral" type="button" onClick={this.handleClick} value="Открыть связанную Регистрационную карточку"/>
                </div>
                <div className={"perenos"}></div>
            </React.Fragment>
        )
    }
}

export default XRefConnect
