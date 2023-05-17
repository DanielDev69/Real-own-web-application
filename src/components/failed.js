import React from "react";
import Modal from "react-modal";

const PaymentFailureModal = (props) => {
    return (
        <Modal isOpen={props.isOpen}
        onRequestClose={props.handleClose}
        ariaHideApp={false}
        style={{
            content:{
                top: '50%',
                left: '50%',
                right: 'auto',
                bottom: 'auto',
                marginRight: '-50%',
                transform: 'translate(-50%,-50%)',
                background: '#ffcdd2',
                color: '#b71c1c',
                textAlign: 'center',
                padding: '20px',
                borderRadius: '10px',
            },
            overlay:{
                backgroundColor: 'rgba(0,0,0,0.5)',
            },
        }}
        >
            <h2>Payment Failure</h2>
            <p>Unfortunate, your payment has failed. Please try again or contact support for assistance</p>
            <button onClick={props.handleClose}>Close</button>
        </Modal>
    );
};

export default PaymentFailureModal;