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
} from "semantic-ui-react";
import { FormGroup } from "@material-ui/core";
import "../../style/HomePage.css";
import Footer from "../Layout/Footer";
import CreateEvent from "./CreateEvent";
import CreateOrganization from "./CreateOrganization";

const panes = [
  {
    menuItem: "Events",
    render: () => (
      <Tab.Pane>
        <CreateEvent></CreateEvent>
      </Tab.Pane>
    ),
  },
  {
    menuItem: "Organization",
    render: () => (
      <Tab.Pane>
        <CreateOrganization></CreateOrganization>
      </Tab.Pane>
    ),
  },
];

class Create extends Component {
  state = {};
  constructor(props) {
    super(props);
    this.state = {
      eventName: "",
      description: "",
      participants: "",
      url: "",
      passcode: "",
      createrName: "",
      email: "",
      contact: "",
      datetime: "",
    };
  }
  handleEventNameChange = (event) => {
    this.setState({
      eventName: event.target.value,
      description: event.target.value,
      participants: event.target.value,
      url: event.target.value,
      passcode: event.target.value,
      createrName: event.target.value,
      email: event.target.value,
      contact: event.target.value,
      datetime: event.target.value,
    });
  };

  render() {
    return (
      <div>
        <Segment>
          <Tab panes={panes} />
        </Segment>
        <Footer></Footer>
      </div>
    );
  }
}

export default Create;
