import React, { Component } from "react";
import { Segment, Image, Tab, Grid, List } from "semantic-ui-react";
import { runInContext } from "vm";
import "../../style/HomePage.css";
import Footer from "../Layout/Footer";
import DisplayList from "./DisplayList";

class Event extends Component {
  state = {};
  events = [];
  constructor(props) {
    super(props);
    this.state = { data: [] };
    this.events = [];
  }
  callAPI() {
    fetch("/event_list")
      .then((resp) => {
        return resp.json();
      })
      .then((data) => {
        // da = data.obj;
        this.setState({ data: data.obj });
        // console.log(data.obj);
      });
  }

  callEventsDB() {
    fetch("/events-db")
      .then((resp) => {
        return resp.json()
      })
      .then((data) => {
        this.events =data;
        console.log(this.events)

      });
  }

  componentWillMount() {
    this.callAPI();
    this.callEventsDB();
  }

  render() {
    return (
      <div>
        <Image
          src={"https://www.uwindsor.ca/sites/default/files/eventsheader.jpg"}
          fluid
        ></Image>

        <Segment>
          <h3 className='tabHeader'>Scheduled Events</h3>
          <DisplayList events= {this.events} ></DisplayList>
          {/* <Segment>
            <Segment>
              <Grid columns='three' divided>
                <Grid.Column>
                  <Grid.Row>
                    <Grid.Column>
                      <div className='ui cards'>
                        <div className='card'>
                          <div className='content'>
                            <div className='header'>EventName</div>
                            <div className='description'>
                              Event Description with Date and Time
                            </div>
                          </div>
                          <div className='ui bottom attached button'>
                            <i className='add icon'></i>
                            Join Room
                          </div>
                        </div>
                      </div>
                    </Grid.Column>
                  </Grid.Row>
                </Grid.Column>
                <Grid.Row></Grid.Row>
              </Grid>
            </Segment>
          </Segment> */}
          <h3 className='tabHeader'>Events</h3>
          <Segment>
            <Segment>
              <Grid columns='three' divided>
                <Grid.Row>
                  {this.state.data.map((item) => (
                    <>
                      {item.events.length > 0 ? (
                        <Grid.Column className='gridPadding'>
                          <Segment className='gridheight'>
                            <>
                              <h3>{item.date}</h3>
                              {item.events.map((list) => (
                                <li>
                                  <a href={list.link}>{list.name}</a>
                                </li>
                              ))}
                            </>
                          </Segment>
                        </Grid.Column>
                      ) : null}
                    </>
                  ))}
                </Grid.Row>
              </Grid>
            </Segment>
          </Segment>
        </Segment>
        <Footer></Footer>
      </div>
    );
  }
}

export default Event;
