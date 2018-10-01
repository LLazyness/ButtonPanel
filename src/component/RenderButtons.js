import React from "react";
import axios from "axios";
import Completeness from './ButtonComponents/Completeness'
import Payment from './ButtonComponents/Payment'
import ProcessingInSAPHCM from './ButtonComponents/ProcessingInSAPHCM'
import CreateLinkToOneS from './ButtonComponents/CreateLinkToOneS'

class RenderButtons extends React.Component{
    constructor(props){
        super(props);

        this.state = {status: false};
        console.log(this.state.status);
    }

    componentDidMount(){
        axios({
            method:'get',
            url:sessionStorage.getItem('URL') + '?func=nnsodwebui.displaybuttons&Id=' + sessionStorage.getItem("ID")
        })
            .then((response) => {

                this.setState({ result: response.data, status: true });
                console.log(this.state.status);
            });
    }

    render() {
        console.log(this.state.status);
        if (!this.state.status) {
            return <div>Loading...</div>;
        }
        else {
            return (
                <div>
                    {this.state.result.completeness.show &&
                    <div>
                        <Completeness isFull={this.state.result.completeness.isFull} />
                    </div>
                    }
                    {this.state.result.payment.show &&
                    <div>
                        <Payment isPaid={this.state.result.payment.isPaid} />
                    </div>
                    }
                    {this.state.result.processinginsaphcm.show &&
                    <div>
                        <ProcessingInSAPHCM isProcessed={this.state.result.processinginsaphcm.isProcessed}/>
                    </div>
                    }
                    {this.state.result.createlinktoones.show &&
                    <div>
                        <CreateLinkToOneS />
                    </div>
                    }
                </div>
            )
        }
    }
}

export default RenderButtons
