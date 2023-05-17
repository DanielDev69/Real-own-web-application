import React, { useState } from 'react';

function ProductSale() {
  const [product, setProduct] = useState({
    name: '',
    price: '',
    image: null
  });

  function handleInputChange(event) {
    const { name, value } = event.target;
    setProduct(prevProduct => ({
      ...prevProduct,
      [name]: value
    }));
  }

  function handleImageChange(event) {
    setProduct(prevProduct => ({
      ...prevProduct,
      image: event.target.files[0]
    }));
  }

  function handleSubmit(event) {
    event.preventDefault();

    const formData = new FormData();
    formData.append('name', product.name);
    formData.append('price', product.price);
    formData.append('image', product.image);

    fetch('https://api.example.com/products', {
      method: 'POST',
      body: formData
    })
      .then(response => {
        if (!response.ok) {
          throw new Error('Failed to upload product.');
        }
        alert('Product uploaded successfully.');
        setProduct({
          name: '',
          price: '',
          image: null
        });
      })
      .catch(error => {
        alert(error.message);
      });
  }

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="name">Product Name</label>
        <input
          type="text"
          name="name"
          value={product.name}
          onChange={handleInputChange}
          required
        />
      </div>
      <div>
        <label htmlFor="price">Price</label>
        <input
          type="number"
          name="price"
          value={product.price}
          onChange={handleInputChange}
          required
        />
      </div>
      <div>
        <label htmlFor="image">Product Image</label>
        <input
          type="file"
          name="image"
          onChange={handleImageChange}
          required
        />
      </div>
      <button type="submit">Upload Product</button>
    </form>
  );
}

export default ProductSale