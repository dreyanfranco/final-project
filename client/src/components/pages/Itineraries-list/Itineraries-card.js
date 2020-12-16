import { Col, Card } from 'react-bootstrap'
import { Link } from 'react-router-dom'

const ItinerariesCard = ({ itinerary }) => {
    return (
        <Col lg={4}>
            <Card>
                <Card.Img variant="top" src={itinerary.itineraryImage} />
                <Card.Title>{itinerary.name}</Card.Title>
                <Card.Body>
                    <Card.Text><img className="image-card" src={itinerary.owner.profileImage}/> creado por {itinerary.owner.username}</Card.Text>
                    <Card.Text className="duration">{itinerary.duration} </Card.Text>
                    <Link className="btn btn-dark btn-block btn-sm" to={`/itinerario/${itinerary._id}`}>Ver detalles</Link>
                </Card.Body>
            </Card>
        </Col>
    )
}

export default ItinerariesCard

