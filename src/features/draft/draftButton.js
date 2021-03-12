import * as React from "react";

const DraftButton = function () {
    const handleOpen = () => {
        window.open(sessionStorage.getItem('URL') + "?func=nnsodtaxmonitor.index&ID=" + sessionStorage.getItem('ID') + "&DocType=" + sessionStorage.getItem('DocType'));
    };

    return (
        <React.Fragment>
            <button className="nnsod-actions-neutral" type="button" onClick={handleOpen}>
                Черновик
            </button>
            <div className={"perenos"}/>
        </React.Fragment>
    )
};

export default DraftButton;