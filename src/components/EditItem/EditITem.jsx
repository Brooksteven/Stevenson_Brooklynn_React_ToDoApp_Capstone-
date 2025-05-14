import { useState } from 'react';
import { getItems, editItem } from '../../utilities/items-api';

export default function EditItemForm({ item, setItems }) {
  const [formData, setFormData] = useState({
    title: '',
    body: ''
  });

  function handleChange(e) {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  }

  async function handleSubmit(e) {
    e.preventDefault();
    // try {
    //   const response = await fetch(`http://localhost:3000/items/${item._id}`, {
    //     method: 'PUT',
    //     headers: { 'Content-Type': 'application/json' },
    //     body: JSON.stringify(formData)
    //   });
    //   const updatedItem = await response.json();
    //   const items = await getItems();
    //   setItems(items);
    //   console.log("Updated item:", updatedItem);
    // } catch (error) {
    //   console.error("Error updating item:", error);
    // }
    editItem(setItems, formData)
  }

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" name="title" placeholder="Edit Kiazen Title" value={formData.title} onChange={handleChange}/>
      <input type="text" name="body" placeholder="Edit Kiazen" value={formData.body} onChange={handleChange}/>
      <input type="submit" value="Update" />
    </form>
  );
}
