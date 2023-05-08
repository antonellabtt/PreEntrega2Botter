import NavBar from "../components/NavBar/NavBar";
import ItemDetailContainer from "../components/ItemDetailContainer/ItemDetailContainer";
import { useParams } from "react-router-dom";

function ItemRoot() {
  const parametros = useParams();
  return (
    <main className="contenedor">
      <ItemDetailContainer itemId={parametros.id} />
    </main>
  );
}

export default ItemRoot;
