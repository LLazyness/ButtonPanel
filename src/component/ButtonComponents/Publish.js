import React from "react";
import {Component} from "react";

class Publish extends Component {
    handleClick = () => {
        window.Publish(sessionStorage.getItem('URL'), sessionStorage.getItem('ID'), false);
    };

    render() {
        return (
            <React.Fragment>
                <input className="nnsod-actions-neutral" type="button" onClick={this.handleClick} value="Опубликовать"/>
                <div className={"perenos"}/>
            </React.Fragment>
        )
    }
}

export default Publish
