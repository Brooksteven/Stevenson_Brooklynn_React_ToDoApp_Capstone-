export async function getItems(){ 
    try {
        const response = await fetch('http://localhost:3000/items');
        const data = await response.json();
        return data
    } catch (error) {
        console.error(error)
    }
  }

  export async function createItem(setState, formData){
    try {
        const response = await fetch('http://localhost:3000/items', {
            method: "POST",
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(formData)
        });
        // here we are getting the data and then updating state so the new information we put in will render and update state. to do this we have to update our state by using setItems
        const data = await response.json();
        const items = await getItems()
        setState(items) //causes state to rerender 
        console.log(data)
    } catch (error) {
        console.error(error)
    }

  }


  export async function editItem(id, setState, formData){
    try {
        const response = await fetch(`http://localhost:3000/items/${id}`, {
            method: "PUT",
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(formData)
        });
        // here we are getting the data and then updating state so the new information we put in will render and update state. to do this we have to update our state by using setItems
        const data = await response.json();
        const items = await getItems()
        setState(items) //causes state to rerender 
        console.log(data)
    } catch (error) {
        console.error(error)
    }

  }


export async function deleteItem(id, setState){
    try {
        const response = await fetch(`http://localhost:3000/items/${id}`, {
            method: 'DELETE',
            headers: { 'Content-Type': 'application/json' }
        })
        const data = await response.json() //this captures the item deleted //retrieving deleted item
        const items = await getItems() //retrieve all items from database after it it's been deleted
        setState(items) //updated dom after deletion
        console.log(data)
        return data
    } catch (error) {
        console.error(error)
    }
}