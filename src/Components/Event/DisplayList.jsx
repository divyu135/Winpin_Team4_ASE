import React from 'react';
import { Segment, Image, Tab, Grid, List } from "semantic-ui-react";
import PasscodeModal from './PasscodeModal';

const DisplayList = props => {
    return (
        <Segment>
            <Segment>
                <Grid columns='three' divided>
                        {
                            props.events.map(item =>
                                    <div className='ui cards' style={{margin:5}}>
                                    <div className='card'>
                                        <div className='content'>
                                            <div className='header'>{item.EVENT_NAME}</div>
                                            <div className='meta'>{item.EVENT_DATE}</div>
                                            <div className='description'>
                                                {item.EVENT_DESCRIPTION}
                                            </div>
                                        </div>
                                        <PasscodeModal name={item.EVENT_NAME} passcode={item.EVENT_PASSCODE}/>
                                    </div>
                                    </div>
                            )
                        }
                </Grid>
            </Segment>
        </Segment>
    );
}

export default DisplayList;
