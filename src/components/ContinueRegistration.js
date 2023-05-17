// import React, { useState } from "react";
import "./ContinueRegistration.css"

const FormInput = ( {formData, setFormData} ) => {
    

    return(
        <div className="ContinueReg">
            <h2>Form Input</h2>
            <p>Please fill out the following information:</p>
            <form>
                <label htmlFor="firstName">First Name:</label>
                <input
                type="text"
                id="firstName"
                name="firstName"
                value={formData.firstName}
                onChange={(event) => setFormData({...formData, firstName : event.target.value}
                )}
                />

                <label htmlFor="lastName">Last Name:</label>
                <input
                type="text"
                id="lastName"
                name="lastName"
                value={formData.lastName}
                onChange={(event) => setFormData({...formData, lastName : event.target.value}
                )}
                />

                <label htmlFor="phoneNumber">Phone Number:</label>
                <input
                type="tel"
                id="phoneNumber"
                name="phoneNumber"
                value={formData.phoneNumber}
                onChange={(event) => setFormData({...formData, phoneNumber : event.target.value}
                )}
                />

                <label htmlFor="address">Address:</label>
                <input
                type="text"
                id="address"
                name="address"
                value={formData.address}
                onChange={(event) => setFormData({...formData, address : event.target.value}
                )}
                />

                <label htmlFor="city">City:</label>
                <input
                type="text"
                id="city"
                name="city"
                value={formData.city}
                onChange={(event) => setFormData({...formData, city : event.target.value}
                    )}
                />

                <label htmlFor="state">State:</label>
                <input
                type="text"
                id="state"
                name="state"
                value={formData.state}
                onChange={(event) => setFormData({...formData, state : event.target.value}
                )}
                />

                <label htmlFor="zipCode">Zip Code:</label>
                <input
                type="text"
                id="zipCode"
                name="zipCode"
                value={formData.zipCode}
                onChange={(event) => setFormData({...formData, zipCode : event.target.value}
                )}
                />

                <label htmlFor="dateOfBirth">Date Of Birth:</label>
                <input
                type="text"
                id="dateOfBirth"
                name="dateOfBirth"
                value={formData.dateOfBirth}
                onChange={(event) => setFormData({...formData, dateOfBirth : event.target.value}
                )}
                />
            </form>
        </div>
    );
}

export default FormInput;