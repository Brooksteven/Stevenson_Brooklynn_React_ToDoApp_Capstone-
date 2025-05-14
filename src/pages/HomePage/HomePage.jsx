import { useState, useEffect } from 'react'
import { getItems } from '../../utilities/items-api.js'
import CreateItemForm from '../../components/CreateItemForm/CreateItemForm';
import ItemList from '../../components/ItemList/ItemList';

export default function HomePage() {
    const [items, setItems] = useState(null)

    useEffect(() => {
    //    async function getItems(){ 
    //     try {
    //         const response = await fetch('http://localhost:3000/items');
    //         const data = await response.json();
    //         setItems(data);
    //     } catch (error) {
    //         console.error(error)
    //     }
    //   }
      getItems()
      .then(data => setItems(data))
    }, []) //we only want this useEffect code to happen once
  return (
    <div>
        <CreateItemForm setItems={setItems}/>
        <ItemList items={items}/>
    </div>
  )
}
