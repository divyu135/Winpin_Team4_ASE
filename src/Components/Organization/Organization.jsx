import { FormatAlignCenter } from "@material-ui/icons";
import React, { Component } from "react";
import { Segment, Image, Tab, Grid } from "semantic-ui-react";
import "../../style/HomePage.css";
import DisplayOrgList from "./DisplayOrgList";
import organization from "../Organization/organization.jpg";

class Organization extends Component {
  state = {};
  orgs = [];

  constructor(props) {
    super(props);
    this.state = { data: [] };
    this.orgs = [];
  }

  callOrgsDB() {
    fetch("/orgs-db")
      .then((resp) => {
        return resp.json()
      })
      .then((data) => {
        this.orgs =data;
        console.log(this.orgs)
      });
  }

  componentWillMount() {
    this.callOrgsDB();
  }

  render() {
    return (
      <div>
        <Segment>
          <Image src={organization} style={{ maxHeight: "28vh" }} fluid></Image>
        </Segment>

        <Segment textAlign='center'>
          <h1 className='tabHeader'>Organization</h1>
        </Segment>
        <Segment>
        Inside segment
          <DisplayOrgList orgs={this.orgs}></DisplayOrgList>
        </Segment>
        {/* <h1>{this.state.apiresponse}</h1> */}
      </div>
    );
  }
}

export default Organization;
