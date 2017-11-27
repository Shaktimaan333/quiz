import React from 'react';
import moment from 'moment';
import Form from 'muicss/lib/react/form';
import Input from 'muicss/lib/react/input';
import Button from 'muicss/lib/react/button';
import Flexbox from 'flexbox-react';
import { RaisedButton, Typography } from 'material-ui';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import {Card, CardActions, CardHeader, CardText} from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton';
import TextField from 'material-ui/TextField';
import { SingleDatePicker } from 'react-dates';
import 'react-dates/lib/css/_datepicker.css';
import DatePicker from 'material-ui/DatePicker';
import 'react-datepicker/dist/react-datepicker.css';
import Box from 'react-layout-components';
// Not using air-bnb dates anymore. Using - https://hacker0x01.github.io/react-datepicker/

const styles = {
  container: {
    color: '#006aff',
    marginTop: '10px',
    justifyContent: 'right',// Not working.
    alignSelf: 'stretch', // Not working
    alignItems: 'end', //Not working
    textAlign: 'center',
  },
  inner_container: {
  },
  button: {
    background: '$blue',
    display: 'inline-block',
    fontSize: '$font-size-large',
    fontWeight: 300,
    lineHeight: 1,
    padding: '$s-size',
    textDecoration: 'none',
    textAlign: 'center',

  },
};

export default class Section1 extends React.Component {
  constructor(props) {
    // Take the default values from the store.
    super(props);
    this.state = {
      name: props.name,
      kidName: props.kidName,
      dob: props.dob,
      calendarFocused: false,
      section1Add: props.section1Add,
      styles: props.style,
    };

    this.nameChange = this.nameChange.bind(this);
    this.daughterNameChange = this.daughterNameChange.bind(this);
    this.onDateChange = this.onDateChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  onDateChange(date) {
    this.setState({ dob: date });
  }
  daughterNameChange(event,value) {
    this.setState({ kidName: value });
  }

  nameChange(event,value) {
    this.setState({ name: value });
  }

  handleSubmit(event) {
    console.log('submit enetered');
    event.preventDefault();
    this.state.section1Add(this.state.name, this.state.kidName, this.state.dob);
  }

  render() {
    return (
      <div>
        <Form onSubmit={this.handleSubmit}>
          <Flexbox flexDirection="column" justifyContent="center" height="100%" alignItems="center" style={{ textAlign: 'center' }} >
            <MuiThemeProvider>
              <TextField
                hintText="Name"
                onChange={this.nameChange}
                defaultValue={this.state.name ? this.state.name : ''}
              />
            </MuiThemeProvider>
            <MuiThemeProvider>
              <TextField
                hintText="Your little princess"
                onChange={this.daughterNameChange}
                defaultValue={this.state.kidName ? this.state.kidName : ''}
              />
            </MuiThemeProvider>
              <MuiThemeProvider>
                <DatePicker hintText="Birthday" style={{ textAlign: 'right' }} />
              </MuiThemeProvider>
            <MuiThemeProvider>
             <RaisedButton label="Next" type="submit" style={{
                  backgroundColor: '#ffd699',
                  width: '5%',
                  border: '2px solid #FF9800',
                  marginTop: '20px',
              }}
             />
           </MuiThemeProvider>
          </Flexbox>
        </Form>
      </div>
    );
  }
}