import React from "react";
import Container from 'react-bootstrap/Container';
import Media from 'react-bootstrap/Col';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
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

    render() {

        return (
            <Container>
                <Row>
                    <ProfilePicture picture="https://s3.amazonaws.com/uifaces/faces/twitter/taybenlor/128.jpg" />
                </Row>
                <ProfileInfo
                    name={"Yanis Thomas"}
                    company={"Renard, Breton and Lucas"}
                    city_name={"West Mattéo"}
                    last_seen={"4 month ago"} />
                <EventsFriends events={102} friends={83} />
            </Container>
        );
    }
}

export default UserPanel;
