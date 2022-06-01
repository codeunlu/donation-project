import { Route, Routes } from "react-router-dom";
import HomePage from "../pages/HomePage";
import DonationPage from "../pages/DonationPage";
import DonationsPage from "../pages/DonationsPage";

import { Container } from "react-bootstrap";

function RouterItem() {
  return (
    <Container>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/donation/:id" element={<DonationPage />} />
        <Route path="/donations" element={<DonationsPage />} />
      </Routes>
    </Container>
  );
}

export default RouterItem;
