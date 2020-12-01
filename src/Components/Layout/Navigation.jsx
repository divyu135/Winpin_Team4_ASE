import React, { Component } from "react";
import { createMedia } from "@artsy/fresnel";
import PropTypes from "prop-types";
import {
  Container,
  Icon,
  Image,
  Menu,
  Segment,
  Sidebar,
  Visibility,
} from "semantic-ui-react";
import { Link } from "react-router-dom";
import HomePage from "../Home/HomePage";
import Event from "../Event/Event";
import Organization from "../Organization/Organization";
import Create from "../Create/Create";
import VideoApp from "../ConferenceRoom/index";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import PasscodeEntry from "../ConferenceRoom/PasscodeEntry";
import "../../style/HomePage.css";

const { MediaContextProvider, Media } = createMedia({
  breakpoints: {
    mobile: 0,
    tablet: 768,
    computer: 1024,
  },
});

class DesktopContainer extends Component {
  state = {};

  hideFixedMenu = () => this.setState({ fixed: false });
  showFixedMenu = () => this.setState({ fixed: true });

  render() {
    const { children } = this.props;
    // const { fixed } = this.state;

    return (
      <Media greaterThan='mobile'>
        <Visibility
          once={false}
          onBottomPassed={this.showFixedMenu}
          onBottomPassedReverse={this.hideFixedMenu}
        >
          <Segment textAlign='center' style={{ padding: "3em 0em" }} vertical>
            <Menu fixed='top' size='large'>
              <Container>
                <span position='left'>
                  <Image
                    className='mainlogo'
                    src={
                      "https://www.uwindsor.ca/registrar/sites/all/themes/uwindsor_bootstrap/images/uwindsor_shield.svg"
                    }
                  />
                </span>
                <span position='right'>
                  <h1 className='ProjName'>Winpin</h1>
                </span>
                <Menu.Item position='right' className='marginborders'>
                  <Link to='/home'>
                    <Menu.Item className='navBtn' active>
                      Home
                    </Menu.Item>
                  </Link>
                  <Link to='/event'>
                    <Menu.Item className='navBtn'>Events</Menu.Item>
                  </Link>
                  <Link to='/organization'>
                    <Menu.Item className='navBtn'>Organization</Menu.Item>
                  </Link>
                  <Link to='/create'>
                    <Menu.Item className='navBtn'>Create</Menu.Item>
                  </Link>
                  <Link to='/app'>
                    <Menu.Item className='navBtn'>Virtual Room</Menu.Item>
                  </Link>
                </Menu.Item>
              </Container>
            </Menu>
          </Segment>
        </Visibility>

        <Switch>
          <Route path='/' exact component={HomePage} />
          <Route path='/home' component={HomePage} />
          <Route path='/event' component={Event} />
          <Route path='/organization' component={Organization} />
          <Route path='/create' component={Create} />
          {/* <Route path='/video-app' component={PasscodeEntry} /> */}
          <Route exact path="/app" render={() => (window.location = "https://video-app-3770-9325-dev.twil.io")} />
        </Switch>
      </Media>
    );
  }
}

DesktopContainer.propTypes = {
  children: PropTypes.node,
};

class MobileContainer extends Component {
  state = {};

  handleSidebarHide = () => this.setState({ sidebarOpened: false });

  handleToggle = () => this.setState({ sidebarOpened: true });

  render() {
    const { children } = this.props;
    const { sidebarOpened } = this.state;

    return (
      <Media as={Sidebar.Pushable} at='mobile'>
        <Sidebar.Pushable>
          <Sidebar
            as={Menu}
            animation='overlay'
            inverted
            onHide={this.handleSidebarHide}
            vertical
            visible={sidebarOpened}
          >
            <Link to='/home'>
              <Menu.Item active>Home</Menu.Item>
            </Link>
            <Link to='/event'>
              <Menu.Item>Events</Menu.Item>
            </Link>
            <Link to='/organization'>
              <Menu.Item>Organization</Menu.Item>
            </Link>
            <Link to='/create'>
              <Menu.Item>Create</Menu.Item>
            </Link>
            <Link to='/app'>
              <Menu.Item>Virtual Room</Menu.Item>
            </Link>
          </Sidebar>

          {/* <Sidebar.Pusher dimmed={sidebarOpened}> */}
          <Sidebar.Pusher dimmed={sidebarOpened} style={{ minHeight: "100vh" }}>
            <Segment textAlign='center' style={{ padding: "1em 0em" }} vertical>
              <Container>
                <Menu pointing secondary size='large'>
                  <Menu.Item
                    onClick={this.handleToggle}
                    className='sidebarIcon'
                  >
                    <Icon name='sidebar' />
                  </Menu.Item>
                  <span position='left'>
                    <Image
                      className='mainlogoMobile'
                      src={
                        "https://www.uwindsor.ca/registrar/sites/all/themes/uwindsor_bootstrap/images/uwindsor_shield.svg"
                      }
                    />
                  </span>
                  <span position='right'>
                    <h1 className='ProjNameMobile'>Winpin</h1>
                  </span>
                </Menu>
                {/* {children} */}
                {/* <HomePage></HomePagxe> */}
                <Switch>
                  <Route path='/' exact component={HomePage} />
                  <Route path='/home' component={HomePage} />
                  <Route path='/event' component={Event} />
                  <Route path='/organization' component={Organization} />
                  <Route path='/create' component={Create} />
                  <Route path='/video-app' component={PasscodeEntry} />
                  <Route path='/app' component={VideoApp} />
                </Switch>
              </Container>
            </Segment>
          </Sidebar.Pusher>
        </Sidebar.Pushable>
      </Media>
    );
  }
}

MobileContainer.propTypes = {
  children: PropTypes.node,
};

const ResponsiveContainer = ({ children }) => (
  <MediaContextProvider>
    <DesktopContainer>{children}</DesktopContainer>
    <MobileContainer>{children}</MobileContainer>
  </MediaContextProvider>
);

ResponsiveContainer.propTypes = {
  children: PropTypes.node,
};

const navigation = () => <ResponsiveContainer></ResponsiveContainer>;

export default navigation;
