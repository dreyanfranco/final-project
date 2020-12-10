import { Col, Card, Button, ButtonGroup } from 'react-bootstrap'
import { Link } from 'react-router-dom'

const ItinerariesCard = ({ itinerary, loggedUser }) => {
    return (

        <Col lg={4}>
            <Card>
                <Card.Img variant="top" src={itinerary.itineraryImage} />
                <Card.Title>{itinerary.name}</Card.Title>
                <Card.Body>
                    <Card.Text>created by {itinerary.owner.username}</Card.Text>
                    <Card.Text>{itinerary.duration} </Card.Text>
                    {
                        itinerary.owner === loggedUser
                        ?  
                    <ButtonGroup aria-label="Basic example" style={{ width: '100%' }}>
                        <Link className="btn btn-dark" to={`/itinerario/${itinerary._id}`}>Editar</Link> 
                        <Link className="btn btn-dark" to={`/itinerario/${itinerary._id}`}>Eliminar</Link> 
                        <Link className="btn btn-dark" to={`/itinerario/${itinerary._id}`}>Ver detalles</Link>
                        
                    </ButtonGroup>
                        :

                            <Link className="btn btn-dark btn-block btn-sm" to={`/itinerario/${itinerary._id}`}>Ver detalles</Link>
                            
                            
                    }
                </Card.Body>
            </Card>
        </Col>
    )
}

export default ItinerariesCard

