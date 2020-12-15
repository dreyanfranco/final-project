import { Row, Col} from 'react-bootstrap'
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
                    <Link className="btn btn-dark" to={`/${itinerary}/spot/${spot._id}`}>Ver detalles</Link>
                </Col>
            </Row>
        </>
    )
}

export default SpotsCard