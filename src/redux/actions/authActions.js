import axios from 'axios'
import {AUTH_FAIL, AUTH_LOGOUT, AUTH_SUCCESS} from './actionTypes'
import {BACKEND_API} from "../../utility";

export const authSuccess = (token, username) => {
	return {
		type: AUTH_SUCCESS,
		token: token,
		username: username
	}
}

export const authFail = (error) => {
	return {
		type: AUTH_FAIL,
		error
	}
}

export const logout = () => {
	localStorage.removeItem('token')
	localStorage.removeItem('username')
	localStorage.removeItem('expirationDate')
	return {
		type: AUTH_LOGOUT
	}
}

export const authLogin = (username, password) => {
	console.log(username,  password)
	return dispatch => {
		axios.post(BACKEND_API +  'rest-auth/login/', {
				username: username,
				password: password
			})
			.then(res => {
				const token = res.data.key
				const expirationDate = new Date(new Date().getTime() + 3600 * 1000)
				localStorage.setItem('token', token)
				localStorage.setItem('username', username)
				localStorage.setItem('expirationDate', expirationDate)
				dispatch(authSuccess(token, username))
				dispatch(checkAuthTimeout(3600))
			})
			.catch(err => {
				dispatch(authFail(err))
			})
	}
}

export const authSignUp = (username, email, password1, password2) => {
	return dispatch => {
		axios.post(BACKEND_API + 'rest-auth/registration/', {
				username: username,
				email: email,
				password1: password1,
				password2: password2
			})
			.then( res => {
				const token = res.data.key
				const expirationDate = new Date(new Date().getTime()+ 3600 * 1000)
				localStorage.setItem('token', token)
				localStorage.setItem('expirationDate', expirationDate)
				dispatch(authSuccess(token))
				dispatch(checkAuthTimeout(3600))
			})
			.catch(err => {
				dispatch(authFail(err))
			})
	}
}

export const checkAuthTimeout = expirationDate => {
	return dispatch => {
		setTimeout(() => {
			dispatch(logout())
		}, expirationDate * 1000)
	}
}

export const authCheckState = () => {
	return dispatch => {
		const token = localStorage.getItem('token')
		const username = localStorage.getItem('username')
		if (token === undefined) {
			dispatch(logout())
		} else {
			const expirationDate = new Date(localStorage.getItem('expirationDate'))
			if (expirationDate <= new Date()) {
				dispatch(logout())
			}else {
				dispatch(authSuccess(token, username))
				dispatch(checkAuthTimeout((expirationDate.getTime() - new Date().getTime()) / 1000))
			}
		}
	}
}