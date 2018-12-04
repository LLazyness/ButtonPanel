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
import AddPersonalNumbersList from "./ButtonComponents/AddPersonalNumbersList";
import ReceivedOriginals from './ButtonComponents/ReceivedOriginals';
import XRefConnect from './ButtonComponents/XRefConnect';


class RenderButtons extends React.Component {
    constructor(props) {
        super(props);

        this.state = {status: false};
    }

    componentDidMount() {
        axios({
            method: 'get',
            url: sessionStorage.getItem('URL') + '?func=nnsodwebui.displaybuttons&Id=' + sessionStorage.getItem("ID")
        })
            .then((response) => {
                this.setState({result: response.data, status: true});
            });
    }

    render() {
        if (!this.state.status) {
            return (
                <img src={sessionStorage.getItem("LOADER")}/>
            )
        } else {
            return (
                <div>
                    {this.state.result.completeness.show &&
                    <Completeness isFull={this.state.result.completeness.isFull}/>
                    }
                    {this.state.result.payment.show &&
                    <Payment isPaid={this.state.result.payment.isPaid}/>
                    }
                    {this.state.result.processinginsaphcm.show &&
                    <ProcessingInSAPHCM isProcessed={this.state.result.processinginsaphcm.isProcessed}/>
                    }
                    {this.state.result.createlinktoones.show &&
                    <CreateLinkToOneS/>
                    }
                    {this.state.result.unlinkdocs.show &&
                    <UnlinkDocs/>
                    }
                    {this.state.result.copykey.show &&
                    <CopyKey/>
                    }
                    {this.state.result.createduplicate.show &&
                    <CreateDuplicate/>
                    }
                    {this.state.result.createcomment.show &&
                    <CreateComment/>
                    }
                    {this.state.result.returntoincoming.show &&
                    <ReturnToIncoming/>
                    }
                    {this.state.result.sendforreview.show &&
                    <SendForReview/>
                    }
                    {this.state.result.delete.show &&
                    <Delete/>
                    }
                    {this.state.result.pickforprocessing.show &&
                    <PickForProcessing/>
                    }
                    {this.state.result.setperformer.show &&
                    <SetPerformer/>
                    }
                    {this.state.result.printcorrectionsheet.show &&
                    <PrintCorrectionSheet/>
                    }
                    {this.state.result.printconnectlist.show &&
                    <PrintConnectList/>
                    }
                    {this.state.result.publish.show &&
                    <Publish/>
                    }
                    {this.state.result.acceptoriginal.show &&
                    <AcceptOriginal/>
                    }
                    {this.state.result.bankstatementcardregistrylink.show &&
                    <BankStatementCardRegistryLink/>
                    }
                    {this.state.result.suspend.show &&
                    <Suspend/>
                    }
                    {this.state.result.returntowork.show &&
                    <ReturnToWork/>
                    }
                    {this.state.result.refuse.show &&
                    <Refuse/>
                    }
                    {this.state.result.linked.show &&
                    <Linked/>
                    }
                    {this.state.result.print.show &&
                    <Print/>
                    }
                    {this.state.result.fillingstorageattributes.show &&
                    <FillingStorageAttributes/>
                    }
                    {this.state.result.fillingstorageattributes.show &&
                    <FillingStorageAttributes/>
                    }
                    {this.state.result.fillingstorageattributes.show &&
                    <FillingStorageAttributes/>
                    }
                    {this.state.result.addpersonalnumberlist.show &&
                    <AddPersonalNumbersList/>
                    }
                    {this.state.result.recievedoriginals.show &&
                    <ReceivedOriginals/>
                    }
                    {this.state.result.xrefconnect.show &&
                    <XRefConnect/>
                    }
                </div>
            )
        }
    }
}

export default RenderButtons


