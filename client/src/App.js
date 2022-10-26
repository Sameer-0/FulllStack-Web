import Home from "./pages/home/Home"
import List from "./pages/list/List"
import Product from "./pages/product/Product"
import {Routes, BrowserRouter, Route} from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
    <Routes className="App">
      <Route path="/" element={<Home />} />
      <Route path="/products" element={<List />} />
      <Route path="/product/:id" element={<Product />} />
    </Routes>
    </BrowserRouter>
  );
}

export default App;
