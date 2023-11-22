import { auth, database } from "../firebase";
import { set, ref } from "firebase/database";

import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { ListGroup } from "react-bootstrap";

const studentInfo = {
    username: 'Stefan',
    email: 'testemail@gmail.com',
    profile_picture: 'someImageUrl'
}


export default function Profile() {
    const user = auth.currentUser;


    // function writeStudentData() {
    //     console.log(user.uid);
    //     set(ref(database, 'students/' + user.uid), studentInfo);

    // }


    return (
        <Card style={{ width: '50rem', marginTop: '20px', marginLeft: '20px' }}>
            <Card.Img
                variant="top"

                src="https://flo-static-assets.s3.amazonaws.com/uploads/api/5835abd50880e.jpeg"
                style={{ maxWidth: '50%', maxHeight: '300px', marginLeft: '150px' }}
            />
            <Card.Body>
                <Card.Title>Stefan Chervenkov</Card.Title>
                <Card.Subtitle className="mb-2 text-muted">stefan.chervenkov.sth@gmail.com</Card.Subtitle>
                <Card.Text>
                    Some quick example text to build on the card title and make up the
                    bulk of the card's content.
                </Card.Text>
                <ListGroup className="list-group-flush" style={{ marginBottom: '20px' }}>
                    <ListGroup.Item>Belt Level: Blue Belt</ListGroup.Item>
                    <ListGroup.Item>Age: 30</ListGroup.Item>
                    <ListGroup.Item>Favorite technique: Armbar</ListGroup.Item>
                </ListGroup>
                <Button style={{ marginLeft: '20px' }} variant="primary">Edit Profile</Button>
                <Button style={{ marginLeft: '20px' }} variant="primary">Payments</Button>
                <Button style={{ marginLeft: '20px' }} variant="primary">Trainings</Button>


            </Card.Body>
        </Card>
    );
}