import React, {Fragment} from 'react'
import {NavLink} from 'react-router-dom'
import {connect} from "react-redux";
import * as actions from '../redux/actions/authActions'

class HeaderNav extends React.Component {
	
	constructor(props) {
		super(props)
		this.state = {
			texttextemail: '',
			textpassword: '',
			textfirst: '',
			textlast: '',
			textusername: '',
			textpass: '',
			textpassC: '',
			login_username: ''
		}
	}
	
	componentDidMount() {
		this.props.authCheckOut()
		const {token, username} = this.props
		if (token !== null) {
			this.setState({
				login_username: username
			})
		}
		
	}
	
	componentDidUpdate(prevProps, prevState, snapshot) {
		if (prevProps.token !== this.props.token) {
			this.setState({
				login_username: this.props.username
			})
		}
	}
	
	
	preventLink = (e) => {
		e.preventDefault()
	}
	onChangeInputEmail = (event) => {
		this.setState({
			textemail: event.target.value
		})
	}
	onChangeInputPassword = (event) => {
		this.setState({
			textpassword: event.target.value
		})
	}
	onChangeInputFirst = (event) => {
		this.setState({
			textfirst: event.target.value
		})
	}
	onChangeInputLast = (event) => {
		this.setState({
			textlast: event.target.value
		})
	}
	onChangeInputUsername = (event) => {
		this.setState({
			textusername: event.target.value
		})
	}
	onChangeInputPassword1 = (event) => {
		this.setState({
			textpass: event.target.value
		})
	}
	onChangeInputPassword2 = (event) => {
		this.setState({
			textpassC: event.target.value
		})
	}
	handleLogin = () => {
		const {textusername, textpass} = this.state;
		this.props.authLogin(textusername, textpass)
		
	}
	handleRegister = () => {
		if (this.state.textpass === this.state.textpassC && this.state.textemail !== '' && this.state.textuser !== '' && this.state.textpass !== '' && this.state.textpassC !== '') {
			this.props.authSignUp(this.state.textusername,this.state.textemail,this.state.textpass, this.state.textpassC )
		}
		
	}
	registerUser = () => {
		if (this.state.textpass === this.state.textpassC && this.state.textemail !== '' && this.state.textuser !== '' && this.state.textpass !== '' && this.state.textpassC !== '') {
			var xhr = new XMLHttpRequest();
			var url = "http://localhost:8000/api/rest-auth/registration/";
			xhr.open("POST", url, true);
			xhr.setRequestHeader("Content-Type", "application/json");
			xhr.onreadystatechange = () => {
				if (xhr.readyState === 4 && xhr.status === 200 || xhr.status === 400) {
					var json = JSON.parse(xhr.responseText);
					console.log(json)
					//this.loginUser()
				}
			};
			var data = JSON.stringify({
				"username": this.state.textuser,
				"email": this.state.textemail,
				"password1": this.state.textpass,
				"password2": this.state.textpassC
			});
			xhr.send(data);
		}
	}
	
	render() {
		return (
			<div>
				<nav className="navbar navbar-default">
					<div className="container-fluid">
						<div className="navbar-header">
							<button type="button" className="navbar-toggle collapsed" data-toggle="collapse"
							        data-target="#navbar" aria-expanded="false" aria-controls="navbar">
								<span className="sr-only">Toggle navigation</span>
								<span className="icon-bar"/>
								<span className="icon-bar"/>
								<span className="icon-bar"/>
							</button>
							<NavLink className="navbar-brand" to={"/"}>LOGO</NavLink>
						</div>
						<div id="navbar" className="navbar-collapse collapse" aria-expanded="false"
						     style={{height: '1px'}}>
							<ul className="nav navbar-nav">
								<li><NavLink exact to={"/community"}>Community</NavLink></li>
								<li><NavLink to={"/how-to-win"}>How to Win</NavLink></li>
								<li><NavLink to={"/rules"}>Rules</NavLink></li>
								<li><NavLink to={"/support"}>Support</NavLink></li>
								<li><NavLink to={"/store"}>Store</NavLink></li>
								<li className="menu-bg-black">
									<NavLink to={"/giveway"}> <span><i className="fa fa-gift"
									                                   aria-hidden="true"/></span> GIVEWAY</NavLink>
								</li>
								<li className="menu-bg-white">
									<NavLink to={"/browse"}><span className="icon-size"><i className="fa fa-th-large"
									                                                       aria-hidden="true"/></span> BROWSE</NavLink>
								</li>
								<li><NavLink to={"/category"}>category link</NavLink></li>
								<li><NavLink to={"/game-live"}>game live link</NavLink></li>
								<li>
									<NavLink
										to={this.state.login_username !== '' ? "/live-stream/" + this.state.login_username : '/live-stream'}>
										live stream link
									</NavLink>
								</li>
								{
									this.state.login_username !== '' ?
										<li><NavLink to={"/user-settings/" + this.state.login_username}>user settings
											link</NavLink></li> : ''
								}
								<li><NavLink to={"/"} onClick={this.preventLink}>
									<button style={{backgroundColor: 'transparent', padding: '0 10px'}}
									        onClick={() => {
										        this.props.onClick()
									        }}>{this.props.online_status ? 'Offline' : 'Online'}
									</button>
								</NavLink>
								</li>
							</ul>
							<ul className="nav navbar-nav navbar-right">
								{
									this.state.login_username !== '' ?
										<li>
											<button type="button" className="btn btn-primary"
											        onClick={this.props.authLogOut}>
												Logout
											</button>
										</li>
										:
										<Fragment>
											<li>
												<button type="button" className="btn btn-primary" data-toggle="modal"
												        data-target="#login_id">
													Login
												</button>
											</li>
											<li className="border-r">|</li>
											<li>
												<button type="button" className="btn btn-primary" data-toggle="modal"
												        data-target="#signup_id">
													Sign Up
												</button>
											</li>
										</Fragment>
								}
							
							
							</ul>
						</div>
						{/*/.nav-collapse */}
					</div>
					{/*/.container-fluid */}
				</nav>
				<div className="modal fade" id="login_id" tabIndex="-1" role="dialog"
				     aria-labelledby="myModalLabel">
					<div className="modal-dialog" role="document">
						<div className="modal-content">
							<div className="modal-header">
								<button type="button" className="close" data-dismiss="modal"
								        aria-label="Close"><span
									aria-hidden="true">&times;</span></button>
								<h4 className="modal-title" id="myModalLabel">
									Sign in</h4>
							</div>
							<div className="modal-body">
								<div className="md-form mb-5">
									<i className="fas fa-envelope prefix grey-text"></i>
									<input value={this.state.textusername} onChange={this.onChangeInputUsername}
									       className="selectedtext form-control form-own full-w" type="email"/>
									<label data-error="wrong" data-success="right"
									       htmlFor="defaultForm-email">Username</label>
									<input value={this.state.textpass} onChange={this.onChangeInputPassword1}
									       className="selectedtext form-control form-own full-w" type="email"/>
									<label data-error="wrong" data-success="right"
									       htmlFor="defaultForm-email">Password</label>
								</div>
							
							</div>
							<div className="modal-footer">
								<button onClick={this.handleLogin}
								        type="button"
								        data-dismiss="modal"
								        className="btn btn-primary">
									Login
								</button>
							</div>
						</div>
					</div>
				</div>
				{/* adding giveaway modal part end */}
				<div className="modal fade" id="signup_id" tabIndex="-1" role="dialog"
				     aria-labelledby="myModalLabel">
					<div className="modal-dialog" role="document">
						<div className="modal-content">
							<div className="modal-header">
								<button type="button" className="close" data-dismiss="modal"
								        aria-label="Close"><span
									aria-hidden="true">&times;</span></button>
								<h4 className="modal-title" id="myModalLabel">
									Sign Up</h4>
							</div>
							<div className="modal-body">
								<div className="md-form mb-5">
									<i className="fas fa-envelope prefix grey-text"></i>
									<input value={this.state.textfirst} onChange={this.onChangeInputFirst}
									       className="selectedtext form-control form-own full-w" type="text"/>
									<label data-error="wrong" data-success="right"
									       htmlFor="defaultForm-email">First</label>
									<input value={this.state.textlast} onChange={this.onChangeInputLast}
									       className="selectedtext form-control form-own full-w" type="text"/>
									<label data-error="wrong" data-success="right"
									       htmlFor="defaultForm-email">Last</label>
									<input value={this.state.textemail} onChange={this.onChangeInputEmail}
									       className="selectedtext form-control form-own full-w" type="email"/>
									<label data-error="wrong" data-success="right"
									       htmlFor="defaultForm-email">Email</label>
									<input value={this.state.textusername} onChange={this.onChangeInputUsername}
									       className="selectedtext form-control form-own full-w" type="text"/>
									<label data-error="wrong" data-success="right"
									       htmlFor="defaultForm-email">Username</label>
									<input value={this.state.textpass} onChange={this.onChangeInputPassword1}
									       className="selectedtext form-control form-own full-w" type="password"/>
									<label data-error="wrong" data-success="right"
									       htmlFor="defaultForm-email">Password</label>
									<input value={this.state.textpassC} onChange={this.onChangeInputPassword2}
									       className="selectedtext form-control form-own full-w" type="password"/>
									<label data-error="wrong" data-success="right"
									       htmlFor="defaultForm-email">Password</label>
								</div>
							
							</div>
							<div className="modal-footer">
								<button onClick={this.handleRegister}
								        type="button"
								        data-dismiss="modal"
								        className="btn btn-primary">
									Sign Up
								</button>
							</div>
						</div>
					</div>
				</div>
				{/* adding giveaway modal part end */}
			
			</div>
		
		
		)
	}
}

const matStateToProps = state => {
	return {
		token: state.auth.token,
		username: state.auth.username
	}
}
const mapDispatchToProps = dispatch => {
	return {
		authLogin: (username, password) => dispatch(actions.authLogin(username, password)),
		authCheckOut: () => dispatch(actions.authCheckState()),
		authLogOut: () => dispatch(actions.logout()),
		authSignUp: (username, email, password1, password2) => dispatch(actions.authSignUp(username, email, password1, password2))
	}
}
export default connect(matStateToProps, mapDispatchToProps)(HeaderNav);