import React, {useEffect} from 'react';
import {useSelector, useDispatch} from "react-redux";

import Completeness from '../component/ButtonComponents/Completeness';
import Payment from '../component/ButtonComponents/Payment';
import ProcessingInSAPHCM from '../component/ButtonComponents/ProcessingInSAPHCM';
import CreateLinkToOneS from '../component/ButtonComponents/CreateLinkToOneS';
import UnlinkDocs from '../component/ButtonComponents/UnlinkDocs';
import CopyKey from '../component/ButtonComponents/CopyKey';
import CreateDuplicate from '../component/ButtonComponents/CreateDuplicate';
import CreateComment from '../component/ButtonComponents/CreateComment';
import ReturnToIncoming from '../component/ButtonComponents/ReturnToIncoming';
import SendForReviewButton from "../features/sendForReview/sendForReviewButton";
import Delete from '../component/ButtonComponents/Delete';
import PickForProcessing from '../component/ButtonComponents/PickForProcessing';
import SetPerformer from '../component/ButtonComponents/SetPerformer';
import PrintCorrectionSheet from '../component/ButtonComponents/PrintCorrectionSheet';
import PrintConnectList from '../component/ButtonComponents/PrintConnectList';
import Publish from '../component/ButtonComponents/Publish';
import AcceptOriginal from '../component/ButtonComponents/AcceptOriginal';
import BankStatementCardRegistryLink from '../component/ButtonComponents/BankStatementCardRegistryLink';
import Suspend from '../component/ButtonComponents/Suspend';
import ReturnToWork from '../component/ButtonComponents/ReturnToWork';
import Refuse from '../component/ButtonComponents/Refuse';
import Linked from '../component/ButtonComponents/Linked';
import Print from '../component/ButtonComponents/Print';
import FillingStorageAttributes from '../component/ButtonComponents/FillingStorageAttributes';
import AddPersonalNumbersList from "../component/ButtonComponents/AddPersonalNumbersList";
import ReceivedOriginals from '../component/ButtonComponents/ReceivedOriginals';
import XRefConnect from '../component/ButtonComponents/XRefConnect';
import EditInternalInventoryReport from '../component/ButtonComponents/EditInternalInventoryReport';
import PrintInventory from '../component/ButtonComponents/PrintInventory';
import ErrorRegistry from '../component/ButtonComponents/ErrorRegistry';
import RemoveFromInventory from '../component/ButtonComponents/RemoveFromInventory'

import KTmessage from "../component/MessageComponents/KTmessage";
import ConfidentiallyMessage from "../component/MessageComponents/ConfidentiallyMessage";
import OutdatedMessage from "../component/MessageComponents/OutdatedMessage";
import SendForReviewMass from "../component/ButtonComponents/SendForReviewMass";
import ShowOnReviewButton from "../features/showOnReview/showOnReviewButton";
import {fetchGet} from "../middleware/assyncActions";
import DuplicateButton from "../features/duplicate/duplicateButton";

const RenderButtons = () => {
    const apiReducer = useSelector(state => state.apiReducer);
    const serverData = useSelector(state => state.buttonReducer.buttons);
    const isInitialize = useSelector(state => state.buttonReducer.isInitialize);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchGet());
    }, []);

    if (apiReducer.isLoading) {
        return (
            <img src={sessionStorage.getItem("LOADER")} alt={"Loader"}/>
        )
    } else if (isInitialize) {
        return (
            <React.Fragment>
                {serverData.hr &&
                <ConfidentiallyMessage/>
                }
                {serverData.kt &&
                <KTmessage/>
                }
                {serverData.outdated &&
                <OutdatedMessage/>
                }
                <div>
                    {serverData.completeness.show &&
                    <Completeness isFull={serverData.completeness.isFull}/>
                    }
                    {serverData.createlinktoones.show &&
                    <CreateLinkToOneS/>
                    }
                    {serverData.unlinkdocs.show &&
                    <UnlinkDocs/>
                    }
                    {serverData.copykey.show &&
                    <CopyKey/>
                    }
                    {serverData.createduplicate.show &&
                    <CreateDuplicate/>
                    }
                    {serverData.recievedoriginals.show &&
                    <ReceivedOriginals/>
                    }
                    {serverData.createcomment.show &&
                    <CreateComment/>
                    }
                    {serverData.returntoincoming.show &&
                    <ReturnToIncoming/>
                    }
                    {serverData.sendforreview.show &&
                    <SendForReviewMass/>
                    }
                    {serverData.delete.show &&
                    <Delete/>
                    }
                    {serverData.pickforprocessing.show &&
                    <PickForProcessing/>
                    }
                    {serverData.setperformer.show &&
                    <SetPerformer/>
                    }
                    {serverData.printcorrectionsheet.show &&
                    <PrintCorrectionSheet/>
                    }
                    {serverData.printconnectlist.show &&
                    <PrintConnectList/>
                    }
                    {serverData.publish.show &&
                    <Publish/>
                    }
                    {serverData.acceptoriginal.show &&
                    <AcceptOriginal/>
                    }
                    {serverData.bankstatementcardregistrylink.show &&
                    <BankStatementCardRegistryLink/>
                    }
                    {serverData.suspend.show &&
                    <Suspend/>
                    }
                    {serverData.returntowork.show &&
                    <ReturnToWork/>
                    }
                    {serverData.refuse.show &&
                    <Refuse/>
                    }
                    {serverData.linked.show &&
                    <Linked/>
                    }
                    {serverData.print.show &&
                    <Print/>
                    }
                    {serverData.fillingstorageattributes.show &&
                    <FillingStorageAttributes/>
                    }
                    {serverData.payment.show &&
                    <Payment isPaid={serverData.payment.isPaid}/>
                    }
                    {serverData.processinginsaphcm.show &&
                    <ProcessingInSAPHCM isProcessed={serverData.processinginsaphcm.isProcessed}/>
                    }
                    {serverData.addpersonalnumberlist.show &&
                    <AddPersonalNumbersList/>
                    }
                    {serverData.xrefconnect.show &&
                    <XRefConnect/>
                    }
                    {serverData.editinventoryreport.show &&
                    <EditInternalInventoryReport/>
                    }
                    {serverData.printinventory.show &&
                    <PrintInventory/>
                    }
                    {serverData.errorregistry.show &&
                    <ErrorRegistry/>
                    }
                    {serverData.removefrominventory.show &&
                    <RemoveFromInventory/>
                    }
                    {serverData.hrsendforreview.show &&
                    <SendForReviewButton/>
                    }
                    {serverData.documentsonreview.show &&
                        <ShowOnReviewButton />
                    }
                    {serverData.duplicate.show &&
                        <DuplicateButton />
                    }
                </div>
            </React.Fragment>
        )
    } else {
        return (<div>Проблема при загрузке кнопок</div>)
    }
};

export default RenderButtons;
