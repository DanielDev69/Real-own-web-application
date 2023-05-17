import React, { useState } from 'react';
import axios from 'axios';

function ReceiptGenerator() {
  const [total, setTotal] = useState(0);
  const [items, setItems] = useState([]);
  
  // Function to add an item to our receipt
  function addItem(name, price) {
    setTotal(total + price);
    setItems([...items, { name, price }]);

    axios.get(`https://example.com/items?name=${name}&price=${price}`)
      .then(response => {
        const item = response.data;
        setTotal(total + item.price);
        setItems([...items, item]);
      })
      .catch(error => {
        console.error(error);
      });
  }
  
  // Function to remove an item from our receipt
  function removeItem(index) {
    const newItems = [...items];
    const itemToRemove = newItems.splice(index, 1)[0];
    setTotal(total - itemToRemove.price);
    setItems(newItems);
  }
  
  // Function to print the receipt
  function printReceipt() {
    window.print();
  }
  
  // Render the receipt
  return (
    <div>
      <h2>Receipt</h2>
      <ul>
        {items.map((item, index) => (
          <li key={item.name}>
            {item.name}: ${item.price.toFixed(2)} 
            <button onClick={() => removeItem(index)}>Remove</button>
          </li>
        ))}
      </ul>
      <p>Total: ${total.toFixed(2)}</p>
      
      <hr />
      
      {/* Form to add items */}
      <h3>Add Item</h3>
      <form onSubmit={e => {
        e.preventDefault();
        const name = e.target.elements.name.value;
        const price = parseFloat(e.target.elements.price.value);
        addItem(name, price);
        e.target.reset();
      }}>
        <label htmlFor="name">Name:</label>
        <input type="text" name="name" />
        <br />
        <label htmlFor="price">Price:</label>
        <input type="number" step="0.01" min="0" name="price" />
        <br />
        <button type="submit">Add Item</button>
      </form>
      
      {/* Button to print the receipt */}
      <button onClick={printReceipt}>Print Receipt</button>
    </div>
  );
}

export default ReceiptGenerator;