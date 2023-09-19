import "./App.css";
import Navbar from "./components/layout/Navbar";
import Cart from "./components/pages/Cart";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/pages/Home";
import Category from "./components/pages/Category";
import Footer from "./components/layout/Footer";
import ItemList from "./components/pages/ItemList";
import Prime from "./components/pages/Prime";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/cart" element={<Cart />} />
        <Route exact path="/all" element={<ItemList />} />
        <Route exact path="/prime" element={<Prime />} />
        <Route
          exact
          path="/smartphones"
          element={<Category input="smartphones" />}
        />
        <Route
          exact
          path="/laptops"
          element={<Category input="laptops" />}
        />
        <Route
          exact
          path="/fragrances"
          element={<Category input="fragrances" />}
        />
        <Route
          exact
          path="/skincare"
          element={<Category input="skincare" />}
        />
        <Route
          exact
          path="/groceries"
          element={<Category input="groceries" />}
        />
        <Route
          exact
          path="/home-decoration"
          element={<Category input="home-decoration" />}
        />
        <Route
          exact
          path="/furniture"
          element={<Category input="furniture" />}
        />
        <Route
          exact
          path="/tops"
          element={<Category input="tops" />}
        />
        <Route
          exact
          path="/womens-dresses"
          element={<Category input="womens-dresses" />}
        />
        <Route
          exact
          path="/womens-shoes"
          element={<Category input="womens-shoes" />}
        />
        <Route
          exact
          path="/mens-shirts"
          element={<Category input="mens-shirts" />}
        />
        <Route
          exact
          path="/mens-shoes"
          element={<Category input="mens-shoes" />}
        />
        <Route
          exact
          path="/mens-watches"
          element={<Category input="mens-watches" />}
        />
        <Route
          exact
          path="/womens-watches"
          element={<Category input="womens-watches" />}
        />
        <Route
          exact
          path="/womens-bags"
          element={<Category input="womens-bags" />}
        />
        <Route
          exact
          path="/womens-jewellery"
          element={<Category input="womens-jewellery" />}
        />
        <Route
          exact
          path="/sunglasses"
          element={<Category input="sunglasses" />}
        />
        <Route
          exact
          path="/lighting"
          element={<Category input="lighting" />}
        />
        
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
