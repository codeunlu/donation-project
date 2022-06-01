import React from "react";
import { Card, Button, Col } from "react-bootstrap";

function DonationListItem({ id,title, description,total }) {
  return (
    <Col>
      <Card className="p-1">
        <Card.Body>
          <Card.Title>{title}</Card.Title>
          <Card.Text>{description}</Card.Text>
          <Button variant="primary">Toplam Bağış :{total}</Button>
        </Card.Body>
      </Card>
    </Col>
  );
}

export default DonationListItem;
