import { NavLink } from "react-router-dom";
import "./item.css";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";

function Item({ producto }) {
  return (
    <Col xs={4} className="card">
      <h5>{producto.name}</h5>
      <div className="recuadro">
        <img src={producto.img} alt="" className="imgLista" />
      </div>
      <h6 className="mb-3 mt-2">Precio: ${producto.price}</h6>
      <NavLink to={`/item/${producto.id}`}>
        <Button variant="primary" className="botonDetalle">
          Ver Detalle{" "}
        </Button>{" "}
      </NavLink>
    </Col>
  );
}
export default Item;
