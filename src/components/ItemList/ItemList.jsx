import ItemListItem from "../ItemListItem/ItemListItem";
import FlowerImg from '../../assets/transparent-flower.jpeg'


// this component displayes the items in the task bar
export default function ItemList({ items, setItems }) {
  return (
    <div className="itemlist">
      <h1 >Tasuku Risuto</h1>
      <hr />
      {/* <div className='main'>
        <div className="overlay"></div>
        <img src={FlowerImg} alt="" />
      </div> */}

      {/* if notes exist, then map over the array */}
      {items && items.map(item => {
        // since we are iterrating over an array, the ItemListItem is going to have to have a key
        // we are also passing the prop item. This line of code below is what shows the list of items
        return <ItemListItem setItems={setItems} key={item._id} item={item}/>
      })} 
    </div>
  );
}

//this component shows a list of items
// needs to be on the HomePage/Page 1
