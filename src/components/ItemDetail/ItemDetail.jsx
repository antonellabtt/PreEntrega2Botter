import ItemCount from "../ItemCount/ItemCount";
import { Container } from "react-bootstrap";
import "./itemdetail.css";

function ItemDetail({ producto }) {
  const onAdd = (cant) => {
    console.log("Se agregaron " + cant);
  };
  return (
    <article>
      <Container className="d-flex flex-row gap-5 ctnTotal">
        <div className="imgCtn">
          <img
            src={producto.img}
            alt="imagen de producto"
            className="imgProdu"
          />
        </div>
        <div className="infoProdu">
          <h2>{producto.name}</h2>
          <p>{producto.descripcion}</p>
          <ItemCount
            stock={producto.stock}
            precio={producto.price}
            onAdd={onAdd}
            initial={1}
          />
        </div>
      </Container>
    </article>
  );
}

export default ItemDetail;
