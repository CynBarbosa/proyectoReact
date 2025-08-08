import Item from "./Item";
import "../styles/ItemList.css";

function ItemList({ products }) {
  return (
    <div className="containerItemList">
      {products.map((product) => (
        <Item item={product} key={product.id} />
      ))}
    </div>
  );
}

export default ItemList;
