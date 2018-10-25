import React from "react";
import {Component} from "react";
import axios from "axios";

class Completeness extends Component {
    constructor(props){
        super(props);
        this.state = {value: 'Комплектность', completenessIsFull : this.props.isFull, activeClick: false};
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(event) {
            if(event.target.value === 'Full' || event.target.value === 'IsNotFull') {
                this.setState({value: event.target.value, activeClick: true});
                if((event.target.value === 'Full') !== this.state.completenessIsFull) {

                    axios.get(sessionStorage.getItem('URL') + '?func=nnsodwebui.setincomplete&Id=' + sessionStorage.getItem("ID") + '&isIncomplete=' + event.target.value)
                        .then((response) => {
                            if (response.data.errMsg.length > 0) {
                                alert(response.data.errMsg);
                                document.location.reload(true);
                            }
                            else {
                                this.setState({completenessIsFull: response.data.completenessIsFull});
                                document.location.reload(true);
                            }
                         })

                        .catch(error => {
                            alert(error);
                            document.location.reload(true);
                        });
                }
            }
    }

    render() {
            return (
                <React.Fragment>
                    <select className={"nnsod-actions-neutral"} value={this.state.value} onChange={this.handleChange}>
                        <option key="1" value="Completeness">Комплектность</option>
                        <option key="2" value="Full">Полный комлект</option>
                        <option key="3" value="IsNotFull">Неполный комплект</option>
                    </select>
                    <div className={"completeness"}>
                        <p className={'nnsodIsComplete'}>{this.state.completenessIsFull ? 'Полный комплект' : 'Неполный комплект'}</p>
                    </div>
                    <div className={"perenos"}></div>
                </React.Fragment>
            )
    }
}

export default Completeness
