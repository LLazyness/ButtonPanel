import * as React from "react";

const BasedOnExistButton = function () {
    const handleOpen = () => {
        window.open(sessionStorage.getItem('URL') +
            "?func=nnsodtaxmonitor.index&ID=" +
            sessionStorage.getItem('ID') +
            "&DocType=" + sessionStorage.getItem('DocType') +
            "&basedOnExistCard"
        );
    };

    return (
        <React.Fragment>
            <button className="nnsod-actions-neutral" type="button" onClick={handleOpen}>
                Создать на основании
            </button>
            <div className={"perenos"}/>
        </React.Fragment>
    )
};

export default BasedOnExistButton;