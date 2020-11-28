import React, { Component } from "react";
import { Segment, Image, Tab, Grid, List } from "semantic-ui-react";
import { runInContext } from "vm";
import "../../style/HomePage.css";
import Footer from "../Layout/Footer";

class Event extends Component {
  state = {};
  constructor(props) {
    super(props);
    this.state = { data: [] };
  }
  callAPI() {
    fetch("http://localhost:9000/event/test")
      .then((resp) => {
        return resp.json();
      })
      .then((data) => {
        // da = data.obj;
        this.setState({ data: data.obj });
        // console.log(data.obj);
      });
  }

  componentWillMount() {
    this.callAPI();
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
          <Segment>
            <Segment>
              <Grid columns='three' divided>
                <Grid.Column>
                  <Grid.Row>
                    <Grid.Column>
                      <div class='ui cards'>
                        <div class='card'>
                          <div class='content'>
                            <div class='header'>EventName</div>
                            <div class='description'>
                              Event Description with Date and Time
                            </div>
                          </div>
                          <div class='ui bottom attached button'>
                            <i class='add icon'></i>
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
          </Segment>
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
