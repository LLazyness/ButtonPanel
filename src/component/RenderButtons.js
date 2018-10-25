import React from "react";
import axios from "axios";
import Completeness from './ButtonComponents/Completeness';
import Payment from './ButtonComponents/Payment';
import ProcessingInSAPHCM from './ButtonComponents/ProcessingInSAPHCM';
import CreateLinkToOneS from './ButtonComponents/CreateLinkToOneS';
import UnlinkDocs from './ButtonComponents/UnlinkDocs';
import CopyKey from './ButtonComponents/CopyKey';
import CreateDuplicate from './ButtonComponents/CreateDuplicate';
import CreateComment from './ButtonComponents/CreateComment';
import ReturnToIncoming from './ButtonComponents/ReturnToIncoming';
import SendForReview from "./ButtonComponents/SendForReview";
import Delete from './ButtonComponents/Delete';
import PickForProcessing from './ButtonComponents/PickForProcessing';
import SetPerformer from './ButtonComponents/SetPerformer';
import PrintCorrectionSheet from './ButtonComponents/PrintCorrectionSheet';
import PrintConnectList from './ButtonComponents/PrintConnectList';
import Publish from './ButtonComponents/Publish';
import AcceptOriginal from './ButtonComponents/AcceptOriginal';
import BankStatementCardRegistryLink from './ButtonComponents/BankStatementCardRegistryLink';
import Suspend from './ButtonComponents/Suspend';
import ReturnToWork from './ButtonComponents/ReturnToWork';
import Refuse from './ButtonComponents/Refuse';
import Linked from './ButtonComponents/Linked';
import Print from './ButtonComponents/Print';
import FillingStorageAttributes from './ButtonComponents/FillingStorageAttributes';
import AddPersonalNumberList from "./ButtonComponents/AddPersonalNumberList";
import RecievedOriginals from './ButtonComponents/RecievedOriginals';
import XRefConnect from './ButtonComponents/XRefConnect';


class RenderButtons extends React.Component{
    constructor(props){
        super(props);

        this.state = {status: false};
        axios({
            method:'get',
            url:sessionStorage.getItem('URL') + '?func=nnsodwebui.displaybuttons&Id=' + sessionStorage.getItem("ID")
        })
            .then((response) => {
                this.setState({ result: response.data, status: true });
            });
    }

    collectButton = () => {
        let result = [];
        const components = {
            "completeness": <Completeness isFull={this.state.result.completeness.isFull}/>,
            "createlinktoones": <CreateLinkToOneS/>,
            "unlinkdocs": <UnlinkDocs/>,
            "copykey": <CopyKey/>,
            "createduplicate": <CreateDuplicate/>,
            "createcomment": <CreateComment/>,
            "returntoincoming": <ReturnToIncoming/>,
            "sendforreview": <SendForReview/>,
            "delete": <Delete/>,
            "pickforprocessing": <PickForProcessing/>,
            "setperformer": <SetPerformer/>,
            "printcorrectionsheet": <PrintCorrectionSheet/>,
            "publish": <Publish/>,
            "acceptoriginal": <AcceptOriginal/>,
            "bankstatementcardregistrylink": <BankStatementCardRegistryLink/>,
            "suspend": <Suspend/>,
            "returntowork": <ReturnToWork/>,
            "refuse": <Refuse/>,
            "addpersonalnumberlist": <AddPersonalNumberList/>,
            "linked": <Linked/>,
            "print": <Print/>,
            "fillingstorageattributes": <FillingStorageAttributes/>,
            "payment": <Payment isPaid={this.state.result.payment.isPaid}/>,
            "processinginsaphcm": <ProcessingInSAPHCM isProcessed={this.state.result.processinginsaphcm.isProcessed}/>,
            "printconnectlist": <PrintConnectList/>,
            "recievedoriginals": <RecievedOriginals/>,
            "xrefconnect": <XRefConnect/>
        };
        for(var item in this.state.result){
           if(this.state.result[item].show){
                result.push(<div>{components[item]}</div>);
           }
        }
        return result;
    };

    render() {
        if (!this.state.status) {
            return (
                <img src={sessionStorage.getItem("LOADER")} />
            )
        }
        else {
            return (
                <div>
                    {this.collectButton()}
                </div>
            )
        }
    }
}

export default RenderButtons


