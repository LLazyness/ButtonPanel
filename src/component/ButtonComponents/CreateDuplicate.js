import React from "react";
import {Component} from "react";

class CreateDuplicate extends Component {
    handleClick = () => {
        window.CreateDuplicate(sessionStorage.getItem('URL'), sessionStorage.getItem('ID'));
    };

    render() {
        return (
            <React.Fragment>
                <input className="nnsod-actions-neutral" type="button" onClick={this.handleClick}
                       value="Создать дубликат"/>
                <div className={"perenos"}/>
            </React.Fragment>
        )
    }
}

export default CreateDuplicate
