export default (state = {}, action) => {
  switch (action.type) {
    case 'LOGIN':
      return {
        uid: action.uid
      };
    case 'LOGOUT':
      return {};
    default:
      return state;
  }
};
//  Only two actions have been defined. The other two actions, i.e., startlogin and startLogout will be dealt through default case, i.e., the state of the store will remain same.  