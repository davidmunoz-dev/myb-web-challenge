import React from "react";
import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Fetch from './Fetch';
import ToolsHelper from '../helper/toolsHelper';

const Events = ({ remaining, name, day, hour, participants }) => (
  <div >
    <h4 className="user-event-remaining">in {ToolsHelper.remaining_time(remaining)}</h4>
    <h3 className="bold-info">{name}</h3>
    <h4 className="user-event-date"> {ToolsHelper.get_day_from_date(day)}</h4>
    <h4 className="user-event-date"> at {hour} </h4>
    <h4 className="user-event-participants">{participants} participants</h4>
  </div>
)

class UpcomingEventsTab extends React.Component {

  constructor() {
    super();
    this.handleData = this.handleData.bind(this);
    this.state = {
      events: [],
    };
  }

  handleData(fetchedData) {
    this.setState({
      events: fetchedData.data
    });
  }


  render() {

    const { params } = this.props.match;

    if (this.state.data) {
      return <div>Can't get an user...</div>;
    }

    return (
      <Container>
        <div>
          <h5>{this.props.title}</h5>
          <Fetch path={"/players/" + params.id + "/lastEvents"} handlerFromParant={this.handleData} />
          <Row>
            {this.state.events.map(event => (
              <div className="style-border" key={event.id} >
                <Col>
                  <Events remaining={event.date} name={event.name} day={event.date} hour={event.date.substring(11, 16)} participants={event.participants.length} />
                </Col>
              </div>
            ))}
          </Row>
        </div>
      </Container>
    );
  }
}

export default UpcomingEventsTab