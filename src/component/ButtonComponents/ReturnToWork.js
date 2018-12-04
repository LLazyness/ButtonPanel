import React from "react";
import {Component} from "react";

class ReturnToWork extends Component {
    handleClick = () =>{
        window.ReturnToWork(sessionStorage.getItem('URL'), sessionStorage.getItem('ID'));
    };

    render() {
        return (
            <React.Fragment>
                <input className="nnsod-actions-neutral" type="button" onClick={this.handleClick}
                       value="Вернуть в работу"/>
                <div className={"copyKey"}>
                    <span className="showMessageReturnToWork">РК успешно возвращены</span>
                </div>
                <div className={"perenos"}/>
            </React.Fragment>
        )
    }
}

export default ReturnToWork
