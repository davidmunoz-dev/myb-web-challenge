import React from "react";
import Container from 'react-bootstrap/Container';
import Media from 'react-bootstrap/Col';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Fetch from './Fetch';
import ToolsHelper from '../helper/toolsHelper';
import '../App.css';

const ProfilePicture = ({ picture }) => (
    <Media>
        <div className="margin-header">
            <img className="rounded-picture"
                width={210}
                height={210}
                src={picture}
                align="center"
                alt="profile"
            />
        </div>
    </Media>
)

const ProfileInfo = ({ name, company, city_name, last_seen }) => (
    
    <div>
        <h3 className="user-panel-info-name">{name}</h3>
        <h4 className="user-panel-info-company">Works at {company}</h4>
        <h4 className="user-panel-info-more">Lives in {city_name} <br /> Last seen {last_seen}</h4>
    </div>
)

const EventsFriends = ({ events, friends }) => (
    <div className="user-panel-events-friends">
        <Row>
            <Col>
                <h3 className="bold-info"> {events}</h3>
                <h4 className="grey-info"> events </h4>
            </Col>
            <Col>
                <h3 className="bold-info"> {friends}</h3>
                <h4 className="grey-info"> friends </h4>
            </Col>
        </Row>
    </div>
)

class UserPanel extends React.Component {

    constructor() {
        super();
        this.handleData = this.handleData.bind(this);
        this.state = {
        };
    }

    handleData(fetchedData) {
        this.setState({
            id: fetchedData.data.id,
            picture: fetchedData.data.picture,
            first_name: fetchedData.data.first_name,
            last_name: fetchedData.data.last_name,
            company: fetchedData.data.company,
            city_name: fetchedData.data.city_name,
            last_seen: ToolsHelper.difference_date(fetchedData.data.last_seen),
            total_events: fetchedData.data.total_events,
            total_friends: fetchedData.data.total_friends
        });
        this.props.handlerFromParant(this.state);
    }

    render() { 
        if (this.state.data) {
            return <div>Can't get an user...</div>;
        }
        return (
            <Container>
                <Fetch path="/players/1" handlerFromParant={this.handleData} />
                <Row>
                    <ProfilePicture picture={this.state.picture} />
                </Row>
                <ProfileInfo
                    name={this.state.first_name + " " + this.state.last_name}
                    company={this.state.company}
                    city_name={this.state.city_name}
                    last_seen={this.state.last_seen} />
                <EventsFriends events={this.state.total_events} friends={this.state.total_friends} />
            </Container>
        );
    }
}

export default UserPanel;
