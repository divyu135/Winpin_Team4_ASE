import React, { Component } from "react";
import { createMedia } from "@artsy/fresnel";
import PropTypes from "prop-types";
import {
  Button,
  Container,
  Icon,
  Image,
  Menu,
  Segment,
  Sidebar,
  Visibility,
} from "semantic-ui-react";
import { Link } from "react-router-dom";

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
    const { fixed } = this.state;

    return (
      <Media greaterThan='mobile'>
        <Visibility
          once={false}
          onBottomPassed={this.showFixedMenu}
          onBottomPassedReverse={this.hideFixedMenu}
        >
          <Segment textAlign='center' style={{ padding: "1em 0em" }} vertical>
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
                  <Link to='/video'>
                    <Menu.Item className='navBtn'>Video</Menu.Item>
                  </Link>
                </Menu.Item>
              </Container>
            </Menu>
          </Segment>
        </Visibility>

        {children}
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
            <Menu.Item as='a' active>
              Home
            </Menu.Item>
            <Menu.Item as='a'>Video</Menu.Item>
          </Sidebar>

          <Sidebar.Pusher dimmed={sidebarOpened}>
            <Segment textAlign='center' style={{ padding: "1em 0em" }} vertical>
              <Container>
                <Menu pointing secondary size='large'>
                  <Menu.Item onClick={this.handleToggle}>
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
                  <Menu.Item position='right' className='marginborders'>
                    <Link to='/home'>
                      <Menu.Item className='navBtnMobile' active>
                        Home
                      </Menu.Item>
                    </Link>
                    <Link to='/video'>
                      <Menu.Item className='navBtnMobile'>Video</Menu.Item>
                    </Link>
                  </Menu.Item>
                </Menu>
              </Container>
            </Segment>

            {children}
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
