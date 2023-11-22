import { auth, database } from "../firebase";
import { set, ref, onValue } from "firebase/database";

import { Button, Modal, ListGroup, Card } from 'react-bootstrap';


import { useState, useEffect } from "react";


export default function Profile() {
    const user = auth.currentUser;
    const [studentName, setStudentName] = useState('');
    const [showModal, setShowModal] = useState(false);
    const handleClose = () => setShowModal(false);


    useEffect(() => {
        const studentRef = ref(database, 'students/' + user.uid);

        const onDataChange = (snapshot) => {
            const data = snapshot.val();
            if (data == null) {
                setShowModal(true);


            } else {
                setStudentName(data.username);
            }

        };

        onValue(studentRef, onDataChange);

        return () => {
            // This will unsubscribe the listener when the component is unmounted
            onValue(studentRef, onDataChange);

        };

    }, [user.uid]);



    return (
        <>

            <Card style={{ width: '50rem', marginTop: '20px', marginLeft: '20px' }}>
                <Card.Img
                    variant="top"

                    src="https://flo-static-assets.s3.amazonaws.com/uploads/api/5835abd50880e.jpeg"
                    style={{ maxWidth: '50%', maxHeight: '300px', marginLeft: '150px' }}
                />
                <Card.Body>
                    <Card.Title>{studentName}</Card.Title>
                    <Card.Subtitle className="mb-2 text-muted">{user.email}</Card.Subtitle>
                    <Card.Text>
                        Some quick example text to build on the card title and make up the
                        bulk of the card's content.
                    </Card.Text>
                    <ListGroup className="list-group-flush" style={{ marginBottom: '20px' }}>
                        <ListGroup.Item>Belt Level: ......</ListGroup.Item>
                        <ListGroup.Item>Age: .....</ListGroup.Item>
                        <ListGroup.Item>Favorite technique: .....</ListGroup.Item>
                    </ListGroup>
                    <Button style={{ marginLeft: '20px' }} variant="primary">Edit Profile</Button>
                    <Button style={{ marginLeft: '20px' }} variant="primary">Payments</Button>
                    <Button style={{ marginLeft: '20px' }} variant="primary">Trainings</Button>


                </Card.Body>
            </Card>

           
            {showModal && (
                <>

                    <Modal show={showModal} onHide={handleClose}>
                        <Modal.Header closeButton>
                            <Modal.Title>Student Profile is empty</Modal.Title>
                        </Modal.Header>
                        <Modal.Body>Please take a moment to add some details, such as your profile picture, age, and favorite techniques. Your complete profile ensures you get the most out of our platform. Thank you! 🥋✨"</Modal.Body>
                        <Modal.Footer>
                            <Button variant="secondary" onClick={handleClose}>
                                Close
                            </Button>

                        </Modal.Footer>
                    </Modal>
                </>
            )}

        </>


    );
}