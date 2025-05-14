import { useState } from 'react'
import { getItems, editItem } from '../../utilities/items-api';

// import { CreateItemForm } from '../../utilities/items-api';

export default function EditItem({ setItems }) {
    const [formData, setFormData] = useState({
        title: '',
        body: ''
    })

   


  function handleChange(e) {
    setFormData({
        ...formData,
        // this selects the key to update dynamically i.e text: will target the value and body: will target the value we want to update which is .title and .body. this is how we change the state dynamically using setFormData to update the new state
        [e.target.name]: e.target.value
    })
  }

 async function handleSubmit(e) {
    //this stops the page from refreshing/reloading once the form is submitted
    e.preventDefault();
    //here is where the new data is getting created
    // try {
    //     const response = await fetch('http://localhost:3000/items', {
    //         method: "POST",
    //         headers: { 'Content-Type': 'application/json' },
    //         body: JSON.stringify(formData)
    //     });
    //     // here we are getting the data and then updating state so the new information we put in will render and update state. to do this we have to update our state by using setItems
    //     const data = await response.json();
    //     const items = await getItems()
    //     setItems(items)
    //     console.log(data)
    // } catch (error) {
    //     console.error(error)
    // }
    editItem(setItems, formData)
  }


  return (
    <form onSubmit={handleSubmit}>
        <input type="text" placeholder='Enter Your Kiazen Title' name='title' value={formData.title} onChange={handleChange}/>
        <input type="text" placeholder='Enter Kiazen' name='body' value={formData.body} onChange={handleChange}/>
        <input type="submit" />
    </form>
  );
}