import { Row, Col } from 'react-bootstrap'
import MapContainer from './../Itinerary-map/Itinerary-map'
import SpotsCard from './Spots-card'

const SpotsList = ({ spots, itinerary }) => {
    return (
        <section className="spots-list">
            <h4 className="spots-list">Spots de {itinerary.name}</h4>
            <Row>
                <Col className="spots order-2 order-sm-1 " md={{ span: 5 }}>
                    {spots.map(elm => <SpotsCard key={elm._id} spot={elm} itinerary={itinerary._id} />
                    )}
                </Col>
                <Col className="order-1 order-sm-2" md={{ span: 7 }}>
                    <MapContainer location={itinerary.location.coordinates} spots={spots} />
                </Col>
            </Row>
        </section>
    )
}

export default SpotsList