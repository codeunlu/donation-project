import { Card } from "react-bootstrap";

function DonationCard({title, description}){
    return (
        <Card className="mt-2">
            <Card.Body>
                <Card.Title>{title} ya bağış yapmak ister misiniz?</Card.Title>
                <Card.Text>{description}</Card.Text>
            </Card.Body>
        </Card>
    );
}

export default DonationCard;