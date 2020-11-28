import { FormatAlignCenter } from "@material-ui/icons";
import React, { Component } from "react";
import { Segment, Image, Tab, Grid } from "semantic-ui-react";
import "../../style/HomePage.css";
import organization from "../Organization/organization.jpg";

class Organization extends Component {
  state = {};
  render() {
    return (
      <div>
        <Segment>
          <Image src={organization} style={{ maxHeight: "28vh" }} fluid></Image>
        </Segment>

        <Segment textAlign='center'>
          <h1 className='tabHeader'>Organization</h1>
        </Segment>
        {/* <h1>{this.state.apiresponse}</h1> */}
      </div>
    );
  }
}

export default Organization;
