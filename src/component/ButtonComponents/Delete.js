import React from "react";
import {Component} from "react";

class Delete extends Component {
    handleClick = () => {
        window.doDelete('NnSodDelete', 'nnsodwebui.delete', sessionStorage.getItem('ID'), sessionStorage.getItem('ESCAPEREQUEST'));
    };

    render() {
        return (
            <React.Fragment>
                <input className="nnsod-actions-negative" type="button" onClick={this.handleClick} value="Удалить"/>
                <div className={"perenos"}/>
            </React.Fragment>
        )
    }
}

export default Delete
