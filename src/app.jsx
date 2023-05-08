import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./routes/home";
import ItemRoot from "./routes/itemRoot";
import Cart from "./routes/cart";
import Checkout from "./routes/checkout";
import NavBar from "./components/NavBar/NavBar";

function App() {
  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/category/:id" element={<Home />} />
        <Route path="/item/:id" element={<ItemRoot />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/checkout" element={<Checkout />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
