import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import ItemList from "./ItemList";
import { app } from "../databaseConfig";
import {
  getFirestore,
  collection,
  getDocs,
  query,
  where,
} from "firebase/firestore";

function ItemListContainer() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const resultado = useParams();

  useEffect(() => {
    if (resultado.category) {
      handleProductsCategory();
    } else {
      handleProducts();
    }
  }, [resultado.category]);

  const handleProducts = () => {
    setLoading(true);
    const db = getFirestore(app);
    const productsCollection = collection(db, "productos");
    const elPedido = getDocs(productsCollection);

    elPedido
      .then((respuesta) => {
        const productosFinales = [];

        respuesta.docs.forEach((producto) => {
          const finalProduct = {
            id: producto.id,
            ...producto.data(),
          };

          productosFinales.push(finalProduct);
        });

        setProducts(productosFinales);
      })
      .catch((error) => {
        setError(error);
      })
      .finally(() => setLoading(false));
  };

  const handleProductsCategory = () => {
    setLoading(true);
    const db = getFirestore(app);
    const productosCollection = collection(db, "productos");

    const filtro = query(
      productosCollection,
      where("category", "==", resultado.category)
    );

    const elPedido = getDocs(filtro);
    elPedido
      .then((respuesta) => {
        const productosFinales = [];

        respuesta.docs.forEach((producto) => {
          const finalProduct = {
            id: producto.id,
            ...producto.data(),
          };

          productosFinales.push(finalProduct);
        });

        setProducts(productosFinales);
      })
      .catch((error) => {
        setError(error);
      })
      .finally(() => setLoading(false));
  };

  return (
    <>
      {loading ? (
        <h2 className="notFound">Cargando....</h2>
      ) : error ? (
        <h3 className="notFound">Ups algo salio mal!</h3>
      ) : (
        <ItemList products={products} />
      )}
    </>
  );
}

export default ItemListContainer;
