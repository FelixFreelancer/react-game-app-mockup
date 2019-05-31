const uReducer = (state = { userName: '', userData: {}}, action) => {
    switch (action.type) {
      case "USER":
        state = {
          ...state,
          userName: action.payload,
        }
        break;
      case "USER_DATA":
        state = {
          ...state,
          userData: action.payload,
        }
        break;
      default:
        break;
    }
    return state;
  };
  export default uReducer;
