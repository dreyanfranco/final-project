import Col from 'react-bootstrap/Col'


const MessageCard = ({ message }) => {
    console.log(message)
    return (
        <Col md='12'>
            <p>Rating:{message.rating} Texto:{message.text} Usuario:{message.user.username}</p>
        </Col>
    )
}
export default MessageCard
