import React from 'react';
import { Button, Form, Grid, Header, Image, Message, Segment } from 'semantic-ui-react';

const Lobby = ({
  username,
  handleUsernameChange,
  roomName,
  handleRoomNameChange,
  handleSubmit
}) => {
  return (
    <Grid textAlign='center' style={{ height: '100vh' }} verticalAlign='middle'>
    <Grid.Column style={{ maxWidth: 450 }}>
      <Header as='h2' color='teal' textAlign='center'>
        <Image src='https://www.uwindsor.ca/sites/all/themes/uwindsor_bootstrap/images/uwindsor_shield.svg' /> Enter Name and Room
      </Header>
      <Form size='large' onSubmit={handleSubmit}>
      <Segment stacked>
          <Form.Input 
            type="text"
            id="field"
            value={username}
            onChange={handleUsernameChange}
            required
            fluid icon='user' 
            iconPosition='left' 
            placeholder='User Name' />
          
          <Form.Input 
            type="text"
            id="room"
            value={roomName}
            onChange={handleRoomNameChange}
            required
            fluid icon='user' 
            iconPosition='left' 
            placeholder='Room Name' />

        <Button type="submit" color='teal' fluid size='large'>
            Join Room
          </Button>
        </Segment>
      </Form>
      </Grid.Column>
  </Grid>
  );
};

export default Lobby;