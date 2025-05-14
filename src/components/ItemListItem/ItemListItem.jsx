export default function ItemListItem({ item }) {
  return (
    <div>
        <h2>{item.title}</h2>
        <p>{item.body}</p>
    </div>
  );
}
