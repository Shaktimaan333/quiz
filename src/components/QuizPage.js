import React, { Component } from 'react';
import { connect } from 'react-redux';
import moment from 'moment';
import Flexbox from 'flexbox-react';
import { RaisedButton, Typography } from 'material-ui';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import { next, back, section1Add, section2Add, rating, stylerating, addComment } from '../actions/quiz';
import QuizForm from '../components/quiz/QuizForm';
import Section1 from '../components/quiz/Section1';
import Section2 from './quiz/Section2';
import Section3 from './quiz/Section3';
import Section4 from './quiz/Section4';


const styles = {
  container: {
    color: '#007aff',
    marginTop: '10px',
    alignSelf: 'stretch', // Not working 
    alignItems: 'end',
    
  },
  inner_container: {
  },
};

// This should be passed all the relevant data. It will then have subcomponents.
const PageSection = (props) => (
  <div>
    <h1 className="box-layout__title">{props.title}</h1>
    <p>This will be the body for the section. Just confirming if we will have to scroll when the page gets finished</p>
    <QuizForm />
  </div>
);

const Title = props => (
  <div>
    <h1 style={{ textAlign: 'center' }}>{props.title}</h1>
  </div>
);

export const QuizPage = ({
  index,
  name,
  kidName,
  dob,
  next,
  back,
  section1Add,
  sizetop,
  sizebottom,
  skincolor,
  section2Add,
  votecounts,
  rating,
  stylecounts,
  stylerating,
  comments,
  addComment,
  positiveArray,
}) => (
  <div>
    <div>
      <div>
        {(() => {
        switch (index) {
            case 1:
               return (
                 <div>
                   <Title title="Basic information" />
                   <Section1 section1Add={section1Add} name={name} kidName={kidName} dob={dob}  />
                 </div>
                );
            case 2:
              return (
                <div>
                  <Title title={`Help us know ${kidName} better`} />
                  <Section2 section2Add={section2Add} sizetop={sizetop} sizebottom={sizebottom} skincolor={skincolor} back={back} next={next} />
                </div>
              );
            case 3:
                return (
                  <div>
                    <Title title={`What best represents ${kidName}`} />
                    <Section3 key={index} section={index} rating={rating} votecounts={votecounts} next={next} back={back} comments={comments} addComment={addComment} />
                  </div>
                );
            case 4:
                return (
                  <div>
                    <Title title={`What will ${kidName} wear`} />
                    <Section3 key={index} section={index} rating={stylerating} votecounts={stylecounts} next={next} back={back} comments={comments} addComment={addComment} />
                  </div>
                  // Have to implement a for each for all of the selected designs.
            );
            // I need to provide size of the array and the current index that is being provided. Based on this, it will be decided whether to print back and next buttons.
            // Using index and size of for the same.
            case 5:
                return (
                  <div key={index}>
                    {Array.from(stylecounts.keys()).map((styleinstance) => {
                      return (
                        stylecounts.get(styleinstance) > 0 ?
                          <div>
                            <Title title={`Select ${styleinstance} design`} />
                            <Section3 key={styleinstance} styleinstance={styleinstance} section={index} rating={rating} votecounts={votecounts} next={next} back={back} sizeofmap={positiveArray.length} currentitem={positiveArray.indexOf(styleinstance)} comments={comments} addComment={addComment} />
                          </div> : <div />
                      );
                    })}
                  </div>
                );
            case 6:
                  return (
                    <div>
                      <Title title={`What patterns do you want for ${kidName}`} />
                      <Section3 key={index} section={index} rating={rating} votecounts={votecounts} next={next} back={back} comments={comments} addComment={addComment} />
                    </div>
            );
            case 7:
                  return (
                    <div>
                      <Title title={`What color do you want to dress ${kidName} in`} />
                      <Section3 key={index} section={index} rating={rating} votecounts={votecounts} next={next} back={back} comments={comments} addComment={addComment} />
                    </div>
            );
            case 8:
            return (
              <div>
                <Title title={`Brands you generally shop for ${kidName}`} />
                <Section3 key={index} section={index} rating={rating} votecounts={votecounts} next={next} back={back} comments={comments} addComment={addComment} />
              </div>
            );
            default:
                return <Title title="Null" />;
        }
    })()}
      </div>
    </div>
  </div>
);

const mapStateToProps = (state) => {
  return {
    index: state.quiz.index,
    name: state.quiz.name,
    kidName: state.quiz.kidName,
    dob: state.quiz.dob,
    sizetop: state.quiz.sizetop,
    sizebottom: state.quiz.sizebottom,
    skincolor: state.quiz.skincolor,
    votecounts: state.quiz.votecounts,
    stylecounts: state.quiz.stylecounts,
    comments: state.quiz.comments,
    positiveArray: Array.from(state.quiz.stylecounts.keys(), (x) => (state.quiz.stylecounts.get(x) > 0 ? x : '')),
  };
};

// My naming convention: I will do a different of casing so as not to have the linting error.
const mapDispatchToProps = dispatch => {
  return {
    next: () => dispatch(next()),
    back: () => dispatch(back()),
    section1Add: (name, kidName, dob) => dispatch(section1Add(name, kidName, dob)),
    section2Add: (sizetop, sizebottom, skincolor) => dispatch(section2Add(sizetop, sizebottom, skincolor)),
    rating: (selection, votecount) => dispatch(rating(selection, votecount)),
    stylerating: (selection, votecount) => dispatch(stylerating(selection, votecount)),
    addComment: (section, comment) => dispatch(addComment(section, comment)),
  };
};


export default connect(mapStateToProps, mapDispatchToProps)(QuizPage);
