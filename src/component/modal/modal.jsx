import React, { useState } from "react";
import "./modal.scss";

const Modall = ({text}) => {
    const [isActiveModal, setIsActiveModal] = useState(false);

    return (
        <div className="modall">
            <div className="modalBtn" onClick={() => setIsActiveModal(!isActiveModal)}></div>
            <div className={isActiveModal ? "modalOut active" : "modalOut"} onClick={() => setIsActiveModal(false)}>
                <div className="blur"></div>
                <div className="content" onClick={e => e.stopPropagation()}>
                    <span className="modalText">{text}</span>
                    <div className="out" onClick={() => setIsActiveModal(!isActiveModal)}>Chykmak</div>
                </div>
            </div>
        </div>
    )
}

export default Modall;

