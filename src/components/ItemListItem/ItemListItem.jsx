// import {useState, useEffect} from 'react'
import {useParams, useNavigate} from 'react-router-dom' 
import { deleteItem } from '../../utilities/items-api.js';

export default function ItemListItem({ item, setItems }) {


    const nav = useNavigate()
    // const [item, setItem] = useState({})
    // const {id} = useParams()

    // useEffect(() => {
    //     getItem(id)
    //     .then(res => setItem(res.data))
    // }, [])

    const deleteTheItem = () => {
        deleteItem(item._id, setItems)
    }


  return (
    <div>
        <h2>{item.title}</h2>
        <p>{item.body}</p>
        <button onClick={() => {nav(`/edit/${item._id}`)}}>Edit</button>
        <button onClick={deleteTheItem}>Delete</button>
    </div>
  );
}

//this is what each item will look like
//this component is the specific item and itemlist shows the list of all the items
//this needs to be on the homepage/page 1