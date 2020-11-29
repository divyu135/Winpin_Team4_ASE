import { FormatAlignCenter } from "@material-ui/icons";
import React, { Component } from "react";
import TextareaAutosize from "react-textarea-autosize";
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
    event.preventDefault();
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
                      <h3>Organization Name</h3>
                      <Label>
                        here is the description of the Organizationhere is the
                        description of the Organizationhere is the description
                        of the Organizationhere is the description of the
                        Organizationhere is the description of the
                        Organizationhere is the description of the Organizations
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

            <Grid.Row>
              <Segment>
                <Accordion>
                  <Accordion.Title>
                    <div>
                      <h3>Organization Name</h3>
                      <Label>
                        here is the description of the Organizationhere is the
                        description of the Organizationhere is the description
                        of the Organizationhere is the description of the
                        Organizationhere is the description of the
                        Organizationhere is the description of the Organizations
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

        {/* <h1>{this.state.apiresponse}</h1> */}
      </div>
    );
  }
}

export default Organization;
