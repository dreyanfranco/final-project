import { Col, Card, Button, ButtonGroup } from 'react-bootstrap'
import { Link } from 'react-router-dom'

const ItinerariesCard = ({ name, description, itineraryImage, duration, owner }) => {
    return (
        <Col>
            <Card>
                <Card.Img variant="top" src={imageUrl} />
                
            </Card>
        </Col>
    )
}