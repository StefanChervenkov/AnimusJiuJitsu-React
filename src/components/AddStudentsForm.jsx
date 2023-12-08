

import { Form, Button, Row, Col, Alert } from "react-bootstrap";
import DatePicker from "react-datepicker";
import 'react-phone-number-input/style.css'
import PhoneInput from 'react-phone-number-input'
import { getDatabase, ref, set, push, get, child } from "firebase/database";
import { encodeEmail, decodeEmail } from '../utils/emailEncoding';
import { useState, useEffect } from "react";

export default function AddStudentsForm(params) {
    const [selectedDate, setSelectedDate] = useState(null);
    const [phoneNumber, setPhoneNumber] = useState('');
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [error, setError] = useState('');
    const [success, setSuccess] = useState('');

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


    const createStudent = (event) => {
        event.preventDefault()
        setError('');
        setSuccess('');
        // Input validation
        if (!firstName || !lastName || !email || !selectedDate || !phoneNumber) {

            setError('Please fill in all required fields.')
            return;
        }



        const dbRef = ref(getDatabase());
        const studentsRef = child(dbRef, 'students');

        get(studentsRef).then((snapshot) => {

            if (snapshot.exists()) {
                const studentsDetails = Object.values(snapshot.val())

                const emailExists = studentsDetails.find((student) => student.email === email);
                if (emailExists) {
                    console.log('The email already exists in the db');
                    setError('The email already exists in the database')
                    return;
                } else {
                    //If email does not exist, proceed to add the new student
                    const newStudentRef = push(studentsRef);

                    set(newStudentRef, {
                        firstName,
                        lastName,
                        birthDate: selectedDate.toISOString(),
                        phoneNumber,
                        email: email.trim()
                    });

                    setSuccess('Student data successfully added.');
                    // Reset the input fields
                    setFirstName('');
                    setLastName('');
                    setEmail('');
                    setSelectedDate(null);
                    setPhoneNumber('');
                }
            } else {
                setError("No data available");
            }
        }).catch((error) => {
            console.error(error);
        });


    }

    const formStyles = {
        margin: '30px 60px 30px',
        border: '3px solid #343a40',
        padding: '30px'
    }


    return (
        <>
            <Form style={formStyles}>

                {error && <Alert variant='danger' >{error} </Alert>}
                {success && <Alert variant='success' >{success} </Alert>}

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
                            <Form.Control onChange={handleFirstNameChange} type="text" required value={firstName}></Form.Control>
                        </Col>
                        <Col>
                            <Form.Label>Last Name</Form.Label>
                            <Form.Control onChange={handleLastNameChange} type="text" required value={lastName}></Form.Control>
                        </Col>
                    </Row>

                    <Form.Group className="mb-3" controlId="email">
                        <Row>
                            <Form.Label>Email</Form.Label>
                            <Form.Control onChange={handleEmailChange} type="email" required value={email}></Form.Control>
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