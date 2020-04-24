import ReactModal from "react-modal";
import React from "react";

export default props => (
    <ReactModal
        isOpen={!!props.selectedMessage}
        contentLabel={props.selectedMessage}
        onRequestClose={props.clearOption}
        closeTimeoutMS={300}
        className="modal"
    >
        <h3 className="modal__title">Selected Option</h3>
        <p className="modal__body">{props.selectedMessage}</p>
        <button className="button" onClick={props.clearOption}>Done</button>
    </ReactModal>
);
