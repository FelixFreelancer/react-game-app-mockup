import {AUTH_SUCCESS, AUTH_LOGOUT, AUTH_FAIL} from '../actions/actionTypes'

const initialState = {
  token: null,
  error: null
}

export const authReducer = (state=initialState, action) => {
	switch(action.type){
		case AUTH_SUCCESS:
			return {
				token: action.token,
				username: action.username
			};
		case AUTH_LOGOUT:
			return {
				token: null,
				username: ''
			}
		case AUTH_FAIL:
			return {
				error: action.error
			}
		default:
			return state
	}
}
export default authReducer;