
    import axios from 'axios';
import React, { useState } from 'react';
import { Button, Form } from 'react-bootstrap';

    const Registration = () => 
    {
        const [entry, setEntry] = useState({})
        const ChangeValue = (key, value) =>setEntry({...entry, [`${key}`]: value});
        const handleSubmit = (event) => 
        {
            event.preventDefault()
            const URL = "https://poker247.herokuapp.com/"
            axios.post(URL, entry).then(res => console.log(res.data)).then(()=> alert('success'))
        }
        return (
            <div className='Registration'>
            <Form>
            <Form.Group controlId="formBasicEmail">
                <Form.Label>Name</Form.Label>
                <Form.Control type="text" placeholder="Enter Player Name" onChange = {(event)=>
                {
                    ChangeValue('name', event.target.value)
                }} />
                <Form.Text className="text-muted">
                Enter player name
                </Form.Text>
            </Form.Group>

            <Form.Group controlId="text">
                <Form.Label>Number of Poker games won</Form.Label>
                <Form.Control type="text" placeholder="Winnings" onChange ={(event)=>
                {
                    ChangeValue('winnings', event.target.value)
                }} />
            </Form.Group>
            {/* <Form.Group controlId="formBasicCheckbox">
                <Form.Check type="text" label="winnings" />
            </Form.Group> */}
            <Button variant="primary" type="submit" onClick={handleSubmit}>
                Submit
            </Button>
            </Form>
            </div>
        )
    }

    export default Registration;
