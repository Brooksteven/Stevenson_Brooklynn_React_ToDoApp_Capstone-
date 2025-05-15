import { useState } from 'react'
import { getItems, createItem } from '../../utilities/items-api';
import { useNavigate } from 'react-router-dom';

// import { CreateItemForm } from '../../utilities/items-api';

export default function CreateItemForm({ setItems }) {
    const [formData, setFormData] = useState({
        title: '',
        body: ''
    })

    const navigate = useNavigate()
   


  function handleChange(e) {
    setFormData({
        ...formData,
        // this selects the key to update dynamically i.e text: will target the value and body: will target the value we want to update which is .title and .body. this is how we change the state dynamically using setFormData to update the new state
        [e.target.name]: e.target.value
    });
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
    createItem(setItems, formData);
    navigate('/home');
  }


  return (
    <form onSubmit={handleSubmit}>
        <h2 className="edit__title">Big Change Starts With One Small Task</h2>
        <input type="text" placeholder='Enter Your Kiazen Title' name='title' value={formData.title} onChange={handleChange}/>
        <input type="text" placeholder='Enter Kiazen' name='body' value={formData.body} onChange={handleChange}/>
        <input className="item-btn__update" type="submit" value="Create"/>
    </form>
  );
}


//needs to be on the CreateItemFormPage/ Page 2