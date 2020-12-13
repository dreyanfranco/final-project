import { Col, Card, ButtonGroup, Button } from 'react-bootstrap'
import { Link } from 'react-router-dom'

const SpotsCard = ({ spot, itinerary }) => {
    return (
        <>
            <Card>
                <Card.Img variant="top" src={spot.image} />
                <Card.Title>{spot.name}</Card.Title>
                <Card.Body>
                    <ButtonGroup aria-label="Basic example" style={{ width: '100%' }}>
                        <Link className="btn btn-dark" to={`/spot/${spot._id}`}>Editar</Link>
                         
                    </ButtonGroup>
                   

                </Card.Body>
            </Card>
        </>
    )
}

export default SpotsCard