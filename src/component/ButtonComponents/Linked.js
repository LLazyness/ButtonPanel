import React from "react";
import {Component} from "react";


class Linked extends Component {
    handleClick = () => {
        window.RegistryLinkedRks()
    };

    render() {
        return (
            <React.Fragment>
                <input className="nnsod-actions-neutral js-registryLinkedRks" type="button" onClick={this.handleClick}
                       value="Связанные РК"/>
                <div className={"perenos"}/>
            </React.Fragment>
        )
    }
}

export default Linked
