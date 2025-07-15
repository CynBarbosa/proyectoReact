import Item from "./Item";
import "../styles/ItemList.css";

function ItemList({ products }) {
  return (
    <div className="containerItemList">
      {products.map((product) => (
        <Item product={product} key={product.id} />
      ))}
    </div>
  );
}

export default ItemList;
