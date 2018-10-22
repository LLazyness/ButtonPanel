import React from "react";
import {Component} from "react";

class ReturnToWork extends Component {
    constructor(props){
        super(props);
        this.handleClick = this.handleClick.bind(this);

    }

    handleClick() {
        window.ReturnToWork(sessionStorage.getItem('URL'), sessionStorage.getItem('ID'));
    }
    render() {
        return (
            <React.Fragment>
                <div>
                    <input className="nnsod-actions-neutral" type="button" onClick={this.handleClick} value="Вернуть в работу"/>
                </div>
                <div className={"copyKey"}>
                    <span className="showMessageReturnToWork">РК успешно возвращены</span>
                </div>
                <div className={"perenos"}></div>
            </React.Fragment>
        )
    }
}

export default ReturnToWork
