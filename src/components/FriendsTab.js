import React from "react";
import Container from 'react-bootstrap/Container';
import Media from 'react-bootstrap/Col';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';

const FriendPicture = ({ image }) => (
  <Media>
    <div className="user-friends-picture">
      <img className="rounded-picture"
        width={50}
        height={50}
        src={image}
        alt="friends"
      />
    </div>
  </Media>
)

const Friends = ({ name, events, friends }) => (
  <div >
    <h3 className="user-friends-name">{name}</h3>
    <h4 className="user-friends-info">{events} events</h4>
    <h4 className="user-friends-info">{friends} friends</h4>
  </div>
)

class FriendsTab extends React.Component {
  render() {
    return (
      <Container>
        <h5>{this.props.title}</h5>
        <Row>
          <div className="style-border">
            <Row>
              <Col xs lg="4">
                <FriendPicture image={"https://s3.amazonaws.com/uifaces/faces/twitter/rawdiggie/128.jpg"} />
              </Col>
              <Col>
                <Friends name={"Maeva Chevalier"} events={340} friends={38} />
              </Col>
            </Row>
          </div>
          <div className="style-border">
            <Row>
              <Col xs lg="4">
                <FriendPicture image={"https://s3.amazonaws.com/uifaces/faces/twitter/rawdiggie/128.jpg"} />
              </Col>
              <Col>
                <Friends name={"Jean Louis"} events={340} friends={38} />
              </Col>
            </Row>
          </div>
          <div className="style-border">
            <Row>
              <Col xs lg="4">
                <FriendPicture image={"https://s3.amazonaws.com/uifaces/faces/twitter/rawdiggie/128.jpg"} />
              </Col>
              <Col>
                <Friends name={"Louis Patro"} events={340} friends={38} />
              </Col>
            </Row>
          </div>
          <div className="style-border">
            <Row>
              <Col xs lg="4">
                <FriendPicture image={"https://s3.amazonaws.com/uifaces/faces/twitter/rawdiggie/128.jpg"} />
              </Col>
              <Col>
                <Friends name={"Pablo Escobar"} events={340} friends={38} />
              </Col>
            </Row>
          </div>
        </Row>
      </Container>
    );
  }
}

export default FriendsTab