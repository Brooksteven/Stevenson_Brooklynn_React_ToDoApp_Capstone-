import ItemListItem from "../ItemListItem/ItemListItem";

export default function ItemList({ items }) {
  return (
    <div>
      {/* if notes exist, then map over the array */}
      {items && items.map(item => {
        // since we are iterrating over an array, the ItemListItem is going to have to have a key
        // we are also passing the prop item
        return <ItemListItem key={item._id} item={item}/>
      })} 
    </div>
  );
}
