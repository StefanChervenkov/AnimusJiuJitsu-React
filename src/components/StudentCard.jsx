import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';

function StudentCard(props) {
    return (
        <Card  
        style={{ width: '18rem' }}
        bg='light'
        >
            <Card.Img variant="top" src="https://www.ukbjja.org/wp-content/uploads/2021/07/cecrphk0fnushkq5ix0o.jpg" />
            <Card.Body>
                <Card.Title>{props.name}</Card.Title>
                <ListGroup variant="flush">
                    <ListGroup.Item>Blue Belt </ListGroup.Item>
                    <ListGroup.Item>Adult</ListGroup.Item>
                    <ListGroup.Item></ListGroup.Item>
                </ListGroup>

                
                <Button variant="primary">Edit Profile</Button>
            </Card.Body>
        </Card>
    );
}

export default StudentCard;