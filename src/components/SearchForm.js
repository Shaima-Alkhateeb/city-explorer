import React from "react";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

class SearchForm extends React.Component {
    render() {
        return(
            <>
            <h1>City Explore 🌏 </h1>
            <Form onSubmit={this.props.submitHandler}>
                <Form.Label id='searchQuery'></Form.Label>
                <Form.Control type="text" id='searchQuery' placeholder="Enter the city..." /><br/>

                <Button variant="primary" type="submit">
                  Explore!
                </Button>

            </Form>
            </>
        )
    }

}

export default SearchForm;