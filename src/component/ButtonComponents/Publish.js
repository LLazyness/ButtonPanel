import React from "react";
import {Component} from "react";

class Publish extends Component {
    constructor(props){
        super(props);
        this.handleClick = this.handleClick.bind(this);

    }

    handleClick() {
        window.Publish(sessionStorage.getItem('URL'), sessionStorage.getItem('ID'), false);
    }

    render() {
        return (
            <React.Fragment>
                <div>
                    <input className="nnsod-actions-neutral" type="button" onClick={this.handleClick} value="Опубликовать"/>
                </div>
                <div className={"perenos"}></div>
            </React.Fragment>
        )
    }
}

export default Publish
