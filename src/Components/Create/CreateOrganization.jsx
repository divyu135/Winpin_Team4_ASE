import React, { Component } from "react";
import TextareaAutosize from "react-textarea-autosize";
import {
  Segment,
  Grid,
  Form,
  Label,
  Input,
  Button,
  Modal,
  Checkbox,
} from "semantic-ui-react";
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
        {/* <Button
          contact='Cancle'
          onClick={() => {
            setOpen(false);
            // whenClick = {this.statee.submitEnabled = false}
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
function handleconfirm() {
  var ss;
  ss = true;
  submitEnabled = true;
  console.log(ss);
  console.log("lkadfljasdl " + submitEnabled);
}

var confirmData = {};
var submitEnabled = false;

class CreateOrganization extends Component {
  state = {};
  // sub = false;
  constructor(props) {
    super(props);
    // this.sub = false;
    this.state = {
      description: "",
      name: "",
      email: "",
      contact: "",
      messageConfirm:
        "Please add all required details before you confirm the details",
      confirmCreate: false,
      submitEnable: false,
    };
  }
  setterSubmit = (val) => {
    console.log("inside setSubl=mit " + val);
    this.setState({
      submitEnable: val,
    });
  };
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
    } else {
      this.state.confirmCreate = false;
      this.setState({
        submitEnable: false,
      });
    }
  };
  handleSubmit = (event) => {
    event.preventDefault();
  };

  onSubmitOrg = () => {
    var orgInfo = {
      orgName: this.state.name,
      orgDescription: this.state.description,
      email: this.state.email,
      contact: this.state.contact,
    };

    const requestOptions = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(orgInfo),
    };
    fetch("/org", requestOptions)
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
    const enableCheck =
      this.state.name.length > 0 &&
      this.state.description.length > 0 &&
      this.state.email.length > 0 &&
      this.state.contact.length > 0;
    // const enabled = this.state.confirmCreate === true;

    return (
      <div>
        <h1 className='tabHeaderCreate'>Create your own Organization</h1>

        <Segment>
          <Form>
            <Grid>
              <Grid.Column width={8}>
                <Segment>
                  <Grid.Row className='gridPaddingCreate'>
                    <Label className='label'>Name of Organization</Label>
                    <Input
                      id='name'
                      required={true}
                      className='inputStyle'
                      placeholder='Please Enter Name of Organization'
                      type='text'
                      disabled={this.state.confirmCreate}
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
                      disabled={this.state.confirmCreate}
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
                      disabled={this.state.confirmCreate}
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
                      disabled={this.state.confirmCreate}
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
                  {console
                    .log
                    // this.state.confirmCreate + " state " + submitEnabled
                    ()}
                  {/* <Button onClick={handleconfirm}>{submitEnabled}</Button> */}
                  <Button
                    className='submitbtn'
                    type='submit'
                    disabled={!this.state.submitEnable}
                    onClick={this.onSubmitOrg}
                  >
                    Submit
                  </Button>
                  {/* <Button type='reset'>Reset</Button> */}
                </Grid.Row>
                <Grid.Row className='gridPaddingCreate'>
                  <p className='message'>{this.state.message}</p>
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
