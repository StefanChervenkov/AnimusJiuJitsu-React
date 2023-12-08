import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';

function StudentCard(props) {
    return (
        <Card  
        style={{ width: '18rem', margin: '15px', marginLeft: '15px' }}
        bg='light'
        >
            <Card.Img variant="top" src="https://www.ukbjja.org/wp-content/uploads/2021/07/cecrphk0fnushkq5ix0o.jpg" />
            <Card.Body>
                <Card.Title>{props.name}</Card.Title>
                <ListGroup variant="flush">
                    <ListGroup.Item>{props.email} </ListGroup.Item>
                    <ListGroup.Item>{props.phoneNumber} </ListGroup.Item>
                    <ListGroup.Item>Birth date: {props.birthDate} </ListGroup.Item>
                </ListGroup>

                
                <Button variant="primary">Edit Profile</Button>
            </Card.Body>
        </Card>
    );
}

export default StudentCard;