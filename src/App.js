import "./App.css";
import Navbar from "./components/layout/Navbar";
import Cart from "./components/pages/Cart";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/pages/Home";
import Category from "./components/pages/Category";
import Footer from "./components/layout/Footer";
import ItemList from "./components/pages/ItemList";
import CategoryList from "./components/pages/CategoryList";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <CategoryList/>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/cart" element={<Cart />} />
        <Route exact path="/all" element={<ItemList />} />
        <Route
          exact
          path="/electronics"
          element={<Category input="electronics" />}
        />
        <Route exact path="/jewelery" element={<Category input="jewelery" />} />
        <Route
          exact
          path="/mens"
          element={<Category input="men's clothing" />}
        />
        <Route
          exact
          path="/womens"
          element={<Category input="women's clothing" />}
        />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
