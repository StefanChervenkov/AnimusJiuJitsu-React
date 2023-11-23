import { Form, Button, Row, Col, InputGroup } from "react-bootstrap";
import DatePicker from "react-datepicker";
import 'react-phone-number-input/style.css'
import PhoneInput from 'react-phone-number-input'

import { useState } from "react";

export default function EditProfileForm(params) {
    const [selectedDate, setSelectedDate] = useState(null);
    const [phoneNumber, setPhoneNumber] = useState('');

    const handleDateChange = (date) => {
        setSelectedDate(date);
    };
    const handlePhoneNumberChange = (value) => {
        setPhoneNumber(value)
        console.log(phoneNumber);
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
                            <Form.Control type="text" required></Form.Control>
                        </Col>
                        <Col>
                            <Form.Label>Last Name</Form.Label>
                            <Form.Control type="text" required></Form.Control>
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


                <Button variant="primary" type="submit">
                    Submit
                </Button>
            </Form>
        </>
    )
}