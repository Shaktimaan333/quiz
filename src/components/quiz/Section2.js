import React from 'react';
import moment from 'moment';
import Form from 'muicss/lib/react/form';
import Button from 'muicss/lib/react/button';
import Flexbox from 'flexbox-react';
import { RaisedButton, Typography } from 'material-ui';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import {Card, CardActions, CardHeader, CardText} from 'material-ui/Card';
import { DropDownMenu, MenuItem, FlatButton } from 'material-ui';
import { RadioButton, RadioButtonGroup } from 'material-ui/RadioButton';
import Select from 'react-select';
// Am currently using select from React. See if react-select is required.
import 'react-select/dist/react-select.css';
// Not using air-bnb dates anymore. Using - https://hacker0x01.github.io/react-datepicker/
// List the options smartly using map.
const styles = {
  block: {
    maxWidth: 250,
  },
  radioButton: {
    marginBottom: 16,
  },
  sometext: {
    backgroundColor: '#777879',
    fontSize: 0.8,
    layoutOrigin: [0.5, 0.5],
    paddingLeft: 0.2,
    paddingRight: 0.2,
    textAlign: 'center',
    textAlignVertical: 'center',
    transform: [{translate: [0, 0, -3]}],
  },
  div: {
    margin: '10px',
  },
};

export default class Section2 extends React.Component {
  constructor(props) {
    // Take the default values from the store.
    super(props);
    this.state = {
      sizetop: props.sizetop ? props.sizetop : 2,
      sizebottom: props.sizebottom ? props.sizebottom : 2,
      skincolor: props.skincolor,
      section2Add: props.section2Add,
      back: props.back,
      next: props.next,
    };
    // console.log('in constructor of section 2');
    // this.state.section2Add(this.state.sizetop, this.state.sizebottom, this.state.skincolor);
    // this.state.next(this.state.dummy);
    // this.state.back();

    this.sizetopChange = this.sizetopChange.bind(this);
    this.sizebottomChange = this.sizebottomChange.bind(this);
    this.skincolorChange = this.skincolorChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.backbutton = this.backbutton.bind(this);
  }

  sizetopChange(event) {
    this.setState({ sizetop: event.target.value });
    console.log('A value selected');
    console.log(this.state.sizetop);
  }
  sizebottomChange(event) {
    this.setState({ sizebottom: event.target.value });
  }

  skincolorChange(event) {
    this.setState({ skincolor: event.target.value });
    console.log('skincolor is');
    console.log(event.target.value);
  }

  handleSubmit(event) {
    event.preventDefault();
    this.state.section2Add(this.state.sizetop, this.state.sizebottom, this.state.skincolor);
  }

  backbutton() {
    console.log('back button pressed and we will dispatch an action');
    this.state.back();
  }

  render() {
    console.log('section 2 called');
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <Flexbox flexDirection="column" justifyContent="center" height="100%" alignItems="center" style={{ textAlign: 'center' }} >
            <div style={styles.div}>
              <label>
                Pick the size for top:
                <select value={this.state.sizetop} onChange={this.sizetopChange} >
                  <option value={2}>2 year</option>
                  <option value={3}>3 year</option>
                  <option value={4}>4 year</option>
                  <option value={5}>5 year</option>
                  <option value={6}>6 year</option>
                  <option value={7}>7 year</option>
                  <option value={8}>8 year</option>
                  <option value={9}>9 year</option>
                </select>
              </label>
            </div>
            <div style={styles.div}>
              <label>
              Pick the size for bottom:
                <select value={this.state.sizebottom} onChange={this.sizebottomChange} >
                  <option value={2}>2 year</option>
                  <option value={3}>3 year</option>
                  <option value={4}>4 year</option>
                  <option value={5}>5 year</option>
                  <option value={6}>6 year</option>
                  <option value={7}>7 year</option>
                  <option value={8}>8 year</option>
                  <option value={9}>9 year</option>
                </select>
              </label>
            </div>
            <img src="/images/quiz/sizechart.jpg" alt="size char" width="50%" />
            <div style={styles.div}>
              <MuiThemeProvider>
                <RadioButtonGroup name="ColorTone" defaultSelected={this.skincolor} onChange={this.skincolorChange}>
                  <RadioButton
                    value={3}
                    label="Very-fair"
                  />
                  <RadioButton
                    value={2}
                    label="Fair"
                  />
                  <RadioButton
                    value={1}
                    label="Wheatish"
                  />
                </RadioButtonGroup>
              </MuiThemeProvider>
            </div>
            <div style={styles.div}>
              <MuiThemeProvider>
                <Flexbox justifyContent="flex-start" marginLeft="40 px" marginRight="40px" marginBottom="20px" marginTop="10px">
                  <RaisedButton label="Back" onClick={this.state.back} />
                  <RaisedButton label="Next" type="submit" />
                </Flexbox>
              </MuiThemeProvider>
            </div>
          </Flexbox>
        </form>
      </div>

    );
  }
}
