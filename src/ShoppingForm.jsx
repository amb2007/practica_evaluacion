import React, { useState } from 'react';

function ShoppingForm(props) {
  const [newElement, setNewElement] = useState({
    // modificar aquí para administrar la información del formulario
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    props.addItem(newElement);
    // Vaciar el estado "newElement"
  };
  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData({
    ...items,
    [name]: value
    });
  };
  // función que modifica el estado "newElement" al ingresar valores en el formulario

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        id = 'producto'
        value={items.producto}
        onChange={handleChange}
        name="nombre"
      />
      <button type="submit">Agregar</button>
    </form>
  );
};

export default ShoppingForm;
