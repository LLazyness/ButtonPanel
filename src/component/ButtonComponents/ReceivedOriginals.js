import React from "react";
import {Component} from "react";

class ReceivedOriginals extends Component {
    handleClick = () => {
        window.recieved_originals(sessionStorage.getItem('URL'));
    };

    render() {
        return (
            <React.Fragment>
                <input className="nnsod-actions-neutral" type="button" onClick={this.handleClick}
                       value="Поступили оригиналы"/>
                <div className={"perenos"}/>
            </React.Fragment>
        )
    }
}

export default ReceivedOriginals
