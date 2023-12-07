import { Form, Button, Row, Col, InputGroup } from "react-bootstrap";
import DatePicker from "react-datepicker";
import 'react-phone-number-input/style.css'
import PhoneInput from 'react-phone-number-input'
import { getDatabase, ref, set, push } from "firebase/database";

import { useState } from "react";

export default function AddStudentsForm(params) {
    const [selectedDate, setSelectedDate] = useState(null);
    const [phoneNumber, setPhoneNumber] = useState('');
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');

    const handleDateChange = (date) => {
        setSelectedDate(date);
        console.log(selectedDate);
    };
    const handleFirstNameChange = (event) => {
        const value = event.target.value;
        setFirstName(value);
        console.log(value);
    }
    const handleLastNameChange = (event) => {
        const value = event.target.value;
        setLastName(value)
        console.log(lastName);
    }
    const handlePhoneNumberChange = (value) => {
        setPhoneNumber(value)
        console.log(phoneNumber);
    }

    const createStudent = (event) => {
        event.preventDefault()
        const db = getDatabase();

        try {
            const newStudentRef = push(ref(db, 'students'));

            set(newStudentRef, {
                firstName,
                lastName,
                birthDate: selectedDate.toISOString(),
                phoneNumber
            });

            console.log('Student data successfully added.');
        } catch (error) {
            console.error('Error adding student data:', error.message);
            // Handle the error
        }


        // Use push to generate a unique key and add data under that key

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