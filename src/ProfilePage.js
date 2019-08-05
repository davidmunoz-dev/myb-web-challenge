import React, { Component } from 'react';
import './App.css';
import FriendsTab from './components/FriendsTab';
import UpcomingEventsTab from './components/UpcomingEventsTab';
import UserPanel from './components/UserPanel';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';

class ProfilePage extends Component {
    render() {
        return (
            <Container>
                <Row>
                    <Col xs lg="3">
                        <UserPanel />
                    </Col>
                    <Col xs lg="9">
                    <Navbar>
                        <Nav>
                            <Nav.Link href="#Upcoming events">Upcoming events</Nav.Link>
                            <Nav.Link href="#Friends">Friends</Nav.Link>
                        </Nav>
                    </Navbar>
                    <UpcomingEventsTab />
                    <FriendsTab />
                    </Col>
                </Row>
            </Container>
        );
    }
}

export default ProfilePage