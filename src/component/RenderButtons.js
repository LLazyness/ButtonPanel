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

    render() {
        if (!this.state.status) {
            return (
                <img src={sessionStorage.getItem("LOADER")} />
            )
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
                    {this.state.result.unlinkdocs.show &&
                    <div>
                        <UnlinkDocs />
                    </div>
                    }
                    {this.state.result.copykey.show &&
                    <div>
                        <CopyKey />
                    </div>
                    }
                    {this.state.result.createduplicate.show &&
                    <div>
                        <CreateDuplicate />
                    </div>
                    }
                    {this.state.result.createcomment.show &&
                    <div>
                        <CreateComment />
                    </div>
                    }
                    {this.state.result.returntoincoming.show &&
                    <div>
                        <ReturnToIncoming />
                    </div>
                    }
                    {this.state.result.sendforreview.show &&
                    <div>
                        <SendForReview />
                    </div>
                    }
                    {this.state.result.delete.show &&
                    <div>
                        <Delete />
                    </div>
                    }
                    {this.state.result.pickforprocessing.show &&
                    <div>
                        <PickForProcessing />
                    </div>
                    }
                    {this.state.result.setperformer.show &&
                    <div>
                        <SetPerformer />
                    </div>
                    }
                    {this.state.result.printcorrectionsheet.show &&
                    <div>
                        <PrintCorrectionSheet />
                    </div>
                    }
                    {this.state.result.printconnectlist.show &&
                    <div>
                        <PrintConnectList />
                    </div>
                    }
                    {this.state.result.publish.show &&
                    <div>
                        <Publish />
                    </div>
                    }
                    {this.state.result.acceptoriginal.show &&
                    <div>
                        <AcceptOriginal />
                    </div>
                    }
                    {this.state.result.bankstatementcardregistrylink.show &&
                    <div>
                        <BankStatementCardRegistryLink />
                    </div>
                    }
                    {this.state.result.suspend.show &&
                    <div>
                        <Suspend />
                    </div>
                    }
                    {this.state.result.returntowork.show &&
                    <div>
                        <ReturnToWork />
                    </div>
                    }
                    {this.state.result.refuse.show &&
                    <div>
                        <Refuse />
                    </div>
                    }
                    {this.state.result.linked.show &&
                    <div>
                        <Linked />
                    </div>
                    }
                    {this.state.result.print.show &&
                    <div>
                        <Print />
                    </div>
                    }
                    {this.state.result.fillingstorageattributes.show &&
                    <div>
                        <FillingStorageAttributes />
                    </div>
                    }
                    {this.state.result.fillingstorageattributes.show &&
                    <div>
                        <FillingStorageAttributes />
                    </div>
                    }
                    {this.state.result.fillingstorageattributes.show &&
                    <div>
                        <FillingStorageAttributes />
                    </div>
                    }
                    {this.state.result.addpersonalnumberlist.show &&
                    <div>
                        <AddPersonalNumberList />
                    </div>
                    }
                    {this.state.result.recievedoriginals.show &&
                    <div>
                        <RecievedOriginals />
                    </div>
                    }
                    {this.state.result.xrefconnect.show &&
                    <div>
                        <XRefConnect />
                    </div>
                    }
                </div>
            )
        }
    }
}

export default RenderButtons


