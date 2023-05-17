import React, { useState } from "react";
import { Modal, Button } from "react-bootstrap";
import "/.successful.css/;"

const PaymentSuccess = ({ show, handleClose }) => {
    return(
        <Modal show={show} onHide={handleClose}>
            <Modal.Header closeButton>
                <Modal.Title>Payment Successful</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <p>Your payment has been proccessed successfully.
                    Thank you for your purchase!
                </p>
            </Modal.Body>
            <Modal.Footer>
                <Button variant="secondary" onClick={handleClose}>Close</Button>
            </Modal.Footer>
        </Modal>
    );
};

export default PaymentSuccess;