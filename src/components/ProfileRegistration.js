import React, { useState } from 'react';

function ImageUpload() {
  const [image, setImage] = useState(null);

  const handleImageChange = (event) => {
    setImage(URL.createObjectURL(event.target.files[0]));
  }

  return (
    <div className="profile-section">
        <div>
            <h2>Upload a picture of yourself</h2>
            <p>To validate your identity, please take a photo of face first.
                You can change your photo in the profile section at any time.
            </p>
        </div>
        <div>
        <label>
            Choose an image:
            <input type="file" onChange={handleImageChange} />
            {image && <img src={image} alt="User uploaded" />}
        </label>
        </div>
        <div>
        </div>
    </div>
  );
}

export default ImageUpload;
