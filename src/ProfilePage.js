import React, { Component } from 'react';
import './App.css';
import FriendsTab from './components/FriendsTab';
import UpcomingEventsTab from './components/UpcomingEventsTab';
import UserPanel from './components/UserPanel';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Notfound from './components/notFound';
import Tabs from './components/Tabs';

class ProfilePage extends Component {

    constructor() {
        super();
        this.handleData = this.handleData.bind(this);
        this.state = {
            userId: null
        };
    }

    handleData(fetchedData) {
        this.setState({
            userId: fetchedData.id
        });
    }

    render() {
        return (
            <Container>
                <Row>
                    <Col xs lg="3">
                        <UserPanel handlerFromParant={this.handleData} />
                    </Col>
                    <Col xs lg="9">
                        <Tabs>
                            <div label="Upcoming events">
                                <UpcomingEventsTab title="Upcoming events"/>
                            </div>
                            <div label="Friends">
                                <FriendsTab title="Friends"/>
                            </div>
                        </Tabs>
                    </Col>
                </Row>
            </Container>
        );
    }
}

export default ProfilePage