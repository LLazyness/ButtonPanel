import React from "react";
import {Component} from "react";

class FillingStorageAttributes extends Component {
    handleClick = () => {
        window.FillingStorageAttributes(sessionStorage.getItem("URL"), sessionStorage.getItem("ID"))
    };

    render() {
        return (
            <React.Fragment>
                <input className="nnsod-actions-neutral js-registryPrint" type="button" onClick={this.handleClick}
                       value="Заполнение атрибутов хранения"/>
                <div className={"perenos"}/>
            </React.Fragment>
        )
    }
}

export default FillingStorageAttributes
