import { Route, Routes } from "react-router-dom";
import { useEffect, useState } from "react";
import ItemListContainer from "./ItemListContainer";
import ItemDitaleContainer from "./ItemDitaleContainer";

function Main() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((data) => {
        setProducts(data);
      });
  }, []);
  return (
    <main>
      <Routes>
        <Route path="/" element={<ItemListContainer products={products} />} />
        <Route
          path="/category/:categoryId"
          element={<ItemListContainer products={products} />}
        />
        <Route
          path="/category/:categoryId/item/:id"
          element={<ItemDitaleContainer products={products} />}
        />
        <Route
          path="/item/:id"
          element={<ItemDitaleContainer products={products} />}
        />
      </Routes>
    </main>
  );
}

export default Main;
