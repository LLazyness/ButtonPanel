import React from "react";
import {Component} from "react";
import axios from "axios";

class ProcessingInSAPHCM extends Component {
    constructor(props){
        super(props);
        this.handleChange = this.handleChange.bind(this);
        this.state = {value: "Обработка в SAP HCM", isProcessed: this.props.isProcessed}
    }

    handleChange(event) {
        this.setState({value: event.target.value});
        if(event.target.value === 'isProcessed' || event.target.value === 'isNotProcessed') {
            if((event.target.value === 'isProcessed') !== this.state.isProcessed)
            {
                const val = event.target.value === 'isProcessed' ? 1 : 0;
                axios.get(sessionStorage.getItem('URL') + '?func=nnsodwebui.ProcessingInSAPHCM&ids=' + sessionStorage.getItem("ID") + '&value=' + val)
                    .then((response) => {
                        if (response.data.errMsg.length > 0) {
                            alert(response.data.errMsg)
                        }
                        else {
                            this.setState({isProcessed: response.data.isProcessed});
                        }
                     })
                    .catch(error => {
                        alert(error);
                    });
            }
            this.setState({value: "Обработка в SAP HCM"})
        }
    }

    render() {
        return (
            <React.Fragment>
                <select className={"nnsod-actions-neutral"}  value={this.state.value} onChange={this.handleChange}>
                    <option key="1" value="ProcessingInSAPHCM">Обработка в SAP HCM</option>
                    <option key="2" value="isProcessed">Обработано</option>
                    <option key="3" value="isNotProcessed">Не обработано</option>
                </select>
                <div className={"ProcessingInSAPHCM"}>
                    <p className={'nnsodIsPayment'}>{this.state.isProcessed ? 'Обработано' : 'Не обработано'}</p>
                </div>
                <div className={"perenos"}></div>
            </React.Fragment>
        )
    }
}

export default ProcessingInSAPHCM
