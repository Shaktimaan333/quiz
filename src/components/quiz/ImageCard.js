import React from 'react';
import Flexbox from 'flexbox-react';
import { Card, CardActions, CardHeader, CardMedia, CardTitle, CardText } from 'material-ui/Card';
import RaisedButton from 'material-ui/RaisedButton';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

// We will have carditem as a standard template, which the user can like or unlike. It will take props. The buttons should lead to an action such that the item gets a rating. A section will have multiple cards, all enclosed within a single flex. I will have an initial array, which will list the images and their locations, and the actions that need to be passed.

// This should be class based component.

// I want a like button which when clicked transforms itself.

// Will have to dispatch a generic action so that the exact variable in the state gets updated.

// We will have a like button to left, dislike button to right, and the count of net likes in mid with sign.

// Make sure that the current rating can be displayed on the screen. 

export default class ImageCard extends React.Component {
  constructor(props) {
    // Take the default values from the store.
    super(props);
    this.state = {
      src: `/images/quiz/${props.category}/${props.design}.jpg`,
      design: props.design,
      vote: props.vote,// Will set this using map. 
      rating: props.rating,
      temp: props.vote ? `Rating: (${props.vote - 1})` : 'Neutral'
    };
    this.likeHandler = this.likeHandler.bind(this);
    this.unlikeHandler = this.unlikeHandler.bind(this);
  }

  likeHandler() {
    this.setState({
      vote: this.state.vote ? this.state.vote + 1 : 1,
      temp: this.state.vote ? `Rating: (${this.state.vote + 1})` : 'Rating: (+1)'
    });
    this.state.rating(this.state.design, this.state.vote);
    console.log(`${this.state.design} has vote ${this.state.vote}`);
    // Here stylerating will be dispatched if the call came from section4.
  }

  unlikeHandler() {
    this.setState({
      vote: this.state.vote ? this.state.vote - 1 : -1,
      temp: this.state.vote ? `Rating: (${this.state.vote - 1})` : 'Rating: (-1)'
    });
    this.state.rating(this.state.design, this.state.vote);
    console.log(`${this.state.design} has vote ${this.state.vote}`);
  }

  // Later on, pass styling variables as prop from the parent depending upon the section.

  render() {
    let fontcolor = this.state.vote > 0 ? 'green' : 'red';
    fontcolor = !this.state.vote ? 'black' : fontcolor;
    return (
      <div style={{ paddingBottom: '5vw' }}>
        <MuiThemeProvider>
          <Card style={{ width: '44vw' }}>
            <CardHeader
              title={this.state.design}
              titleStyle={{ fontSize: '2vw' }}
              style={{ height: '5vw' }}
            />
            <CardMedia>
              <img src={this.state.src} alt="casual" />
            </CardMedia>
            <CardActions style={{ width: '44vw' }}>
              <Flexbox flexDirection="row" justifyContent="space-between" alignItems="center" style={{ textAlign: 'center' }} >
                <button onClick={this.likeHandler} style={{ fontSize: '2vw', color: 'green', border: '2px solid green' }}>Like</button>
                <div style={{ fontSize: '2vw', color: fontcolor }}>
                  { this.state.temp }
                </div>
                <button onClick={this.unlikeHandler} style={{ fontSize: '2vw', color: 'red', border: '2px solid red' }}>Dislike</button>
              </Flexbox>
            </CardActions>
          </Card>
        </MuiThemeProvider>
      </div>
    );
  }
}

