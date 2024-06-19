import React, { useState } from 'react';
import './App.css';
import ShoppingForm from './ShoppingForm';

function App() {
  const [items, setItems] = useState({
    producto: '',
    tipo: ''
  });

  const addItem = (item) => {
    setItems([...items, item]);
  };

  return (
    <div className="App">
      <h1>Lista de Compras</h1>
      
      <ShoppingForm addItem={addItem} />

      <ul>
        {/* listar todos los objetos. Indicar tanto su nombre como su categoría. */}
      </ul>
    </div>
  );
}

export default App;
