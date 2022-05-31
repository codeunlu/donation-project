import React from "react";
import { Card, Button, Col } from "react-bootstrap";
import { Link } from "react-router-dom";

function DonationItem({ id,title, description }) {
  return (
    <Col>
      <Card className="p-1">
        <Card.Body>
          <Card.Title>{title}</Card.Title>
          <Card.Text>{description}</Card.Text>
          <Link to={`/donation/`+id}><Button variant="primary">Bağış Yap</Button></Link>
        </Card.Body>
      </Card>
    </Col>
  );
}

export default DonationItem;
