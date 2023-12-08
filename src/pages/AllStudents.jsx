import StudentCard from "../components/StudentCard";
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import { getDatabase, ref, onValue } from "firebase/database";
import { useState, useEffect } from "react";

export default function AllStudents() {
    const [students, setStudents] = useState([]);

    useEffect(() => {
        const fetchStudents = () => {
            const db = getDatabase();
            const studentsRef = ref(db, 'students');

            onValue(studentsRef, (snapshot) => {
                if (snapshot.exists()) {
                    const studentsData = snapshot.val();
                    const studentsArray = Object.entries(studentsData).map(([id, student]) => ({ id, ...student }));
                    setStudents(studentsArray);
                } else {
                    console.log('There are no students.');
                }
            });
        };

        fetchStudents(); // Call the function to fetch students when the component mounts
    }, []); // The empty dependency array ensures that this effect runs only once

    return (
        <Row xs={1} md={4} className="g-4">
            {students.map((student) => (
               
                
                <Col key={student.id} >
                    <StudentCard
                        name={student.firstName + ' ' + student.lastName}
                        email={student.email}
                        phoneNumber={student.phoneNumber}
                        birthDate={new Date(student.birthDate).toLocaleDateString()}
                    />
                </Col>
            ))}
        </Row>
    );
}
