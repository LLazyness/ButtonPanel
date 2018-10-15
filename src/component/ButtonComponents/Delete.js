import React from "react";
import {Component} from "react";

class Delete extends Component {
    constructor(props){
        super(props);
        this.handleClick = this.handleClick.bind(this);

    }

    handleClick() {
        window.doDelete('NnSodDelete','nnsodwebui.delete',sessionStorage.getItem('ID'),sessionStorage.getItem('ESCAPEREQUEST'));
    }
    render() {
        return (
            <React.Fragment>
                <div>
                    <input className="nnsod-actions-negative" type="button" onClick={this.handleClick} value="Удалить"/>
                </div>
                <div className={"perenos"}></div>
            </React.Fragment>
        )
    }
}

export default Delete
