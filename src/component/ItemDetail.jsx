import "../styles/itemDetail.css";

function ItemDetail({ product }) {
  return (
    <div className="containerDetail">
      <div className="containerImgDetail">
        <img className="imgDetail" src={product.image} alt={product.title} />
      </div>
      <div className="containerTextDetail">
        <h3 className="tituloDetail">{product.title}</h3>
        <p>{product.description}</p>
        <span className="precioDetail">Precio: ${product.price}</span>
        <button className="botonDetail">Agregar al carrito</button>
      </div>
    </div>
  );
}

export default ItemDetail;
