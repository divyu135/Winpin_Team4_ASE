import React from 'react';
import { Segment, Image, Tab, Grid, List } from "semantic-ui-react";

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
                                        <div className='ui bottom attached button'>
                                            <i className='add icon'></i>
                                            Join Room
                                        </div>
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
