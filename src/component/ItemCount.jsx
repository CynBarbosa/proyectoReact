import { HeartMinus, HeartPlus } from "lucide-react";
import { useEffect, useState } from "react";
import "../styles/itemCount.css";

function ItemCount(props) {
  const [count, setCount] = useState(0);
  const [countSuma, setCountSuma] = useState(false);

  const addHandler = () => {
    props.onAdd(count);
  };

  useEffect(() => {
    return;
  }, []);

  useEffect(() => {}, [countSuma]);

  const removeHandle = () => {
    if (count >= 1) setCount(count - 1);
  };

  const addHandle = () => {
    if (count < props.stock) {
      setCount(count + 1);
      setCountSuma(!countSuma);
    }
  };
  return (
    <div>
      <div className="contenedorBotonesCount">
        <button className="botonCount" onClick={removeHandle}>
          <HeartMinus />
        </button>
        <h5 className="numeroCount">{count}</h5>
        <button className="botonCount" onClick={addHandle}>
          <HeartPlus />
        </button>
      </div>
      <button className="botonAddCount" onClick={addHandler}>
        Agregar al carrito
      </button>
    </div>
  );
}

export default ItemCount;
