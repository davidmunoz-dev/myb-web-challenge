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





class FriendsTab extends React.Component {
  constructor() {
    super();
    this.handleData = this.handleData.bind(this);
    this.state = {
      friends: [],
    };
  }

  handleClick(id) {
    window.location.href="http://localhost:3000/players/" + id + "/upcoming";
  }

  handleData(fetchedData) {
    this.setState({
      friends: fetchedData.data
    });
  }

  render() {

    const { params } = this.props.match;

    const Friends = ({ name, events, friends, id }) => (
      <div >
        <a  className="user-friends-name" onClick={(e) => this.handleClick(id, e)}>{name}</a >
        <h4 className="user-friends-info">{events} events</h4>
        <h4 className="user-friends-info">{friends} friends</h4>
      </div>
    )

    return (
      <Container>
        <h5>{this.props.title}</h5>
        <Fetch path={"/players/" + params.id + "/friends"} handlerFromParant={this.handleData} />
        <Row>
          {this.state.friends.map(friend => (
            <div className="style-border" key={friend.id}>
              <Row>
                <Col xs lg="4">
                  <FriendPicture image={friend.picture} />
                </Col>
                <Col>
                  {console.log("friends:" + JSON.stringify(friend))}
                  <Friends name={friend.first_name + " " + friend.last_name} events={friend.total_events} friends={friend.total_friends} id={friend.id} />
                </Col>
              </Row>
            </div>
          ))}
        </Row>
      </Container>
    );
  }
}

export default FriendsTab