import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter } from "react-router-dom";
import NavbarItem from "./components/Navbar";
import RouterItem from "./router/index";

function App() {
  return (
    <BrowserRouter>
      <NavbarItem />
      <RouterItem />
    </BrowserRouter>
  );
}

export default App;
