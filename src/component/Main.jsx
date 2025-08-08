import { Route, Routes } from "react-router-dom";
import ItemListContainer from "./ItemListContainer";
import ItemDitaleContainer from "./ItemDitaleContainer";
import Login from "./Login";
import Favorito from "./Favoritos";
import Cart from "./Cart";
import NotFound from "./NotFound";
import "../styles/notFound.css";

function Main() {
  return (
    <main>
      <Routes>
        <Route path="/" element={<ItemListContainer />} />
        <Route path="/category/:category" element={<ItemListContainer />} />
        <Route
          path="/category/:category/item/:id"
          element={<ItemDitaleContainer />}
        />
        <Route path="/item/:id" element={<ItemDitaleContainer />} />
        <Route path="/login" element={<Login />} />
        <Route path="/favoritos" element={<Favorito />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </main>
  );
}

export default Main;
