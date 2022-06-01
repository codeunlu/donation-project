import "bootstrap/dist/css/bootstrap.min.css";
import HomePage from "./pages/HomePage";
import DonationPage from "./pages/DonationPage";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import NavbarItem from "./components/Navbar";
import { Container } from "react-bootstrap";

function App() {
  return (
    <BrowserRouter>
      <NavbarItem />
      <Container>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/donation/:id" element={<DonationPage />} />
        </Routes>
      </Container>
    </BrowserRouter>
  );
}

export default App;
