import React from 'react';
import { Segment, Image, Tab, Grid, List } from "semantic-ui-react";

const DisplayOrgList = props => {
    return (
        <Segment>
        {console.log("from display: " + props.orgs)}
            <Segment>

                <Grid columns='three' divided>
                        {
                            props.orgs.map(item =>
                                    <div class='ui cards' style={{margin:5}}>
                                    <div class='card'>
                                        <div class='content'>
                                            <div class='header'>{item.NAME}</div>
                                            <div class='description'>
                                            Description
                                                {item.DESCRIPTION}
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

export default DisplayOrgList;
