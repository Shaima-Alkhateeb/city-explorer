import React from "react";
import Alert from 'react-bootstrap/Alert';
// import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.min.css';

class ErrorComponent extends React.Component {
    render() {
        return(
            <>

            {/* <p>{this.props.error}</p> */}
            <Alert key={this.props.error} variant={this.props.error}>
              This City is {this.props.error} , please try another city
            </Alert>
            </>
        )
    }
}

export default ErrorComponent;