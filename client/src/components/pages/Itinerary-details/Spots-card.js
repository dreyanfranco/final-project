import { Col, Card, Button, ButtonGroup } from 'react-bootstrap'
import { Link } from 'react-router-dom'

const SpotsCard = ({ spot }) => {
    return (
        <Col lg={{span:4}}>
            <Card>
                <Card.Img variant="top" src={spot.image} />
                <Card.Title>{spot.name}</Card.Title>
                <Card.Body>
                    <ButtonGroup aria-label="Basic example" style={{ width: '100%' }}>
                        <Link className="btn btn-dark" to={`/spot/${spot._id}`}>Editar</Link>
                        <Link className="btn btn-dark" to={`/spot/${spot._id}`}>Eliminar</Link>
                        <Link className="btn btn-dark" to={`/spot/${spot._id}`}>Ver detalles</Link>
                    </ButtonGroup>
                    <Link className="btn btn-dark btn-block btn-sm" to={`/spot/${spot._id}`}>Ver detalles</Link>

                </Card.Body>
            </Card>
        </Col>
    )
}

export default SpotsCard