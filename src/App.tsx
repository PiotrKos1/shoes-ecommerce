import { BrowserRouter, Routes, Route } from "react-router-dom";
import Nav from "./Nav";
import Home from "./pages/Home";
import AboutUs from "./pages/AboutUs";
import Shop from "./pages/Shop";
import Contact from "./pages/Contact";
import ShoppingCart from "./pages/ShoppingCart";

function App() {
  return (
    <div>
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<Nav />}>
          <Route index element={<Home />} />
          <Route path="about-us" element={<AboutUs />} />
          <Route path="shop" element={<Shop />} />
          <Route path="contact" element={<Contact />} />
          <Route path="shopping-cart" element={<ShoppingCart />} />
        </Route>
      </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;
