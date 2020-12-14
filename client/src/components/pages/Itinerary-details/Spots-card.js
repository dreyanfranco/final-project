import { Row, Col, Card, ButtonGroup, Button } from 'react-bootstrap'
import { Link } from 'react-router-dom'

const SpotsCard = ({ spot, itinerary }) => {
    return (
        <>
            <Row className="spot-card">
                <Col md={{ span: 4 }} >
                    <img src={spot.image} alt={spot.location.address} />
                </Col>
                <Col md={{ span: 8 }} >
                    <h4>{spot.location.address}</h4>
                        <Link className="btn btn-dark" to={`/spot/${spot._id}`}>Ver detalles</Link>

                </Col>
            {/* <Card>
                <Card.Img variant="top" src={spot.image} />
                <Card.Title>{spot.name}</Card.Title>
                <Card.Body>
                    <ButtonGroup aria-label="Basic example" style={{ width: '100%' }}>
                        <Link className="btn btn-dark" to={`/spot/${spot._id}`}>Editar</Link>
                         
                    </ButtonGroup>
                   

                </Card.Body>
                </Card> */}
                </Row>
        </>
    )
}

export default SpotsCard