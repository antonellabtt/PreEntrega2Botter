import "bootstrap/dist/css/bootstrap.min.css";
import NavBar from "../components/NavBar/NavBar";
import ItemListContainer from "../components/ItemsListContainer/ItemListContainer";
import { useParams } from "react-router-dom";

function Home() {
  const params = useParams();
  const isCategoryRoute = Boolean(params.id);

  return (
    <div className="contenedor">
      <ItemListContainer
        isCategoryRoute={isCategoryRoute}
        categoryId={params.id}
      />
    </div>
  );
}

export default Home;
