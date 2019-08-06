import React, { Component } from 'react';
import './App.css';
import { Route, Link, BrowserRouter as Router, Switch } from 'react-router-dom';
import { Redirect } from 'react-router';
import FriendsTab from './components/FriendsTab';
import UpcomingEventsTab from './components/UpcomingEventsTab';
import UserPanel from './components/UserPanel';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Notfound from './components/notFound';

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
                    <Router>
                        <Col xs lg="3">
                            <UserPanel handlerFromParant={this.handleData} />
                        </Col>
                        <Col xs lg="9">
                            <ul className="tab-list">
                                <li className="tab-list-item">
                                    <Link className="nav-bar" to={`/players/${this.state.userId}/upcoming`}>Upcoming Events</Link>
                                </li>
                                <li className="tab-list-item">
                                    <Link className="nav-bar" to={`/players/${this.state.userId}/friends`}>Friends</Link>
                                </li>
                            </ul>
                            <Switch>
                                <Route
                                    path="/players/:id/upcoming"
                                    render={(props) => <UpcomingEventsTab {...props} title="Upcoming events" />}
                                />
                                <Route
                                    path="/players/:id/friends"
                                    render={(props) => <FriendsTab {...props} title="Friends" />}
                                />
                                <Route
                                    path="/players/:id"
                                    render={(props) => <FriendsTab {...props} title="Friends" />}
                                />
                                <Redirect from="/" to="/players/1/upcoming" />
                                <Route component={Notfound} />
                            </Switch>
                        </Col>
                    </Router>
                </Row>
            </Container>
        );
    }
}

export default ProfilePage