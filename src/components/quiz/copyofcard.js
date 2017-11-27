import React from 'react';
import { Card, CardActions, CardHeader, CardMedia, CardTitle, CardText } from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

// We will have carditem as a standard template, which the user can like or unlike. It will take props. The buttons should lead to an action such that the item gets a rating. A section will have multiple cards, all enclosed within a single flex. I will have an initial array, which will list the images and their locations, and the actions that need to be passed. 

const CardExampleWithAvatar = () => (
  <div>
    <MuiThemeProvider>
    <Card>
        <CardHeader
        title="URL Avatar"
        subtitle="Subtitle"
        avatar="images/jsa-128.jpg"
        />
      <CardMedia
        overlay={<CardTitle title="Overlay title" subtitle="Overlay subtitle" style={{ width: '50%' }}/>}
        >
        <img src="images/favicon.png" alt="casual" style={{ width: '30%', height: '30%', border: '3px solid #73AD21', }} />
      </CardMedia>
      <CardTitle title="Card title" subtitle="Card subtitle" />
      <CardText>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        Donec mattis pretium massa. Aliquam erat volutpat. Nulla facilisi.
        Donec vulputate interdum sollicitudin. Nunc lacinia auctor quam sed pellentesque.
        Aliquam dui mauris, mattis quis lacus id, pellentesque lobortis odio.
        </CardText>
      <CardActions>
        <FlatButton label="Action1" />
        <FlatButton label="Action2" />
      </CardActions>
    </Card>
  </MuiThemeProvider>
  </div>
);

export default CardExampleWithAvatar;