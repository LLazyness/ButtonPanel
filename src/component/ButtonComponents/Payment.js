import React from "react";
import {Component} from "react";
import axios from "axios";

class Payment extends Component {
    constructor(props){
        super(props);
        this.handleChange = this.handleChange.bind(this);
        this.state = {value: "Оплата", paymentIsPaid: this.props.isPaid}
    }

    handleChange(event) {
        this.setState({value: event.target.value});
        if(event.target.value === 'isPaid' || event.target.value === 'isNotPaid') {
            if ((event.target.value === 'isPaid') !== this.state.paymentIsPaid) {
                const val = event.target.value === 'isPaid' ? 1 : 0;
                axios.get(sessionStorage.getItem('URL') + '?func=nnsodwebui.payment&ids=' + sessionStorage.getItem("ID") + '&value=' + val)
                    .then((response) => {
                        if (response.data.errMsg.length > 0) {
                            alert(response.data.errMsg);
                            document.location.reload(true);
                        }
                        else {
                            this.setState({paymentIsPaid: response.data.paymentIsPaid});
                            document.location.reload(true);
                        }
                    })
                    .catch(error => {
                        alert(error);
                        document.location.reload(true);
                    });
            }
            this.setState({value: "Оплата"})
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
                <div className={"perenos"}></div>
            </React.Fragment>
        )
    }
}

export default Payment
