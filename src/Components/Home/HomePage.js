/* eslint-disable max-classes-per-file */
/* eslint-disable react/no-multi-comp */

import React, { Component } from "react";
import { Slide } from "react-slideshow-image";
// import { Carousel } from "react-responsive-carousel";
// import "react-responsive-carousel/lib/styles/carousel.min.css";
// import 'semantic-ui-css/semantic.css';
import "react-slideshow-image/dist/styles.css";
import {
  // Button,
  // Container,
  // Divider,
  // Grid,
  // Header,
  // Icon,
  // Image,
  // List,
  // Menu,
  Segment,
} from "semantic-ui-react";
import "../../style/HomePage.css";
import Footer from "../Layout/Footer";
import event2 from "./event2.png";
import event3 from "./event3.jpg";
import event4 from "./event4.jpg";

class HomePage extends Component {
  state = {};
  fadeProperties = {
    duration: 3000,
    pauseOnHover: true,
  };
  render() {
    return (
      <div>
        {/* <Navigation></Navigation> */}
        <Segment vertical>
          <Slide easing='ease' {...this.fadePropertiess}>
            <div className='each-slide'>
              <div style={{ backgroundImage: `url(${event2})` }}></div>
            </div>
            <div className='each-slide'>
              <div style={{ backgroundImage: `url(${event3})` }}></div>
            </div>
            <div className='each-slide'>
              <div style={{ backgroundImage: `url(${event4})` }}></div>
            </div>
          </Slide>
        </Segment>
        {/* <Segment>
          <div class='ui three column grid'>
            <div class='column'>
              <div class='ui segment'>
                <h1>TBD</h1>
              </div>
            </div>
            <div class='column'>
              <div class='ui segment'>
                <h1>TBD</h1>
              </div>
            </div>
            <div class='column'>
              <div class='ui segment'>
                <h1>TBD</h1>
              </div>
            </div>
          </div>
        </Segment> */}
        <Footer></Footer>
      </div>
    );
  }
}

export default HomePage;
