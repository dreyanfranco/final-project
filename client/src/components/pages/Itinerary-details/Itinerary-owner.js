import { Row, Col } from 'react-bootstrap'

const ItineraryOwner = ({ owner }) => {
    return (
        <>
            <section className="about-owner">
                <Row>
                    <hr />
                    <Col md={{ span: 7 }}>
                        <h3>Sobre {owner.username}</h3>
                        <p>{owner.description}</p>
                    </Col>
                    <Col md={{ span: 5 }}>
                        <img className="profile" src={owner.profileImage} alt={owner.username} />
                    </Col>
                </Row>
            </section>
        </>
    )
}

export default ItineraryOwner