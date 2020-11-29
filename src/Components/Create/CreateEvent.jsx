import React, { Component } from "react";
import organization from "../Organization/organization.jpg";
import TextareaAutosize from "react-textarea-autosize";
import TextField from "@material-ui/core/TextField";
import Datetime from "react-datetime";

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
} from "semantic-ui-react";
import { FormGroup } from "@material-ui/core";
import "../../style/HomePage.css";

const ModalExampleModal = (props) => {
  const [open, setOpen] = React.useState(false);
  return (
    <Modal
      onClose={() => setOpen(false)}
      onOpen={() => setOpen(true)}
      open={open}
      //   show={confirmData.confirmCreate}
      trigger={<Button className='submitbtn'>Show Details</Button>}
    >
      <Modal.Header>Confirm Event Details</Modal.Header>
      <Modal.Content>
        <Modal.Description>
          <Segment>
            <Grid>
              <Grid.Column width={8}>
                <Grid.Row>
                  <Label className='confirmLabel'>Event Creater Name: </Label>
                  <Label>{confirmData.createrName}</Label>
                </Grid.Row>
                <Grid.Row>
                  <Label className='confirmLabel'>Event Name: </Label>
                  <Label>{confirmData.eventName}</Label>
                </Grid.Row>
                <Grid.Row>
                  <Label className='confirmLabel'>Event Description: </Label>
                  <Label>{confirmData.description}</Label>
                </Grid.Row>
              </Grid.Column>
              <Grid.Column width={8}>
                <Grid.Row>
                  <Label className='confirmLabel'>
                    Maximum number of Participants:{" "}
                  </Label>
                  <Label>{confirmData.participants}</Label>
                </Grid.Row>
                <Grid.Row>
                  <Label className='confirmLabel'>Event Passcode: </Label>
                  <Label>{confirmData.passcode}</Label>
                </Grid.Row>
                <Grid.Row>
                  <Label className='confirmLabel'>Event Date: </Label>
                  <Label>{confirmData.datetime}</Label>
                </Grid.Row>
                <Grid.Row>
                  <Label className='confirmLabel'>Email: </Label>
                  <Label>{confirmData.email}</Label>
                </Grid.Row>
                <Grid.Row>
                  <Label className='confirmLabel'>Contact : </Label>
                  <Label>{confirmData.contact}</Label>
                </Grid.Row>
              </Grid.Column>
            </Grid>
          </Segment>
        </Modal.Description>
      </Modal.Content>
      <Modal.Actions>
        {/* <Button
          contact='Cancle'
          onClick={() => {
            setOpen(false);
          }}
        >
          Cancle
        </Button> */}
        <Button
          content='Confirm'
          labelPosition='right'
          icon='checkmark'
          onClick={() => {
            setOpen(false);
            props.mm(true);
          }}
          positive
        />
      </Modal.Actions>
    </Modal>
  );
};

var confirmData = {};

// const passDataToConfirm = () => {
// //   console.log(confirmData);
//   if (confirmData.confirmCreate) {
//     console.log(confirmData);
//   }
// };

class CreateEvent extends Component {
  state = {};

  constructor(props) {
    super(props);
    this.state = {
      eventName: "",
      description: "",
      participants: "",
      passcode: "",
      createrName: "",
      email: "",
      contact: "",
      datetime: "",
      confirmCreate: false,
      submitEnable: false,
      messageConfirm:
        "Please add all required details before you confirm the details",
    };
  }
  minDate = new Date();
  setterSubmit = (val) => {
    // console.log("inside setSubl=mit " + val);
    this.setState({
      submitEnable: val,
    });
  };
  handleEventNameChange = (event) => {
    this.setState({
      eventName: event.target.value,
    });
    this.passDataToConfirm();
  };
  handleDescriptionChange = (event) => {
    this.setState({
      description: event.target.value,
    });
    this.passDataToConfirm();
  };
  handleCreaterNameChange = (event) => {
    this.setState({
      createrName: event.target.value,
    });
    this.passDataToConfirm();
  };
  handleEmailChange = (event) => {
    this.setState({
      email: event.target.value,
    });
    this.passDataToConfirm();
  };
  handleContactChange = (event) => {
    this.setState({
      contact: event.target.value,
    });
    this.passDataToConfirm();
  };
  handleDateChange = (event) => {
    this.setState({
      datetime: event.target.value,
    });
    // console.log(this.state.datetime);
    
    this.passDataToConfirm();
  };
  handleParticipantsChange = (event) => {
    this.setState({
      participants: event.target.value,
    });
    this.passDataToConfirm();
  };
  handlePasscodeChange = (event) => {
    this.setState({
      passcode: event.target.value,
    });
    this.passDataToConfirm();
  };

  passDataToConfirm = () => {
    confirmData = this.state;
  };

  handleChange = (e, { checked }) => {
    // console.log(checked);
    this.setState({
      confirmCreate: checked,
    });

    if (checked) {
      this.state.confirmCreate = true;
      confirmData = this.state;
    } else {
      this.state.confirmCreate = false;
      this.setState({
        submitEnable: false,
      });
    }
    // this.log("Change", checked);
  };
  handleSubmit = (event) => {                                                                                                                                                  
    var eventInfo = {
      eventName: this.state.eventName,
      eventDescription: this.state.description,
      participants: this.state.participants,
      date: this.state.datetime,
      passcode: this.state.passcode,
      name: this.state.createrName,
      email: this.state.email,
      contact: this.state.contact,
    };

    const requestOptions = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(eventInfo),
    };
    fetch("/insert-event-db", requestOptions)
      .then((resp) => resp.json())
      .then((result) => {
        if (result) {
          this.state({
            message: "Event Information has beeen submitted successfully.",
          });
        }
      });

    event.preventDefault();
  };
  render() {
    const enableCheck =
      this.state.eventName.length > 0 &&
      this.state.description.length > 0 &&
      this.state.datetime.length > 0 &&
      this.state.participants.length > 0 &&
      this.state.passcode.length > 0 &&
      this.state.createrName.length > 0 &&
      this.state.email.length > 0 &&
      this.state.contact.length > 0;

    return (
      <div>
        <h1 className='tabHeaderCreate'>Create your own Event</h1>

        <Segment>
          <Form>
            <Grid>
              <Grid.Column width={6}>
                <Segment>
                  <Grid.Row className='gridPaddingCreate'>
                    <Label className='label'>Event Name</Label>
                    <Input
                      required={true}
                      className='inputStyle'
                      disabled={this.state.confirmCreate}
                      placeholder='Please Enter Event Name'
                      type='text'
                      value={this.state.eventName}
                      onChange={this.handleEventNameChange}
                    ></Input>
                  </Grid.Row>
                  <Grid.Row className='gridPaddingCreate'>
                    <Label className='label'>Event Description</Label>
                    <TextareaAutosize
                      required={true}
                      disabled={this.state.confirmCreate}
                      value={this.state.description}
                      onChange={this.handleDescriptionChange}
                      placeholder='Enter brif idea regarding your event'
                      onHeightChange={(height, instance) =>
                        console.log(height, instance.rowCount)
                      }
                    />
                  </Grid.Row>
                </Segment>
              </Grid.Column>
              <Grid.Column width={5}>
                <Segment>
                  <Grid.Row className='gridPaddingCreate'>
                    <Label className='label'>
                      Maximum Number of Participants
                    </Label>
                    <Input
                      required={true}
                      disabled={this.state.confirmCreate}
                      className='inputStyle'
                      placeholder='Please Enter Maximum number of Participants allowed'
                      type='Number'
                      maxLength='11'
                      value={this.state.participants}
                      onChange={this.handleParticipantsChange}
                    ></Input>
                  </Grid.Row>
                  <Grid.Row className='gridPaddingCreate'>
                    <Label className='label'>Date and Time</Label>

                    <TextField
                      type='datetime-local'
                      className='inputStyle'
                      disabled={this.state.confirmCreate}
                      value={this.state.datetime}
                      onChange={this.handleDateChange}
                      min={this.minDate}
                      InputLabelProps={{
                        shrink: true,
                      }}
                    />
                    {/* {console.log(this.minDate)} */}
                    {/* <input
                      type='datetime-local'
                      className='inputStyle'
                      value={this.state.datetime}
                      onChange={this.handleDateChange}
                      min={minDate}
                    ></input> */}
                  </Grid.Row>
                  <Grid.Row className='gridPaddingCreate'>
                    <Label className='label'>Passcode</Label>
                    <Input
                      required={true}
                      disabled={this.state.confirmCreate}
                      className='inputStyle'
                      placeholder='Please Enter your passcode'
                      type='Number'
                      value={this.state.passcode}
                      onChange={this.handlePasscodeChange}
                    ></Input>
                  </Grid.Row>
                </Segment>
              </Grid.Column>
              <Grid.Column width={5}>
                <Segment>
                  <Grid.Row className='gridPaddingCreate'>
                    <Label className='label'>Creator Name</Label>
                    <Input
                      required={true}
                      className='inputStyle'
                      disabled={this.state.confirmCreate}
                      placeholder='Please Enter your Name'
                      type='text'
                      value={this.state.createrName}
                      onChange={this.handleCreaterNameChange}
                    ></Input>
                  </Grid.Row>
                  <Grid.Row className='gridPaddingCreate'>
                    <Label className='label'>Email</Label>
                    <Input
                      required={true}
                      className='inputStyle'
                      disabled={this.state.confirmCreate}
                      placeholder='Please Enter your email address'
                      type='Email'
                      value={this.state.email}
                      onChange={this.handleEmailChange}
                    ></Input>
                  </Grid.Row>
                  <Grid.Row className='gridPaddingCreate'>
                    <Label className='label'>Contact Number</Label>
                    <Input
                      required={true}
                      disabled={this.state.confirmCreate}
                      className='inputStyle'
                      placeholder='Please Enter your contact Number'
                      type='Number'
                      value={this.state.contact}
                      onChange={this.handleContactChange}
                    ></Input>
                  </Grid.Row>
                </Segment>
              </Grid.Column>
              <span>
                <Grid.Row className='gridPaddingCreate'>
                  {enableCheck === false ? (
                    <p className='message'> {this.state.messageConfirm}</p>
                  ) : null}
                  <Checkbox
                    onChange={this.handleChange}
                    onClick={this.handleClick}
                    label='Please confirm your details  '
                    disabled={!enableCheck}
                  ></Checkbox>
                  {this.state.confirmCreate == true ? (
                    <span className='showDetailsbtn'>
                      <ModalExampleModal
                        mm={this.setterSubmit}
                      ></ModalExampleModal>
                    </span>
                  ) : null}
                </Grid.Row>
                <Grid.Row className='gridPaddingCreate'>
                  <Button
                    className='submitbtn'
                    type='submit'
                    disabled={!this.state.submitEnable}
                    onClick={this.handleSubmit}
                  >
                    Submit
                  </Button>
                  {/* <Button type='reset'>Reset</Button> */}
                </Grid.Row>
              </span>
            </Grid>
          </Form>
        </Segment>
      </div>
    );
  }
}

export default CreateEvent;
