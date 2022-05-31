import Router from "./router";
import "bootstrap/dist/css/bootstrap.min.css";
import NavbarItem from "./components/Navbar";
import { Container } from "react-bootstrap";

function App() {
  return (
    <div className="App">
      <NavbarItem />
      <Container>
        <Router />
      </Container>
    </div>
  );
}

export default App;
