import React from 'react';
import Flexbox from 'flexbox-react';
import { Card, CardActions, CardHeader, CardMedia, CardTitle, CardText } from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton';
import RaisedButton from 'material-ui/RaisedButton';
import TextField from 'material-ui/TextField';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import ImageCard from './ImageCard';


// We will have carditem as a standard template, which the user can like or unlike. It will take props. The buttons should lead to an action such that the item gets a rating. A section will have multiple cards, all enclosed within a single flex. I will have an initial array, which will list the images and their locations, and the actions that need to be passed. 

// We can have agree or disagree for this section. 

export default class Section3 extends React.Component {
  constructor(props) {
    // Take the default values from the store.
    super(props);
    this.state = {
      styleinstance: props.styleinstance,
      // The type of key is varying for different sections, not sure if it is fine. Will change the ones for earlier section to string as well. 
      section: props.section,
      rating: props.rating,
      // It's just that a different action stylerating will be passed for section4. Everything else remains the same.
      votecounts: props.votecounts,
      // Also instead of votecounts, stylecounts will be passed for section4, but it will look the same. 
      next: props.next,
      back: props.back,
      addComment: props.addComment,
      currentitem: props.currentitem + 1,
      sizeofmap: props.sizeofmap,
      comment: '', // Take it from the props/store.
      hintText: 'Anything else you want to tell us',

    };
    this.newFunction();
    this.nextPress = this.nextPress.bind(this);
    this.backPress = this.backPress.bind(this);
    this.addComment = this.addComment.bind(this);
    this.selectdesign();
  }

  // These are more places to assign additional variables.
  newFunction() {
    switch (this.state.section) {
      case 3:
        this.state = { ...this.state, category: 'themes', designs: ['Casual', 'Charismatic', 'Classy', 'Cool', 'Party', 'Playful', 'Trendy'] };
        break;
      case 4:
        this.state = { ...this.state, category: 'styles', designs: ['Bottoms', 'Dresses', 'Ethnic wear', 'Sets', 'T-shirts', 'Top', 'Winter Wear'] };
        break;
      case 5:
        // For this section the state will be decided by the props key which will point out the design.
        this.selectdesign();
        break;
      case 6: // Patterns. 
        this.state = { ...this.state, category: 'Patterns', designs: ['Star', 'Floral', 'Polka dots', 'Prints', 'Stripes', 'Hearts', 'Solid-plain', 'Patches', 'Gingham-checks', 'Paisley', 'Plaid', 'Animal', 'Camouflage']}; 
        break;
      case 7: // Colours.
        this.state = { ...this.state, category: "Colours", designs: ['Pink', 'Blue', 'Red', 'White', 'Purple', 'Grey', 'Orange', 'Yellow', 'Green', 'Black', 'Brown', 'Golden-Shimmer']}; 
        break;
      case 8: // Brands.
        this.state = { ...this.state, category: "Brands", designs: ['Allen Solly kids', 'Chalk (Pantaloons)', 'Gap kids', 'Gini and Jony', 'H&M', 'Nauti Nati', 'UCB', 'US Polo', 'Zara'] };
        break;
      default: break;
    }
    console.log('printing the state to see if switch works');
    console.log(this.state);
  }

  selectdesign() {
    switch (this.state.styleinstance) {
      case 'Top':
        this.state = { ...this.state, category: 'Tops', designs: ['Blouse-shirt', 'Bolero-shrug', 'Cold-shoulder', 'Crop top', 'Tunic'] };
        break;
      case 'T-shirts':
        this.state = { ...this.state, category: 'T-shirts', designs: ['Full sleeve', 'Half-sleeve', 'Polo', 'Round-V neck', 'Ruffle sleeve', 'Turtle-neck'] };
        break;
      case 'Bottoms':
        this.state = { ...this.state, category: 'Bottoms', designs: ['Cargo pants', 'Culottes', 'Jeans', 'Jeggings', 'Joggers', 'Leggings', 'Shorts', 'Skirts', 'Trousers'] };
        break;
      case 'Winter Wear':
        this.state = { ...this.state, category: 'Winter Wear', designs: ['Cardigans', 'Coat', 'Full sleeve jackets', 'Pullovers-Sweaters', 'Puncho', 'Sleeveless Jackets', 'Sweatshirts'] };
        break;
      case 'Dresses':
        this.state = { ...this.state, category: 'Dresses', designs: ['Casual above knee', 'Casual below knee', 'Party dresses', 'Princess gown'] };
        break;
      case 'Sets':
        this.state = { ...this.state, category: 'Sets', designs: ['Active wear', 'Dungari', 'Jump suits', 'Night suits'] };
        break;
      case 'Ethnic wear':
        this.state = { ...this.state, category: 'Ethnic wear', designs: ['Anarkali set', 'Chudidar set', 'Ghagra Choli', 'Lehenga Chunri'] };
        break;
      default: break;
    }
  }

  nextPress() {
    this.state.addComment(this.state.section, this.state.comment);// Check the action, it unnecessarily creates a duplicate map entry.
    this.setState({ ...this.state, section: this.state.section + 1 });
    this.newFunction();
    this.state.next();
  }

  backPress() {
    this.state.addComment(this.state.section, this.state.comment);
    this.setState({ section: this.state.section - 1 });
    this.newFunction();
    this.state.back();
  }

  // We also need the comment stored in store for autofill.
  addComment(e, v) {
    this.setState({ comment: v });
    console.log(e, v);
  }
  render() {
    return (
      <div>
        <MuiThemeProvider>
          <div>
          <Flexbox flexWrap="wrap" justifyContent="space-around">
            {this.state.designs.map((design) => {
              return (
                <div key={design}>
                  <ImageCard design={design} category={this.state.category} rating={this.state.rating} vote={this.state.votecounts.get(design)} />
                  </div>
              );
            })}
            </Flexbox>
          </div>
        </MuiThemeProvider>
        <MuiThemeProvider>
          {
            this.state.section !== 5 || this.state.currentitem === this.state.sizeofmap ?
              <div>
                <div style={{ marginLeft: '10%', marginRight: '10%', marginBottom: '20px' }}>
                  <TextField
                    hintText={this.state.hintText}
                    onChange={this.addComment}
                    fullWidth
                  />
                </div>
                { this.state.section !== 8 ?
                  <Flexbox justifyContent="space-between" marginLeft="10%" marginRight="10%" marginBottom="20px">
                  <RaisedButton label="Back" onClick={this.backPress} />
                  <RaisedButton label="Next" onClick={this.nextPress} />
                  </Flexbox>
                :  <RaisedButton label="Finish" onClick={this.backPress} style={{ paddingLeft: '70%' }} />
                }
                
              </div> : <div />
          }
        </MuiThemeProvider>
      </div>
    );
  }
}

