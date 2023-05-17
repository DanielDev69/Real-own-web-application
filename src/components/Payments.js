import React, { useState } from "react";

const FundYourAccount = () => {
    const [paymentMethod, setPaymentMethod] = useState("credit");
    const [amount, setAmount] = useState(0);

    const handlePaymentMethodChange = (e) => {
        setPaymentMethod(e.target.value);
    };

    const handleAmountChange = (e) => {
        setAmount(e.target.value);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Payment Method', paymentMethod);
        console.log('Amount', amount);
    };

    return(
        <form onSubmit={handleSubmit}>
            <div>
                <label htmlFor="amount">Amount</label>
                <input type="number"
                id="amount"
                value={amount}
                onChange={handleAmountChange} />
            </div>
            <div>
                <label htmlFor="paymentMethod">paymentMethod</label>
                <div>
                    <input type="radio"
                    id="credit"
                    value="credit"
                    checked={paymentMethod === 'credit'}
                    onChange={handlePaymentMethodChange} />
                    <label htmlFor="credit">Credit card</label>
                </div>
                <div>
                    <input type="radio"
                    id="debit"
                    value="debit"
                    checked={paymentMethod === 'debit'}
                    onChange={handlePaymentMethodChange} />
                    <label htmlFor="debit">Debit card</label>
                </div>
            </div>
            <button type="submit">Make a Payment</button>
        </form>
    );
};

export default FundYourAccount;