import React from "react";
import DonationItem from "../components/DonationItem";
import { useAxiosGet } from "../hooks/useAxiosGet";
import Loading from "../components/Loading";
import ErrorToast from "../components/ErrorToast";
import { Row } from "react-bootstrap";

function HomePage() {
  const { data, error, loading } = useAxiosGet(`donation_category`);

  return (
    <>
      {loading && <Loading />}
      {error && <ErrorToast msg={error} />}
      <Row xs={1} md={3} className="g-4 mt-2">
        {data.map((category) => (
          <DonationItem
            id={category.id}
            key={category.title}
            title={category.title}
            description={category.description}
          />
        ))}
      </Row>
    </>
  );
}

export default HomePage;
