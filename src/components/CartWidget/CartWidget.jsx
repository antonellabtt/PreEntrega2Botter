import carrito from "../../assets/carro.png";
import "./cartwidget.css";

function CartWidget() {
  return (
    <div className="widget">
      <img src={carrito} alt="" className="imgCarrito" />
      <div className="badgeCarrito justify-content-center" id="badgeCarrito">
        <p className="nroCarrito">3</p>
      </div>
    </div>
  );
}

export default CartWidget;
