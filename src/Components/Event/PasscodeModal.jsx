import React from 'react'
import { Button, Icon, Modal, Image, Input, Header } from 'semantic-ui-react'

function PasscodeModal(props) {
  const [firstOpen, setFirstOpen] = React.useState(false)
  const [secondOpen, setSecondOpen] = React.useState(false)
  const [verify, setVerify] = React.useState(false)
  const [enterCode, setCode] = React.useState('')

  const verifyCode = () => 
  {if (props.passcode == enterCode) 
    {
      setVerify(true);
    } 
  }

  const updateInputValue = (evt) => {
    setCode(evt.target.value);
  }

  const redirect = () => {
    setSecondOpen(false); 
    window.location = "https://video-app-3770-9325-dev.twil.io?passcode=91085337709325";
  }

  return (
    <>
      <div className='ui bottom attached button'
            onClick={() => setFirstOpen(true)}
            >
          <i className='add icon'></i>
          Join Room
      </div>
      {/* <Button onClick={() => setFirstOpen(true)}>Join</Button> */}

      <Modal
        onClose={() => setFirstOpen(false)}
        onOpen={() => setFirstOpen(true)}
        open={firstOpen}
      >
        <Modal.Header>Enter Passcode for {props.name}</Modal.Header>
        <Modal.Content image>
        <Image size='small' src='https://user-images.githubusercontent.com/48566979/54383061-9eb8d580-4667-11e9-9f82-e5a23078e8a5.png' wrapped />
        <Modal.Description>
          <Input placeholder='Enter the passcode for event:' 
                 value={enterCode}
                 onChange={evt => updateInputValue(evt)}
                 />
          <Button content='Verify' onClick={verifyCode} />
        </Modal.Description>
      </Modal.Content>
        <Modal.Actions>
          <Button disabled={!verify} onClick={() => setSecondOpen(true)} primary>
            Proceed <Icon name='right chevron' />
          </Button>
        </Modal.Actions>

        <Modal
          onClose={() => setSecondOpen(false)}
          open={secondOpen}
          size='small'
        >
          <Modal.Header>On Next Page Enter Following Details: </Modal.Header>
          <Modal.Content>
            <p><Header size='medium'>Name: </Header> Your Name <br /></p>
            <p><Header size='medium'>Room Name: </Header> {props.name} <br /></p>
          </Modal.Content>
          <Modal.Actions>
            <Button
              icon='check'
              content='All Done'
              onClick={redirect}
            />
          </Modal.Actions>
        </Modal>
      </Modal>
    </>
  )
}

export default PasscodeModal
