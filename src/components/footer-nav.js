import React from 'react'
import {NavLink} from 'react-router-dom'

class FooterNav extends React.Component {
    render() {
        return (
            <div>
                <footer>
                    <div className="container-fluid">
                        <div className="row">
                            <div className="col-lg-4 col-sm-12 col-md-0" />
                            <div className="col-lg-4 col-sm-12 col-md-6">
                                <div className="social-menu">
                                    <nav>
                                        <ul>
                                            <li><NavLink to={"/support"}>Support</NavLink></li>
                                            <li><NavLink to={"/faq"}>FAQ</NavLink></li>
                                            <li><NavLink to={"/terms-service"}>Terms of Service</NavLink></li>
                                            <li><NavLink to={"/rules"}>Rules</NavLink></li>
                                        </ul>
                                    </nav>
                                    <p className="center">Copyright Bullshit</p>
                                </div>
                            </div>
                            <div className="socail-container col-lg-4 col-sm-12 col-md-6">
                                <div className="social-footer">
                                    <ul className={"social-link"}>
                                        <li><NavLink to={"/facebook"}><i className="fa fa-facebook" aria-hidden="true" /></NavLink></li>
                                        <li><NavLink to={"/twitter"}><i className="fa fa-twitter" aria-hidden="true" /></NavLink></li>
                                        <li><NavLink to={"/slideshare"}><i className="fa fa-slideshare" aria-hidden="true" /></NavLink></li>
                                        <li><NavLink to={"/instagram"}><i className="fa fa-instagram" aria-hidden="true" /></NavLink></li>
                                        <li><NavLink to={"/twitch"}><i className="fa fa-twitch" aria-hidden="true" /></NavLink></li>
                                        <li><NavLink to={"/youtube"}><i className="fa fa-youtube-play" aria-hidden="true" /></NavLink></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </footer>
            </div>
        )
    }
}
export default FooterNav