import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import NavBar from "./components/NavBar";

import Home from "./pages/Home";
import Cart from "./pages/Cart";

import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import { CartProvider } from "./context/cartContext";

function App() {
  return (
    <Router>
      <CartProvider>
        <div className="mx-2 mt-2 flex border-box">
          <header>
            <NavBar />
          </header>
          <main className="w-full">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/cart" element={<Cart />} />
            </Routes>
          </main>
          <ToastContainer />
        </div>
      </CartProvider>
    </Router>
  );
}

export default App;
