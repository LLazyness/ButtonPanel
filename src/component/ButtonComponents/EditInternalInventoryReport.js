import React from "react";
import {Component} from "react";

class EditInternalInventoryReport extends Component {
    handleClick = () => {
        window.getReport();
    };

    render() {
        return (
            <React.Fragment>
                <input className="nnsod-actions-neutral" type="button" onClick={this.handleClick}
                       value="Редактировать"/>
                <div className={"perenos"}></div>
            </React.Fragment>
        )
    }
}

export default EditInternalInventoryReport
