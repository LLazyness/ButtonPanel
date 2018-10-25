import React from "react";
import {Component} from "react";

class RecievedOriginals extends Component {
    constructor(props){
        super(props);
        this.handleClick = this.handleClick.bind(this);

    }

    handleClick() {
        window.recieved_originals(sessionStorage.getItem('URL'));
    }

    render() {
        return (
            <React.Fragment>
                <div>
                    <input className="nnsod-actions-neutral" type="button" onClick={this.handleClick} value="Поступили оригиналы"/>
                </div>
                <div className={"perenos"}></div>
            </React.Fragment>
        )
    }
}

export default RecievedOriginals
