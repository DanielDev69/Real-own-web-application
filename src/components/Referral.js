import React, { useState} from 'react'

const Referral = () => {
    const [referralCode, setReferralCode] = useState("");
    const [referralLink, setReferralLink] = useState("");
    const [error, setError] = useState("");

    const handleReferralCodeChange = (e) => {
        setReferralCode(e.target.value);
    }

    const generateReferralLink = (e) => {
        e.preventDefault();
        if(!referralCode) {
            setError('Please enter a referral code');
            return;
        }
        const baseURL ="https://example.com/referral";
        const referralLink = `${baseURL}/${referralCode}`;
        setReferralLink(referralLink);
        setError('');
    }

    const copyToClipboard = () => {
        navigator.clipboard.writeText(referralLink);
    }
  return (
    <div>
        <form onSubmit={generateReferralLink}>
            <label>
                Referral Code:
                <input type="text" value={referralCode}
                onChange={handleReferralCodeChange}/>
            </label>
            <button type="submit">Generate ReferralLink</button>
            {error && <p>{error}</p>}
        </form>
        {referralLink &&(
            <div>
                <p>Referral Link:</p>
                <input type="text" value={referralLink} readOnly />
                <button onClick={copyToClipboard}>Copy</button>
            </div>
        )}
    </div>
  )
}

export default Referral