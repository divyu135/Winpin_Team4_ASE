import { FormatAlignCenter } from "@material-ui/icons";
import React, { Component } from "react";
import TextareaAutosize from "react-textarea-autosize";
import Footer from "../Layout/Footer";
import {
  Segment,
  Image,
  Tab,
  Grid,
  List,
  Form,
  Label,
  Input,
  Button,
  Modal,
  Checkbox,
  Header,
  Accordion,
} from "semantic-ui-react";
import "../../style/HomePage.css";
import organization from "../Organization/organization.jpg";

class Organization extends Component {
  state = {};

  constructor(props) {
    super(props);
    this.state = {
      name: "",
      email: "",
      contact: "",
      message: "",
      activeIndex: 0,
      submitted: false,
    };
  }
  handleNameChange = (event) => {
    this.setState({
      name: event.target.value,
    });
  };
  handleEmailChange = (event) => {
    this.setState({
      email: event.target.value,
    });
  };
  handleContactChange = (event) => {
    this.setState({
      contact: event.target.value,
    });
  };

  handleSubmit = (event) => {
    var participantInfo = {
      name: this.state.name,
      email: this.state.email,
      contact: this.state.contact,
    };

    this.setState({
      submitted: true,
    });
  };

  handleClick = (e, titleProps) => {
    const { index } = titleProps;
    const { activeIndex } = this.state;
    const newIndex = activeIndex === index ? -1 : index;

    this.setState({ activeIndex: newIndex });
  };

  render() {
    return (
      <div>
        {/* <Segment>
          <Image src={organization} style={{ maxHeight: "28vh" }} fluid></Image>
        </Segment> */}
        <h2 className='tabHeader'>Organization Details</h2>
        <Segment>
          <Grid>
            <Grid.Row>
              <Segment>
                <Accordion>
                  <Accordion.Title>
                    <div>
                      <h3>Graduate Student Organization</h3>
                      <Label>
                        The Graduate Student organization is the independent
                        voice of graduate students on campus. It helps you with
                        supporting you in your studies and if you are facing
                        academic problems, providing recreational, social and
                        sporting events, representing all graduate students to
                        the University, the Government and the public.
                      </Label>
                      <div>
                        <Button
                          className='submitbtn'
                          active={this.state.activeIndex === 1}
                          index={1}
                          onClick={this.handleClick}
                        >
                          Enroll for the organization
                        </Button>
                      </div>
                    </div>
                  </Accordion.Title>
                  <Accordion.Content active={this.state.activeIndex === 1}>
                    <Form onSubmit={this.handleSubmit}>
                      <Grid>
                        <Grid.Column width={5}>
                          <Label className='label'>Name of Participant</Label>
                          <Input
                            id='name'
                            required={true}
                            className='inputStyle'
                            placeholder='Please enter your Name '
                            type='text'
                            value={this.state.name}
                            onChange={this.handleNameChange}
                          ></Input>
                        </Grid.Column>

                        <Grid.Column width={6}>
                          <Label className='label'>Email</Label>
                          <Input
                            required={true}
                            className='inputStyle'
                            placeholder='Please enter email address'
                            type='Email'
                            value={this.state.email}
                            onChange={this.handleEmailChange}
                          ></Input>
                        </Grid.Column>
                        <Grid.Column width={5}>
                          <Label className='label'>Contact Number</Label>
                          <Input
                            required={true}
                            className='inputStyle'
                            placeholder='Please Enter your contact Number'
                            type='Number'
                            value={this.state.contact}
                            onChange={this.handleContactChange}
                          ></Input>
                        </Grid.Column>
                        <span>
                          <Button
                            className='submitbtn'
                            type='submit'
                            onClick={this.handleSubmit}
                          >
                            Submit
                          </Button>
                          {/* <Button type='reset'>Reset</Button> */}
                          <br></br>
                          {this.state.submitted ? (
                            <p className='message'>
                              Thank you for enrolling into the organization. You
                              will receive further details by that organization
                            </p>
                          ) : null}

                          <Grid.Row className='gridPaddingCreate'>
                            <p>{this.state.message}</p>
                          </Grid.Row>
                        </span>
                      </Grid>
                    </Form>
                  </Accordion.Content>
                </Accordion>
              </Segment>
            </Grid.Row>

            <Grid.Row>
              <Segment>
                <Accordion>
                  <Accordion.Title>
                    <div>
                      <h3>Sports Centre</h3>
                      <Label>
                        The sports industry is incredibly competitive, with a
                        high barrier to entry and an even steeper climb to the
                        top. This organization help you to be aware regarding
                        this. The organizations that made the list are as
                        different and varied as the industry they represent.
                      </Label>
                      <div>
                        <Button
                          className='submitbtn'
                          active={this.state.activeIndex === 5}
                          index={5}
                          onClick={this.handleClick}
                        >
                          Enroll for the organization
                        </Button>
                      </div>
                    </div>
                  </Accordion.Title>
                  <Accordion.Content active={this.state.activeIndex === 5}>
                    <Form onSubmit={this.handleSubmit}>
                      <Grid>
                        <Grid.Column width={5}>
                          <Label className='label'>Name of Participant</Label>
                          <Input
                            id='name'
                            required={true}
                            className='inputStyle'
                            placeholder='Please enter your Name '
                            type='text'
                            value={this.state.name}
                            onChange={this.handleNameChange}
                          ></Input>
                        </Grid.Column>

                        <Grid.Column width={6}>
                          <Label className='label'>Email</Label>
                          <Input
                            required={true}
                            className='inputStyle'
                            placeholder='Please enter email address'
                            type='Email'
                            value={this.state.email}
                            onChange={this.handleEmailChange}
                          ></Input>
                        </Grid.Column>
                        <Grid.Column width={5}>
                          <Label className='label'>Contact Number</Label>
                          <Input
                            required={true}
                            className='inputStyle'
                            placeholder='Please Enter your contact Number'
                            type='Number'
                            value={this.state.contact}
                            onChange={this.handleContactChange}
                          ></Input>
                        </Grid.Column>
                        <span>
                          <Button
                            className='submitbtn'
                            type='submit'
                            onClick={this.handleSubmit}
                          >
                            Submit
                          </Button>
                          <Button type='reset'>Reset</Button>
                          <Grid.Row className='gridPaddingCreate'>
                            <p>{this.state.message}</p>
                          </Grid.Row>
                        </span>
                      </Grid>
                    </Form>
                  </Accordion.Content>
                </Accordion>
              </Segment>
            </Grid.Row>
          </Grid>
        </Segment>
        <Footer></Footer>
        {/* <h1>{this.state.apiresponse}</h1> */}
      </div>
    );
  }
}

export default Organization;
