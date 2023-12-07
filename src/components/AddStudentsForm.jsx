import { Form, Button, Row, Col, InputGroup } from "react-bootstrap";
import DatePicker from "react-datepicker";
import 'react-phone-number-input/style.css'
import PhoneInput from 'react-phone-number-input'
import { getDatabase, ref, set, push, query, equalTo, get } from "firebase/database";
import { encodeEmail, decodeEmail } from '../utils/emailEncoding';
import { useState } from "react";

export default function AddStudentsForm(params) {
    const [selectedDate, setSelectedDate] = useState(null);
    const [phoneNumber, setPhoneNumber] = useState('');
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');

    const handleDateChange = (date) => {
        setSelectedDate(date);

    };
    const handleFirstNameChange = (event) => {
        const value = event.target.value;
        setFirstName(value);

    }
    const handleLastNameChange = (event) => {
        const value = event.target.value;
        setLastName(value)

    }
    const handlePhoneNumberChange = (value) => {
        setPhoneNumber(value)

    }

    const handleEmailChange = (event) => {
        const value = event.target.value
        setEmail(value)

    }

    const createStudent = async (event) => {
        event.preventDefault()
        const db = getDatabase();

        try {
            

            // Check if a student with the same email already exists
            const filteredStudentsUrl = `https://animusjiujitsu-default-rtdb.europe-west1.firebasedatabase.app/students.json?orderBy="email"&equalTo="${email.trim()}"`

            const data = await fetch(filteredStudentsUrl);
            const studentObj = await data.json();
            
            if (Object.keys(studentObj).length !== 0) {
                console.log('The email exists in the db');
                return;
            }

            

            //If email does not exist, proceed to add the new student
            const newStudentRef = push(ref(db, 'students'));

            set(newStudentRef, {
                firstName,
                lastName,
                birthDate: selectedDate.toISOString(),
                phoneNumber,
                email: email.trim()
            });

            console.log('Student data successfully added.');
        } catch (error) {
            console.error('Error adding student data:', error.message);
            // Handle the error
        }


    }

    const formStyles = {
        margin: '30px 60px 30px',
        border: '3px solid #343a40',
        padding: '30px'
    }


    return (
        <>
            <Form style={formStyles}>
                <Form.Group className="mb-3" controlId="birthDate">
                    <Row>

                        <Col xs="auto">
                            <Form.Label >Birth Date</Form.Label>
                        </Col>

                        <Col xs="auto">
                            <DatePicker
                                selected={selectedDate}
                                onChange={handleDateChange}
                                dateFormat="MM/dd/yyyy"
                                showYearDropdown
                                scrollableYearDropdown
                                yearDropdownItemNumber={100}
                                maxDate={new Date()}
                                placeholderText="Select a birth date"
                                showIcon
                            />
                        </Col>



                    </Row>


                </Form.Group>

                <Form.Group className="mb-3" controlId="name">
                    <Row>
                        <Col>
                            <Form.Label>First Name</Form.Label>
                            <Form.Control onChange={handleFirstNameChange} type="text" required></Form.Control>
                        </Col>
                        <Col>
                            <Form.Label>Last Name</Form.Label>
                            <Form.Control onChange={handleLastNameChange} type="text" required></Form.Control>
                        </Col>
                    </Row>

                    <Form.Group className="mb-3" controlId="email">
                        <Row>
                            <Form.Label>Email</Form.Label>
                            <Form.Control onChange={handleEmailChange} type="email" required></Form.Control>
                        </Row>
                    </Form.Group>



                </Form.Group>

                <Form.Group className="mb-3" controlId="phoneNumber">
                    <Row>
                        <Form.Label>Phone Number</Form.Label>
                        <PhoneInput
                            placeholder="Enter phone number"
                            value={phoneNumber}
                            onChange={handlePhoneNumberChange}
                            defaultCountry="BG"
                            displayInitialValueAsLocalNumber
                        />
                    </Row>

                </Form.Group>


                <Button onClick={createStudent} variant="primary" type="submit">
                    Submit
                </Button>
            </Form>
        </>
    )
}