import React, { Component } from 'react';
import {Col, Row, Image} from 'react-bootstrap';

class FocalTest extends Component {  
    render() {
        return (
            <Row>
            <Col md={5}>
            <Image src="https://assets.imgix.net/unsplash/bridge.jpg?w=500&h=500&fit=crop&auto=compress&fp-debug=true" />
            <Image src="https://assets.imgix.net/unsplash/pineneedles.jpg?w=500&h=500&fit=crop&auto=compress&fp-debug=true" />

            </Col>

            <Col md={5}>
            <Image src="https://assets.imgix.net/unsplash/bridge.jpg?w=500&h=500&fit=crop&auto=compress&fp-x=0.5&fp-y=0.5&fp-debug=true" />
            <Image src="https://assets.imgix.net/unsplash/pineneedles.jpg?w=500&h=500&fit=crop&auto=compress&fp-x=0.5&fp-y=0.5&fp-debug=true" />

            </Col>
            </Row>

        )
    }
}

export default FocalTest;
