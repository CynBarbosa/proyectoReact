import { Route, Routes } from "react-router-dom";
import { useEffect, useState } from "react";
import ItemListContainer from "./ItemListContainer";
import ItemDitaleContainer from "./ItemDitaleContainer";
import NotFound from "./NotFound";
import "../styles/notFound.css";

function Main() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    setLoading(true);
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((data) => setProducts(data))
      .catch((error) => setError(error))
      .finally(() => setLoading(false));
  }, []);
  return (
    <main>
      <Routes>
        <Route
          path="/"
          element={
            loading ? (
              <h2 className="notFound">Cargando....</h2>
            ) : error ? (
              <h3 className="notFound">Ups algo salio mal!</h3>
            ) : (
              <ItemListContainer products={products} />
            )
          }
        />
        <Route
          path="/category/:categoryId"
          element={
            loading ? (
              <h2 className="notFound">Cargando....</h2>
            ) : error ? (
              <h3 className="notFound">Ups algo salio mal!</h3>
            ) : (
              <ItemListContainer products={products} />
            )
          }
        />
        <Route
          path="/category/:categoryId/item/:id"
          element={
            loading ? (
              <h2 className="notFound">Cargando....</h2>
            ) : error ? (
              <h3 className="notFound">Ups algo salio mal!</h3>
            ) : (
              <ItemDitaleContainer products={products} />
            )
          }
        />
        <Route
          path="/item/:id"
          element={
            loading ? (
              <h2 className="notFound">Cargando....</h2>
            ) : error ? (
              <h3 className="notFound">Ups algo salio mal!</h3>
            ) : (
              <ItemDitaleContainer products={products} />
            )
          }
        />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </main>
  );
}

export default Main;
