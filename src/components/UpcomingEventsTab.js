import React from "react";
import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';

const Events = ({ remaining, name, day, hour, participants }) => (
  <div >
    <h4 className="user-event-remaining">in {remaining}</h4>
    <h3 className="bold-info">{name}</h3>
    <h4 className="user-event-date"> {day}</h4>
    <h4 className="user-event-date"> at {hour} </h4>
    <h4 className="user-event-participants">{participants} participants</h4>
  </div>
)

class UpcomingEventsTab extends React.Component {

  render() {
    return (
      <Container>
        <h5>{this.props.title}</h5>
        <Row>
          <div className="style-border">
            <Col>
              <Events remaining={"1 week"} name={"SKATEBOARD"} day={"Sunday 10 August"} hour={"10:00"} participants={20} />
            </Col>
          </div>
          <div className="style-border">
            <Col>
              <Events remaining={"1 month"} name={"SURF"} day={"Tuesday 10 September"} hour={"15:09"} participants={40} />
            </Col>
          </div>
          <div className="style-border">
            <Col>
              <Events remaining={"3 months"} name={"DJ"} day={"Friday 15 November"} hour={"21:30"} participants={2} />
            </Col>
          </div>
          <div className="style-border">
            <Col>
              <Events remaining={"6 months"} name={"TENNIS"} day={"Tuesday 29 January"} hour={"20:09"} participants={11} />
            </Col>
          </div>
        </Row>
      </Container>
    );
  }
}

export default UpcomingEventsTab