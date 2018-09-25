import React from "react";
import {Component} from "react";
import axios from "axios";

class Payment extends Component {
    constructor(props){
        super(props);
        this.handleChange = this.handleChange.bind(this);
        this.state = {value: "Оплата"}
    }

    handleChange(event) {
        this.setState({value: event.target.value});
        if(event.target.value === 'isPaid' || event.target.value === 'isNotPaid') {

            axios.get(sessionStorage.getItem('URL') + '?func=nnsodwebui.payment&ids=' + sessionStorage.getItem("ID") + '&value=' + event.target.value)
                .then((response) => {
                    if(response.data.errMsg.length > 0){
                        alert (response.data.errMsg)
                    }
                    else {
                        this.setState({paymentIsPaid: response.data.paymentIsPaid});
                    }
                    this.setState({value: "Оплата"});
                })
                .catch(error => {
                    alert(error);
                    this.setState({value: "Оплата"})
                });
        }
    }

    render() {
        return (
            <React.Fragment>
                <select className={"nnsod-actions-neutral"}  value={this.state.value} onChange={this.handleChange}>
                    <option key="1" value="Payment">Оплата</option>
                    <option key="2" value="isPaid">Оплачено</option>
                    <option key="3" value="isNotPaid">Не оплачено</option>
                </select>
                <div className={"payment"}>
                    <p className={'nnsodIsPayment'}>{this.state.paymentIsPaid ? 'Оплачено' : 'Не оплачено'}</p>
                </div>
                <br />
            </React.Fragment>
        )
    }
}

export default Payment
