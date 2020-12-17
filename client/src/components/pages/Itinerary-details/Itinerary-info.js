import { Row, Col, Button } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import star from './star.png'
const ItineraryInfo = ({ itinerary, user, favs, handleModal, handleModalDelete, saveItinerary, removeItinerary }) => {

    return (
        <section className="itinerary">

            <Row>
                <Col md={{ span: 6 }} >
                    <img src={itinerary.itineraryImage} alt={itinerary.name} />
                    <p className="duration-details">{itinerary.duration}</p>
                </Col>
                <Col md={{ span: 6 }} >
                    <h1>{itinerary.name}</h1>
                    <p className="city">{itinerary.location.address}</p>
                    {
                        itinerary.messages.length === 0
                            ?
                            <p><img className="rating" src={star}/>  -</p>
                            :
                            <p><img className="rating" src={star}/>  {itinerary.messages.map(elm => elm.rating).reduce((a, b) => a + b, 0) / itinerary.messages.length}</p>
                    }
                    <p><img className="image-owner" src={itinerary.owner.profileImage}/> creado por {itinerary.owner.username}</p>
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
                    <h4 className="description">SOBRE EL ITINERARIO</h4>
                    <p>{itinerary.description}</p>
                </Col>
            </Row>
        </section>
    )
}

export default ItineraryInfo