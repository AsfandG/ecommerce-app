import Home from "./pages/home";
import Collection from "./pages/collection";
import Contact from "./pages/contact";
import About from "./pages/about";
import Product from "./pages/product";
import Cart from "./pages/cart";
import PlaceOrder from "./pages/place-order";
import Orders from "./pages/orders";
import Navbar from "./components/navbar";
import { Route, Routes } from "react-router-dom";
import Login from "./pages/login";
import Footer from "./components/footer";
import SearchBar from "./components/search-bar";

const App = () => {
  return (
    <div className="px-4 sm:px-[5vw] md:px-[7vw] lg:px-[9vw]">
      <Navbar />
      <SearchBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/collection" element={<Collection />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/login" element={<Login />} />
        <Route path="product/:productId" element={<Product />} />
        <Route path="place-order" element={<PlaceOrder />} />
        <Route path="order" element={<Orders />} />
      </Routes>
      <Footer />
    </div>
  );
};

export default App;
