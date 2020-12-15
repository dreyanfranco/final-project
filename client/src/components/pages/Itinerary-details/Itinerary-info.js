import { Row, Col, Button } from 'react-bootstrap'
import { Link } from 'react-router-dom'
const ItineraryInfo = ({ itinerary, user, favs, handleModal, handleModalDelete, saveItinerary, removeItinerary }) => {

    return (
        <section className="itinerary">

            <Row>
                <Col md={{ span: 6 }} >
                    <img src={itinerary.itineraryImage} alt={itinerary.name} />
                </Col>
                <Col md={{ span: 6 }} >
                    <h1>{itinerary.name}</h1>
                    <p>{itinerary.location.address}</p>
                    <p>{itinerary.owner.username}</p>
                    <p>Duración: {itinerary.duration}</p>
                    {
                        itinerary.messages.length === 0
                            ?
                            <p>Rating: -</p>
                            :
                            <p> Rating: {itinerary.messages.map(elm => elm.rating).reduce((a, b) => a + b, 0) / itinerary.messages.length}</p>
                    }
                    {
                        itinerary.owner.username === user.username
                            ?
                            <>
                                <Link className="btn btn-dark btn-sm" to={`/editar-itinerario/${itinerary._id}`}>Editar</Link>
                                <Button onClick={() => handleModal(true)} variant="dark" size="sm">Crear spot</Button>
                                <Button onClick={() => handleModalDelete(true)} variant="dark" size="sm">Borrar itinerario</Button>
                            </>
                            :
                            null
                    }
                    {
                        !favs.map(elm => elm._id).includes(itinerary._id) && itinerary.owner.username !== user.username
                            ?
                            <Button onClick={saveItinerary} variant="dark" size="sm">Guardar itinerario</Button>
                            :
                            null
                    }
                    {
                        favs.map(elm => elm._id).includes(itinerary._id)
                            ?
                            <Button onClick={removeItinerary} variant="dark" size="sm">Eliminar de favoritos</Button>
                            :
                            null
                    }
                </Col>
                <Col>
                    <p className="description">{itinerary.description}</p>
                </Col>
            </Row>
        </section>
    )
}

export default ItineraryInfo