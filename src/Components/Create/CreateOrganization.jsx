import React, { Component } from "react";
import organization from "../Organization/organization.jpg";
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
      <Modal.Header>Confirm Organization Details</Modal.Header>
      <Modal.Content>
        <Modal.Description>
          <Segment>
            <Grid>
              <Grid.Column width={8}>
                <Grid.Row>
                  <Label className='confirmLabel'>Organization Name: </Label>
                  <Label>{confirmData.name}</Label>
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
              <Grid.Column width={8}>
                <Grid.Row>
                  <Label className='confirmLabel'>Event Description: </Label>
                  <Label>{confirmData.description}</Label>
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

class CreateOrganization extends Component {
  state = {};
  constructor(props) {
    super(props);
    this.state = {
      description: "",
      name: "",
      email: "",
      contact: "",
      message: "",
    };
  }
  handleNameChange = (event) => {
    this.setState({
      name: event.target.value,
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
  handleDescriptionChange = (event) => {
    this.setState({
      description: event.target.value,
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

  onSubmitOrg = () => {
    var orgInfo = {
      orgName: this.refs.orgName.value,
    };

    console.log(orgInfo);

    fetch("http://localhost:9000/create/organization", {
      method: "POST",
      headers: { "Content-type": "application/json" },
      body: JSON.stringify(orgInfo),
    })
      .then((resp) => resp.json())
      .then((result) => {
        if (result) {
          this.state({
            message: "Organization Information has beeen added successfully.",
          });
        }
      });
  };

  render() {
    return (
      <div>
        <h1 className='tabHeaderCreate'>Create your own Organization</h1>

        <Segment>
          <Form onSubmit={this.handleSubmit}>
            <Grid>
              <Grid.Column width={8}>
                <Segment>
                  <Grid.Row className='gridPaddingCreate'>
                    <Label className='label'>Name of Organization</Label>
                    <Input
                      ref='orgName'
                      required={true}
                      className='inputStyle'
                      placeholder='Please Enter Name of Organization'
                      type='text'
                      value={this.state.name}
                      onChange={this.handleNameChange}
                    ></Input>
                  </Grid.Row>
                  <Grid.Row className='gridPaddingCreate'>
                    <Label className='label'>Email</Label>
                    <Input
                      required={true}
                      className='inputStyle'
                      placeholder='Please Enter email address'
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

              <Grid.Column width={8}>
                <Segment>
                  <Grid.Row className='gridPaddingCreate'>
                    <Label className='label'>Description</Label>
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
                  <Button
                    className='submitbtn'
                    type='submit'
                    onClick={this.onSubmitOrg}
                  >
                    Submit
                  </Button>
                  <Button type='reset'>Reset</Button>
                </Grid.Row>
                <Grid.Row className='gridPaddingCreate'>
                  <p>{this.state.message}</p>
                </Grid.Row>
              </span>
            </Grid>
          </Form>
        </Segment>
      </div>
    );
  }
}

export default CreateOrganization;
