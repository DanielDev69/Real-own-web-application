import React, { useState } from 'react';

function OrderPopup() {
    const [slots, setSlots] = useState(1)
    const [duration, setDuration] = useState(1)

    const handleSlotsDecrement = () => {
        setSlots(slots - 1 >= 1 ? slots - 1 : 1);
    };

    const handleSlotsIncrement = () => {
        setSlots(slots + 1);
    };

    const handleDurationDecrement = () => {
        setDuration(duration - 1 >= 1 ? duration - 1 : 1);
    };

    const handleDurationIncrement = () => {
        setDuration(duration + 1);
    };

    const expectedReturns = slots * duration * 1000;
    
    const handleBuyClick = () => {
        //code to handle buy button click
    };

    return(
        <div className="order-popup">
            <div className="order-popup-title">
                Place Your Order
            </div>
            <div className="order-popup-inputs">
                <div className="order-popup-input">
                    <div className="order-popup-input-title">
                        Number of Slots:
                    </div>
                    <div className="order-popup-input-value">
                        <button className="order-popup-increment-button"
                        onClick={handleSlotsDecrement}>-</button>
                        <input type="number" className="order-popup-number-input"
                        value={slots} min="1" readOnly />
                        <button className="order-popup-increment-button"
                        onClick={handleSlotsIncrement}>+</button>
                    </div>
                </div>
                <div className="order-popup-input">
                    <div className="order-popup-input-title">
                        Expected Returns:
                    </div>
                    <div className="order-popup-input-value">
                        {`$${expectedReturns}`}
                    </div>
                </div>
            </div>
            <div className="order-popup-buttons">
                <button className="order-popup-buy-button"
                onClick={handleBuyClick}>Buy</button>
            </div>
        </div>
    );
}
