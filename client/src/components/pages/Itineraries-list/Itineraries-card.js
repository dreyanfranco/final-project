import { Col, Card, Button, ButtonGroup } from 'react-bootstrap'
// import { Link } from 'react-router-dom'

const ItinerariesCard = ({ itinerary, loggedUser }) => {
   
    return (

        <Col lg={4}>
            <Card>
                <Card.Img variant="top" src={itinerary.itineraryImage} />
                <Card.Title>{itinerary.name}</Card.Title>
                <Card.Body>
                    <Card.Text>created by {itinerary.owner.username}</Card.Text>
                    <Card.Text>{itinerary.duration} { itinerary._id }</Card.Text>
                    
                    <ButtonGroup aria-label="Basic example" style={{ width: '100%' }}>
                        <Button className="btn btn-dark">Editar</Button>
                        <Button className="btn btn-dark">Eliminar</Button>
                        <Button className="btn btn-dark">Ver detalles</Button>
                        
                        {/* <Link className="btn btn-dark" to={`/itinerariosDetalle/${_id}`}>Ver detalles</Link> */}
                    </ButtonGroup>

                    {/* <Link className="btn btn-dark btn-block btn-sm" to={`/montañas/${_id}`}>Ver detalles</Link> */}

                </Card.Body>
            </Card>
        </Col>
    )
}

export default ItinerariesCard

// {
//     owner === loggedUser._id
//         ?
//         <ButtonGroup aria-label="Basic example" style={{ width: '100%' }}>
//             <Button className="btn btn-dark">Editar</Button>
//             <Link className="btn btn-dark" to={`/montañas/${_id}`}>Ver detalles</Link>
//         </ButtonGroup>
//         :
//         <Link className="btn btn-dark btn-block btn-sm" to={`/montañas/${_id}`}>Ver detalles</Link>
// }