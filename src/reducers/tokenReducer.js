const tokenReducer = (state = { token: '', }, action) => {
    switch (action.type) {
      case "TOKEN":
        state = {
          token: action.payload,
        }
    }
    return state;
  };
  export default tokenReducer;
