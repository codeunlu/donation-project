import { Route, Router, Routes } from "react-router-dom";
import NavbarItem from "../components/Navbar";
import HomePage from "../pages/HomePage";
import ProfilePage from "../pages/ProfilePage";
import DonationPage from "../pages/DonationPage";

function RouterItem() {
  return (
    <Router>
      <NavbarItem />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/profile/:id" element={<ProfilePage />} />
        <Route path="/donation/:id" element={<DonationPage />} />
      </Routes>
    </Router>
  );
}

export default RouterItem;
