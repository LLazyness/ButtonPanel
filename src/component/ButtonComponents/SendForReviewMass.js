import React from "react";

const SendForReviewMass = () => {
    const handleClick = () => {
        window.doSendForReview('true', 'NnSodSendForReview', 'nnsodwebui.sendforreview', sessionStorage.getItem('ID'), sessionStorage.getItem('ESCAPEREQUEST'));
    };

    return (
        <React.Fragment>
            <input className="nnsod-actions-negative" type="button" onClick={handleClick}
                   value="Вернуть на доработку"/>
            <div className={"perenos"}/>
        </React.Fragment>
    )
};

export default SendForReviewMass
