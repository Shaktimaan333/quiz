import moment from 'moment';

const votecounts = new Map();
votecounts.set('cool', 0);

const stylecounts = new Map();
stylecounts.set('Top', 0);

const comments = new Map();

const quizReducerDefaultState = {
  index: 1,
  name: '',
  kidName: '',
  dob: moment(),
  sizetop: 0,
  sizebottom: 0,
  skincolor: 0,
  votecounts,
  stylecounts,
};

const max = 15;

export default (state = quizReducerDefaultState, action) => {
  switch (action.type) {
    case 'BACK':
      return {
        ...state,
        index: state.index > 0 ? state.index - 1 : 0
        // index: state.index - 1
      };
    case 'NEXT':
      return {
        ...state,
        index: state.index < 15 ? state.index + 1 : 15
      };
    case 'SECTION1_ADD':
      return {
        ...state,
        index: state.index + 1,
        name: action.name,
        kidName: action.kidName,
        dob: action.dob
      };
    case 'SECTION2_ADD':
      return {
        ...state,
        index: state.index + 1,
        sizetop: action.sizetop,
        sizebottom: action.sizebottom,
        skincolor: action.skincolor
      };
    case 'RATING':
      return {
        ...state,
        votecounts: votecounts.set(action.selection, action.vote)
      };
    case 'STYLERATING':
      return {
        ...state,
        stylecounts: stylecounts.set(action.selection, action.vote)
      };
    case 'ADDCOMMENT':
      return {
        ...state,
        comments: comments.set(action.section, action.comment)
      };
    default:
      return state;
  }
};
