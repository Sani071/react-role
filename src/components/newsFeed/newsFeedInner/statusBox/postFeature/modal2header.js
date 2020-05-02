import React from 'react';
import BackButton from './backbtn';
import { Row, Col } from 'reactstrap';

export default function Modal2header({ headerTitle, icon, clickHandler }) {
    return (
        <Row className="stb-m2-header">
            <Col sm="5" md="5" lg="5">
                <BackButton clickHandler={ clickHandler } />
            </Col>
            <Col sm="6" md="6" lg="6">
                {/* <span className="mr-1">{ icon }</span> */ }
                <span>{ headerTitle }</span>
            </Col>
        </Row>
    )
}
