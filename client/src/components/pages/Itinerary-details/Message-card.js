import {Row, Col} from 'react-bootstrap'
import star from './star.png'

const MessageCard = ({ message }) => {
    return (
        <Row className="comment align-items-center">
            <Col md={{ span: 2}}>
                <img src={message.user.profileImage} />
            
        </Col>
            <Col md={{ span: 10 }}>
                    <h4 style={{textAlign:"right"}}><img className="rating" src={star}/> {message.rating}</h4>
                    <h4>{message.user.username}</h4>
                <hr />
                <p>{message.text}</p>
            </Col>
        </Row>
    )
}
export default MessageCard
