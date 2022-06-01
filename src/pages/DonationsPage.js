import React from "react";
import { Row } from "react-bootstrap";
import DonationListItem from "../components/DonationListItem";
import Loading from "../components/Loading";
import ErrorToast from "../components/ErrorToast";
import { useAxiosGet } from "../hooks/useAxiosGet";

function DonationsPage() {
  const categories = useAxiosGet(`donation_category`);
  const donations = useAxiosGet(`donations`);

  console.log(categories);
  return (
    <>
      {!donations.loaded && <Loading />}
      {donations.error && <ErrorToast msg={donations.error} />}
      <Row xs={1} md={3} className="g-4 mt-2">
        {categories?.data?.map((category) => {
          const total = donations.data
            .filter((filter) => filter.category_id === category.id)
            .reduce((count, variable) => count + variable.total, 0);
          return (
            <DonationListItem
              key={category.id}
              id={category.id}
              title={category.title}
              description={category.description}
              total={total}
            />
          );
        })}
      </Row>
    </>
  );
}
export default DonationsPage;
