import { Form, Button, Card, Container, Alert } from "react-bootstrap";

function DonationForm({
  fullName,
  setFullName,
  email,
  setEmail,
  alert,
  totalPrice,
  totalPriceChange,
  donationMoney,
}) {
  return (
    <Card className="mt-3 p-3">
      <Container>
        {alert && (
          <Alert key="success" variant="success">
            Başarıyla Bağış Yaptınız!!!
          </Alert>
        )}
        <Form.Group className="mb-3" controlId="formFullName">
          <Form.Label>İsim ve Soyisim</Form.Label>
          <Form.Control
            value={fullName}
            onChange={(value) => setFullName(value.target.value)}
            type="text"
            required
            placeholder="İsminiz ve soyisminiz"
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formEmail">
          <Form.Label>E-Posta Adresiniz</Form.Label>
          <Form.Control
            value={email}
            onChange={(value) => setEmail(value.target.value)}
            type="email"
            required
            placeholder="E-Posta Adresiniz"
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formTotal">
          <Form.Range
            type="number"
            step={0.5}
            max={1000}
            value={totalPrice}
            onChange={totalPriceChange}
            required
          />
          <Form.Text className="bg-red">{totalPrice} TL</Form.Text>
        </Form.Group>
        <Button variant="primary" type="submit" onClick={donationMoney}>
          Bağış Yap
        </Button>
      </Container>
    </Card>
  );
}
export default DonationForm;
