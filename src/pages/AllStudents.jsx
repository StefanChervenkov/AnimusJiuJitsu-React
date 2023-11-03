import StudentCard from "../components/StudentCard";
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';

export default function AllStudents() {
    const studentName = 'Sara Johnsson'
    return (
        <Row xs={1} md={4} className="g-4">
            {Array.from({ length: 10 }).map((_, idx) => (
                <Col key={idx}>
                    <StudentCard name={studentName} />
                </Col>
            ))}
        </Row>

    )




};