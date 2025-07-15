import ItemList from "./ItemList";
import { useParams } from "react-router-dom";

function ItemListContainer({ products }) {
  const { categoryId } = useParams();

  const filteredProducts = categoryId
    ? products.filter((product) => product.category === categoryId)
    : products;

  return (
    <div>
      <ItemList products={filteredProducts} />
    </div>
  );
}

export default ItemListContainer;
