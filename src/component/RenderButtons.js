import React from "react";
import axios from "axios";


class RenderButtons extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            res: []
        }
    }

    componentDidMount(){
        axios({
            method:'get',
            url:'https://reqres.in/api/products/3',

        })
            .then((response) => {
                const res = response.data;
                this.setState({ res });
                console.log(this.state.res.data.color)
            });

    }

    handlePaymentClick() {

    }

    handleProcessingSapHCMClick() {

    }

    handleLinkDocumentClick() {

    }

    handleUnlinkDocumentClick() {

    }

    handleCopyKeyLinkClick(){

    }

    handleCreateDuplicateClick(){

    }

    handleCreateCommentClick(){

    }

    handleGenerateRegistryClick(){

    }

    handleReturnToIncomingClick(){

    }

    handleAddPersonalNumbersListClick(){

    }

    handleSendForReviewClick(){

    }

    handleDeleteClick(){

    }

    handlePickForProcessingClick(){

    }

    handleSetPerformerClick(){

    }

    handlePrintCorrectionSheetClick(){

    }

    handlePrintContactSheetClick(){

    }

    handlePublishClick(){

    }

    handleAcceptOriginalsClick(){

    }

    handleBankStatementCardRegistryLinkClick(){

    }

    handleSuspendClick(){

    }

    handleReturnToWorkClick(){

    }

    handleRefuseClick(){

    }

    handleLinkedClick(){

    }

    handlePrintClick(){

    }

    handleFillingStorageAttributesClick(){

    }

    handleReceivedOriginalsClick(){

    }

    handleShowXRefConnectClick(){

    }
    //<!-- todo:: move handler to component -->

    render() {
        const data = this.state.res.data;
        return (
            <div>
                {data.completeness.show &&
                    <Completeness />
                }

                {data.payment.show &&
                    <Payment />
                }

                {data.processingsaphcm.show &&
                    <ProcessingSAPHCM />
                }

                {data.linkdocument.show &&
                    <LinkDocument />
                }

                {data.unlinkdocument.show &&
                    <UnlinkDocument />
                }

                {data.copykeylink.show &&
                    <CopyKeyLink />
                }

                {data.createduplicate.show &&
                    <CreateDuplicate />
                }

                {data.createcomment.show &&
                    <CreateComment />
                }

                {data.generateregistry.show &&
                    <GenerateRegistry />
                }

                {data.returntoincoming.show &&
                    <ReturnToIncoming />
                }

                {data.addpersonalnumberslist.show &&
                    <AddPersonalNumbersList />
                }

                {data.sendforreview.show &&
                    <SendForReview />
                }

                {data.delete.show &&
                    <Delete />
                }

                {data.pickforprocessing.show &&
                    <PickForProcessing />
                }

                {data.setperformer.show &&
                <SetPerformer />
                }

                {data.printcorrectionsheet.show &&
                <PrintCorrectionSheet />
                }

                {data.publish.show &&
                <Publish />
                }

                {data.acceptoriginals.show &&
                <AcceptOriginals />
                }

                {data.bankstatementcardregistrylink.show &&
                <BankStatementCardRegistryLink />
                }

                {data.suspend.show &&
                <Suspend />
                }

                {data.returntowork.show &&
                <ReturnToWork />
                }

                {data.refuse.show &&
                <Refuse />
                }

                {data.linked.show &&
                <Linked />
                }

                {data.print.show &&
                <Print />
                }

                {data.fillingstorageattributes.show &&
                <FillingStorageAttributes />
                }

                {data.recievedoriginals.show &&
                <RecievedOriginals />
                }

                {data.showxrefconnect.show &&
                <ShowXRefConnect />
                }
            </div>
        )
    }

}

export default RenderButtons
