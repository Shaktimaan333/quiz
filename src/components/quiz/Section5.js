import React from 'react';
import { Card, CardActions, CardHeader, CardMedia, CardTitle, CardText } from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

// This is a template for sections to come. 

export default class Section4 extends React.Component {
  constructor(props) {
    // Take the default values from the store.
    super(props);
    this.state = {
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleSubmit(event) {
    console.log('submit enetered');
    event.preventDefault();
    this.state.section1Add(this.state.name, this.state.kidName, this.state.dob);
  }
  
  render() {
    return (
      <div style={styles.container}>
        <MuiThemeProvider>
          <RaisedButton label="Next" type="submit" style={{
            backgroundColor: '#ffd699',
            width: '5%',
            margin: '0 auto',
            border: '2px solid #FF9800',
            textAlign: 'right',
            }}
          />
        </MuiThemeProvider>
      </div>
    );
  }
}
