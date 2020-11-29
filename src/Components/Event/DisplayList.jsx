import React from 'react';
import { Segment, Image, Tab, Grid, List } from "semantic-ui-react";

const DisplayList = props => {
    return (
        <Segment>
            <Segment>
                <Grid columns='three' divided>
                        {
                            props.events.map(item =>
                                    <div class='ui cards' style={{margin:5}}>
                                    <div class='card'>
                                        <div class='content'>
                                            <div class='header'>{item.EVENT_NAME}</div>
                                            <div class='description'>
                                                {item.EVENT_DESCRIPTION}
                                            </div>
                                        </div>
                                        <div class='ui bottom attached button'>
                                            <i class='add icon'></i>
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
