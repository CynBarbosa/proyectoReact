import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ItemDetail from "./ItemDetail";

function ItemDitaleContainer({ products }) {
  const [product, setProduct] = useState(null);
  const { id } = useParams();

  useEffect(() => {
    const product = products.find(
      (productFind) => productFind.id === Number(id)
    );
    setProduct(product);
  }, [id]);
  return product && <ItemDetail product={product} />;
}

export default ItemDitaleContainer;
