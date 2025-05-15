import { useState, useEffect } from 'react';
import { getItem, editItem } from '../../utilities/items-api';
import { useParams, useNavigate } from 'react-router-dom';

export default function EditItemForm({ }) {
  const [item, setItem] = useState(null); //null because the item/id doesn't exist yet

  const {id} = useParams() //this comes from the url

  const navigate = useNavigate()

  useEffect(() => {
    getItem(id, setItem)
  }, []) //without [] we would call useEffect 

  function handleChange(e) {
    setItem({
      ...item, //we spread this out to create a copy of state and we need everything in the existing state so 
      [e.target.name]: e.target.value
    }); 
    console.log(e.target.name)
    console.log(e.target.value)
  }

  async function handleSubmit(e) {
    e.preventDefault();
    editItem(id, item)
    navigate('/home')
  }

//   const editTheItem = () => {
//     editItem(item._id, item)
// }

  return (
    <>
    {item ? (
      <form onSubmit={handleSubmit}>
        <h2 className="edit__title">Every Small Change Is a Step Forward</h2>
      <input  type="text" name="title" placeholder="Edit Kiazen Title" value={item.title} onChange={handleChange}/>
      <input type="text" name="body" placeholder="Edit Kiazen" value={item.body} onChange={handleChange}/>
      <input className="item-btn__update" type="submit" value="Update" />
    </form>
    ) : (
      <h1>...Loading</h1>
    )}
    </>
  );
}
