import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ItemDetail from "./ItemDetail";
import { collection, doc, getDoc, getFirestore } from "firebase/firestore";
import { app } from "../databaseConfig";

function ItemDitaleContainer({ products }) {
  const [product, setProduct] = useState({});
  const [error, setError] = useState(null);
  const resultado = useParams();

  useEffect(() => {
    handleDetalleProduct();
  }, []);

  const handleDetalleProduct = () => {
    const db = getFirestore(app);
    const productsCollection = collection(db, "productos");
    const filter = doc(productsCollection, resultado.id);
    const elPedido = getDoc(filter);
    elPedido
      .then((respuesta) => {
        setProduct(respuesta.data());
      })
      .catch((error) => {
        setError(error);
      });
  };
  return (
    <>
      {error ? (
        <h3 className="notFound">Ups algo salio mal!</h3>
      ) : (
        <ItemDetail product={product} />
      )}
    </>
  );

  // product && <ItemDetail product={product} />;
}

export default ItemDitaleContainer;
