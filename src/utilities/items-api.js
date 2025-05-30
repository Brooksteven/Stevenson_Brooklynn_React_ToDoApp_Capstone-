export async function getItems(){ 
    try {
        const response = await fetch('http://localhost:3000/items');
        const data = await response.json();
        return data
    } catch (error) {
        console.error(error)
    }
  }

  export async function getItem(id, setItem){
    try {
        const response = await fetch(`http://localhost:3000/items/${id}`);
        const data = await response.json(); //pull the data out of the response that we got 
        setItem(data) //here we are updating state
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


  export async function editItem(id, formData){
    try {
        const response = await fetch(`http://localhost:3000/items/${id}`, {
            method: 'PUT',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(formData)
        });
        const data = await response.json();
        // const items = await getItems();
        // setState(items);
        console.log("Updated item:", data);
      } catch (error) {
        console.error("Error updating item:", error);
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


