import React from "react";
import Container from 'react-bootstrap/Container';
import Media from 'react-bootstrap/Col';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Fetch from './Fetch';

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
  constructor() {
    super();
    this.handleData = this.handleData.bind(this);
    this.state = {
      friends: [],
    };
  }

  handleData(fetchedData) {
    this.setState({
      friends: fetchedData.data
    });
  }

  render() {
  
    return (
      <Container>
        <h5>{this.props.title}</h5>
        <Fetch path={"/players/1/friends"} handlerFromParant={this.handleData} />
        <Row>
          {this.state.friends.map(friend => (
            <div className="style-border" key={friend.id}>
              <Row>
                <Col xs lg="4">
                  <FriendPicture image={friend.picture} />
                </Col>
                <Col>
                  <Friends name={friend.first_name + " " + friend.last_name} events={friend.total_events} friends={friend.total_friends} />              </Col>
              </Row>
            </div>
          ))}
        </Row>
      </Container>
    );
  }
}

export default FriendsTab