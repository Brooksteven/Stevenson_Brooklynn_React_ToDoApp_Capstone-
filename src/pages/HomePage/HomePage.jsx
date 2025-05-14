import { useState, useEffect } from 'react'
import { getItems } from '../../utilities/items-api.js'
import CreateItemForm from '../../components/CreateItemForm/CreateItemForm';
import ItemList from '../../components/ItemList/ItemList';

export default function HomePage() {
    const [items, setItems] = useState(null)

    useEffect(() => {
       async function getItems(){ 
        try {
            const response = await fetch('http://localhost:3000/items'); //const URL = baseURL
            const data = await response.json(); //const response = await axios.get(URL)
            setItems(data);
        } catch (error) {
            console.error(error)
        }
      }
      getItems()
    }, []) //we only want this useEffect code to happen once
  return (
    <div>
        {/* //here we are passing down the setter function which is setItems down to CreateItemForm so we could trigger a rerender by updating state */}
        {/* we are then passing setItems aka setter function as a prop from the form so when the data gets created in CreateItemForm we will then be able to update the items, by using setItems(items), to have all of the items from the database, by updating state it will trigger a re-render and that item gets dynamically added to the dom   */}
        <CreateItemForm setItems={setItems}/>
        {items && <ItemList setItems={setItems} items={items}/>}

    </div>
  )
}
