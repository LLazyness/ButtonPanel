import React from "react";
import {Component} from "react";

class XRefConnect extends Component {
    handleClick = () => {
        window.getListRelatedRK(sessionStorage.getItem('ID'));
    };

    render() {
        return (
            <React.Fragment>
                <input className="nnsod-actions-neutral" type="button" onClick={this.handleClick}
                       value="Открыть связанные Регистрационные карточки"/>
                <div className={"perenos"}></div>
            </React.Fragment>
        )
    }
}

export default XRefConnect
