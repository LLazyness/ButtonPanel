import React from "react";
import {Component} from "react";

class CreateComment extends Component {
    constructor(props){
        super(props);
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick() {
        window.CreateComment(sessionStorage.getItem('URL'),sessionStorage.getItem('ID'));
    }

    render() {
        return (
            <React.Fragment>
                <div>
                    <input className="nnsod-actions-neutral" type="button" onClick={this.handleClick} value="Создать комментарий"/>
                </div>
                <div className={"perenos"}></div>
            </React.Fragment>
        )
    }
}

export default CreateComment
