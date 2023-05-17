import React, { useState} from 'react'

const ChangePin = () => {
    const [currentPin, setCurrentPin] = useState("");
    const [newPin, setNewPin] = useState("");
    const [confirmNewPin, setConfirmNewPin] = useState("");

    const handleChangeCurrentPin = (e) => {
        setCurrentPin(e.target.value);
    }

    const handleChangeNewPin = (e) => {
        setNewPin(e.target.value);
    }

    const handleChangeConfirmNewPin = (e) => {
        setConfirmNewPin(e.target.value);
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        if(newPin !== confirmNewPin) {
            alert('New Pin and Confirm New Pin do not match!');
            return;
        }

        const url = 'https://api.example.com/users/${userId}';
        const data = {
            currentPin: currentPin,
            newPin: newPin
        };

        fetch(url,{
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        })

        .then(response => response.json())
        .then(data => {
            console.log('Pin has been successfully updated:', data);
            alert('Your Pin has been successfully updated!');
            setCurrentPin("");
            setNewPin("");
            setConfirmNewPin("");
        })
        .catch(error => {
            console.error('Pin update failed:', error);
            alert('There was an error updating your Pin. Please try again later.');
        });
        
        alert('Your Pin has been successfully updated!');
        setCurrentPin("");
        setNewPin("");
        setConfirmNewPin("");
    }

  return (
    <div>
        <h2>Change Pin</h2>
        <form onSubmit={handleSubmit}>
            <div>
                <label htmlFor="current">Current Pin:</label>
                <input type="password" id="currentPin" value={currentPin}
                onChange={handleChangeCurrentPin} />
            </div>
            <div>
                <label htmlFor="newPin">New Pin:</label>
                <input type="password" id="newPin" value={newPin} 
                onChange={handleChangeNewPin} />
            </div>
            <div>
                <label htmlFor="confirmNewPin">Confirm New Pin:</label>
                <input type="password" id="confirmNewPin" value={confirmNewPin}
                onChange={handleChangeConfirmNewPin} />
            </div>
            <button type="submit">Update</button>
        </form>
    </div>
  );
}

export default ChangePin;