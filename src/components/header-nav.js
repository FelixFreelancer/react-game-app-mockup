import React from 'react'
import {NavLink} from 'react-router-dom'

class HeaderNav extends React.Component {
    preventLink = (e) => {
        e.preventDefault()
    }

    render() {

        return (
            <div>
                <nav className="navbar navbar-default">
                    <div className="container-fluid">
                        <div className="navbar-header">
                            <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#navbar" aria-expanded="false" aria-controls="navbar">
                                <span className="sr-only">Toggle navigation</span>
                                <span className="icon-bar" />
                                <span className="icon-bar" />
                                <span className="icon-bar" />
                            </button>
                            <NavLink className="navbar-brand" to={"/"}>LOGO</NavLink>
                        </div>
                        <div id="navbar" className="navbar-collapse collapse" aria-expanded="false" style={{height: '1px'}}>
                            <ul className="nav navbar-nav">
                                <li><NavLink exact to={"/community"}>Community</NavLink></li>
                                <li><NavLink to={"/how-to-win"}>How to Win</NavLink></li>
                                <li><NavLink to={"/rules"}>Rules</NavLink></li>
                                <li><NavLink to={"/support"}>Support</NavLink></li>
                                <li><NavLink to={"/store"}>Store</NavLink></li>
                                <li className="menu-bg-black">
                                    <NavLink to={"/giveway"}> <span><i className="fa fa-gift" aria-hidden="true" /></span> GIVEWAY</NavLink></li>
                                <li className="menu-bg-white">
                                    <NavLink to={"/browse"}><span className="icon-size"><i className="fa fa-th-large" aria-hidden="true" /></span> BROWSE</NavLink></li>
                                <li><NavLink to={"/category"}>category link</NavLink></li>
                                <li><NavLink to={"/game-live"}>game live link</NavLink></li>
                                <li><NavLink to={"/live-stream"}>live stream link</NavLink></li>
                                <li><NavLink to={"/user-settings"}>user settings link</NavLink></li>
                                <li ><NavLink to={"/"} onClick={this.preventLink}>

                                     <button style={{backgroundColor: 'transparent', padding: '0 10px'}}
                                         onClick={() => {this.props.onClick()}}>{this.props.online_status? 'Offline' : 'Online'}</button>
                                    
                                </NavLink>
                                </li>
                            </ul>
                            <ul className="nav navbar-nav navbar-right">
                                <li><NavLink to={"/login"}>Login</NavLink></li>
                                <li className="border-r">|</li>
                                <li><NavLink to={"/sign-up"}>Sign Up</NavLink></li>
                            </ul>
                        </div>{/*/.nav-collapse */}
                    </div>{/*/.container-fluid */}
                </nav>
            </div>
        )
    }
}


export default HeaderNav