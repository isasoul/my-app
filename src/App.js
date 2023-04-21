import React, { useState } from 'react';
import ItemList from './ItemList';
import  './index.css';

function App() {
  const [items, setItems] = useState(['Item 1', 'Item 2', 'Item 3']);
  const [newItem, setNewItem] = useState('');

  function handleInputChange(event) {
    setNewItem(event.target.value);
  }

  function handleSubmit(event) {
    event.preventDefault();
    if (newItem.trim() !== '') {
      setItems([...items, newItem.trim()]);
      setNewItem('');
    }
  }

  return (
    <div>
      <h1 className='title'>My To-Do List</h1>
      <ItemList items={items} />
      <form className='form' onSubmit={handleSubmit}>
        <input
       
          type="text"
          placeholder="Add a new item"
          value={newItem}
          onChange={handleInputChange}
        />
        <button>Add</button>
      </form>
    </div>
  );
}

export default App;
