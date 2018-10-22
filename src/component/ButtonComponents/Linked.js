import React from "react";
import {Component} from "react";


class Linked extends Component {

    constructor(props){
        super(props);
        this.handleClick = this.handleClick.bind(this);

    }

    handleClick() {
        window.RegistryLinkedRks()
    }
    render() {
        return (
            <React.Fragment>
                <div>
                    <input className="nnsod-actions-neutral js-registryLinkedRks" type="button" onClick={this.handleClick} value="Связанные РК"/>
                </div>
                <div className={"perenos"}></div>
            </React.Fragment>
        )
    }
}

export default Linked
