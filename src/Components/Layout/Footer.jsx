import React, { Component } from "react";
import {
  Container,
  Grid,
  Header,
  Image,
  Segment,
} from "semantic-ui-react";

class footer extends Component {
  state = {};
  render() {
    return (
      <div>
        {/* <Image
          className='FooterLogo center-block'
          src={
            "https://www.uwindsor.ca/registrar/sites/all/themes/uwindsor_bootstrap/images/uwindsor_shield.svg"
          }
        /> */}
        <Segment
          className='footerStyle'
          vertical
          style={{ padding: "5em 0em" }}
        >
          <Container>
            <Grid divided inverted stackable>
              <Grid.Row>
                <Grid.Column width={4}>
                  <Image
                    className='FooterLogo'
                    src={
                      "https://www.uwindsor.ca/registrar/sites/all/themes/uwindsor_bootstrap/images/uwindsor_footer_logo.svg"
                    }
                  />
                </Grid.Column>
                <Grid.Column width={3} className='footer'>
                  <Header
                    as='a'
                    href='https://www.uwindsor.ca/contact'
                    content='Contact Us'
                    className='footerContent'
                  />
                  <br />
                  <Header
                    as='a'
                    href='https://www.uwindsor.ca/directory'
                    content='University Directory'
                    className='footerContent'
                  />
                  <br />
                  <Header
                    as='a'
                    href='https://www.uwindsor.ca/ohrea/53/accessibility'
                    content='Accessibility'
                    className='footerContent'
                  />
                </Grid.Column>
                <Grid.Column width={5} className='footer'>
                  <Header
                    as='a'
                    href='https://www.uwindsor.ca/publicaffairs/303/news-services'
                    content='News Services for Media'
                    className='footerContent'
                  />
                  <br />
                  <Header
                    as='a'
                    href='https://www.uwindsor.ca/372824/mobile-apps-campus-community'
                    content='UWindsor mobile apps'
                    className='footerContent'
                  />
                  <br />
                  <Header
                    as='a'
                    href='https://www.uwindsor.ca/394207/terms-and-conditions'
                    content='Terms & Conditions'
                    className='footerContent'
                  />
                  <br />
                  <Header
                    as='a'
                    href='https://lawlibrary.uwindsor.ca/Presto/home/home.aspx'
                    content='Policies'
                    className='footerContent'
                  />
                  <br />
                  <Header
                    as='a'
                    href='https://www.uwindsor.ca/itservices/uwinid'
                    content='Manage UWin Account'
                    className='footerContent'
                  />
                  <br />
                </Grid.Column>
              </Grid.Row>
            </Grid>
          </Container>
        </Segment>
      </div>
    );
  }
}

export default footer;
