export const next = () => ({
  type: 'NEXT',
});

export const back = () => ({
  type: 'BACK'
});

export const finish = () => ({
  type: 'FINISH'
});

export const section1Add = (name, kidName, dob) => ({
  type: 'SECTION1_ADD',
  name,
  kidName,
  dob
});

export const section2Add = (sizetop, sizebottom, skincolor) => ({
  type: 'SECTION2_ADD',
  sizetop,
  sizebottom,
  skincolor
});

// Selection is a unique selection name like t-shirt, cool etc. Each will have a vote count.
// There will be an object votecount having selection name and associated votes.
// First just validate if it works in console.
export const rating = (selection, vote) => ({
  type: 'RATING',
  selection,
  vote
});

// Here the vote can only be positive and not negative. But why? Let it be. How does it matters if customer doesn't wants a design and wants to share this information as well.
// We are just giving it a different data structure for convenience.
export const stylerating = (selection, vote) => ({
  type: 'STYLERATING',
  selection,
  vote
});

// Right now I have kept section to be a number, later I should change it to a name.
export const addComment = (comment, section) => ({
  type: 'ADDCOMMENT',
  comment,
  section
});

