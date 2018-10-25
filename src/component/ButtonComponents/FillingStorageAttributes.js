import React from "react";
import {Component} from "react";

class FillingStorageAttributes extends Component {
    constructor(props){
        super(props);
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick() {
        window.FillingStorageAttributes(sessionStorage.getItem("URL"), sessionStorage.getItem("ID"))
    }

    render() {
        return (
            <React.Fragment>
                <div>
                    <input className="nnsod-actions-neutral js-registryPrint" type="button" onClick={this.handleClick} value="Заполнение атрибутов хранения"/>
                </div>
                <div className={"perenos"}></div>
            </React.Fragment>
        )
    }
}

export default FillingStorageAttributes
