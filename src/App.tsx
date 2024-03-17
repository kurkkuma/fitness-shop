import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./components/home/Home";
import ProductPage from "./components/products/productPage/ProductPage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/:id" element={<ProductPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
