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

function ModalExampleModal() {
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
        <Button
          contact='Cancle'
          onClick={() => {
            setOpen(false);
          }}
        >
          Cancle
        </Button>
        <Button
          content='Confirm'
          labelPosition='right'
          icon='checkmark'
          onClick={() => setOpen(false)}
          positive
        />
      </Modal.Actions>
    </Modal>
  );
}

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
    };
  }
  minDate = new Date();
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
    }
    // this.log("Change", checked);
  };
  handleSubmit = (event) => {
    // this.state;
    event.preventDefault();
  };
  render() {
    return (
      <div>
        <h1 className='tabHeaderCreate'>Create your own Event</h1>

        <Segment>
          <Form onSubmit={this.handleSubmit}>
            <Grid>
              <Grid.Column width={6}>
                <Segment>
                  <Grid.Row className='gridPaddingCreate'>
                    <Label className='label'>Event Name</Label>
                    <Input
                      required={true}
                      className='inputStyle'
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
                      value={this.state.datetime}
                      onChange={this.handleDateChange}
                      min={this.minDate}
                      InputLabelProps={{
                        shrink: true,
                      }}
                    />
                    {console.log(this.minDate)}
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
                  {/* <span>
                    <ModalExampleModal></ModalExampleModal>
                  </span> */}
                  <Checkbox
                    onChange={this.handleChange}
                    onClick={this.handleClick}
                    label='Please confirm your details  '
                  ></Checkbox>
                  {this.state.confirmCreate == true ? (
                    <span className='showDetailsbtn'>
                      <ModalExampleModal></ModalExampleModal>
                    </span>
                  ) : null}
                </Grid.Row>
                <Grid.Row className='gridPaddingCreate'>
                  <Button className='submitbtn' type='submit'>
                    Submit
                  </Button>
                  <Button type='reset'>Reset</Button>
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
