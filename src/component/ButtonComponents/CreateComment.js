import React from "react";
import {Component} from "react";

class CreateComment extends Component {
    handleClick = () => {
        window.CreateComment(sessionStorage.getItem('URL'), sessionStorage.getItem('ID'));
    };

    render() {
        return (
            <React.Fragment>
                <input className="nnsod-actions-neutral" type="button" onClick={this.handleClick}
                       value="Добавить комментарий"/>
                <div className={"perenos"}/>
            </React.Fragment>
        )
    }
}

export default CreateComment
