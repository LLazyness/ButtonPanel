import React from "react";
import {Component} from "react";

class AddPersonalNumbersList extends Component {
    handleClick = () => {
        window.AddPersonalNumbersList(sessionStorage.getItem('URL'), sessionStorage.getItem('ID'));
    };

    render() {
        return (
            <React.Fragment>
                <input className="nnsod-actions-neutral" type="button" onClick={this.handleClick}
                       value="Список добавлен"/>
                <div className={"perenos"}/>
            </React.Fragment>
        )
    }
}

export default AddPersonalNumbersList
