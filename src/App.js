import NavbarComponent from "./components/Navbar";
import { Container } from "react-bootstrap";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import CartProvider from "./CartContext";
//pages
import Store from "./pages/Store";
import Cancel from "./pages/Cancel";
import Success from "./pages/Success";

function App() {
  return (
    <CartProvider>
      <Container>
        <NavbarComponent />
        <BrowserRouter>
          <Routes>
            <Route index element={<Store />} />
            <Route path="success" element={<Success />} />
            <Route path="cancel" element={<Cancel />} />
          </Routes>
        </BrowserRouter>
      </Container>
    </CartProvider>
  );
}

export default App;
