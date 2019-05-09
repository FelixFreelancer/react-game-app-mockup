import React from 'react'
import {Link, NavLink} from "react-router-dom";
import Popup from "reactjs-popup";


class UserSettings extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            edit_giveaway: '',
            update_giveaway: '',
            new_giveaway: '',
            new_giveaway_entry: [],
            social_connections: [{
                icon: 'fa fa-steam',
                label: 'steam',
                check_img: process.env.PUBLIC_URL + 'assets/images/tick.png',
                username: 'user name'
            }, {
                icon: 'fa fa-twitch',
                label: 'twitch',
                check_img: process.env.PUBLIC_URL + 'assets/images/tick.png',
                username: 'user name'
            }, {
                icon: 'fa fa-twitter',
                label: 'twitter',
                check_img: process.env.PUBLIC_URL + 'assets/images/tick.png',
                username: 'user name'
            }, {
                icon: 'fa fa-facebook',
                label: 'facebook',
                check_img: process.env.PUBLIC_URL + 'assets/images/tick.png',
                username: 'user name'
            }, {
                icon: 'fa fa-slideshare',
                label: 'steam',
                check_img: process.env.PUBLIC_URL + 'assets/images/tick.png',
                username: 'user name'
            }, {
                icon: 'fa fa-youtube-play',
                label: 'youtube',
                check_img: process.env.PUBLIC_URL + 'assets/images/tick.png',
                username: 'user name'
            },],
            user: {
                img: process.env.PUBLIC_URL + 'assets/images/user-img.png',
                name: 'user Name',
                type: 'account type'
            },
            select_stream_service: [{
                service: 'twitch'
            }, {
                service: 'Facebook gaming',
            }, {
                service: 'Youtube gaming',
            }, {
                service: 'Mixer'
            }],
            service_url: 'state url',
            entry_options: [{
                entry_color_class: 'discord-bg',
                entry_icon: 'fa fa-slideshare',
                entry_label: 'JOIN DISCORD',
                entry_url: 'giveaway1'
            }, {
                entry_color_class: 'twitch-bg',
                entry_icon: 'fa fa-twitch',
                entry_label: 'follow on twitch',
                entry_url: 'giveaway2'
            }, {
                entry_color_class: 'youtube-bg',
                entry_icon: 'fa fa-youtube-play',
                entry_label: 'watch youtube video',
                entry_url: 'giveaway3'
            }, {
                entry_color_class: 'twitter-bg',
                entry_icon: 'fa fa-twitter',
                entry_label: 'retweet on twitter',
                entry_url: 'giveaway4'
            }, {
                entry_color_class: 'facebook-bg',
                entry_icon: 'fa fa-facebook',
                entry_label: 'visit facebook page',
                entry_url: 'giveaway5'
            }, {
                entry_color_class: 'steam-bg',
                entry_icon: 'fa fa fa-steam',
                entry_label: 'join steam group',
                entry_url: 'giveaway6'
            },],
            edit_giveaway_index: 0
        }
    }

    openCity = (evt, cityName) => {
        var i, tabcontent, tablinks;
        tabcontent = document.getElementsByClassName("tabcontent");
        for (i = 0; i < tabcontent.length; i++) {
            tabcontent[i].style.display = "none";
        }
        tablinks = document.getElementsByClassName("tablinks");
        for (i = 0; i < tablinks.length; i++) {
            tablinks[i].className = tablinks[i].className.replace(" active", "");
        }
        document.getElementById(cityName).style.display = "block";
        evt.currentTarget.className += " active";
    }

    onChangeInputUrl = (event) => {
        this.setState({
            service_url: event.target.value
        })
    }
    onChangeAddGiveaway = (e) => {
        this.setState({
            new_giveaway: e.target.value
        })
    }
    onChangeEditGiveaway = (e) => {
        this.setState({
            edit_giveaway: e.target.value,
            update_giveaway: e.target.value,
        })
    }
    handleEditGiveaway = (url, index) => {
        this.setState({
            edit_giveaway: url,
            edit_giveaway_index: index
        })
    }
    handleUpdateGiveaway = () => {
        console.log(this.state.entry_options[this.state.edit_giveaway_index])
        //entry_options[this.state.edit_giveaway_index]: {
        //                 entry_url: update_giveaway
        //         }

        this.setState({
            update_giveaway:'',
            edit_giveaway: '',
        })

    }
    handleAddNewGiveaway = () => {
       this.state.new_giveaway_entry.push(this.state.new_giveaway)
        console.log(this.state.new_giveaway_entry)
        this.setState({
            new_giveaway: ''
        })
    }

    handleStartGiveaway = () => {
        window.alert(JSON.stringify(this.state.new_giveaway_entry, null, 2))
    }
    render() {
        // document.getElementById("defaultOpen").click();
        return (
            <div>
                <div className="container-fluid user-settings-container">

                    <div className="row">
                        <div className="col-lg-12 col-md-12 col-sm-12">
                            <div className="tab">
                                <button className="tablinks active" onClick={e => this.openCity(e, 'settings')}
                                        id="defaultOpen">settings
                                </button>
                                <button className="tablinks" onClick={e => this.openCity(e, 'giveaways')}>giveaways
                                </button>
                                <button className="tablinks" onClick={e => this.openCity(e, 'partner')}>become partner
                                </button>
                            </div>
                            {/*settings tab*/}
                            <div id="settings" className="tabcontent">
                                <h1>User settings</h1>

                                <div className="user-box">
                                    <div className="flout-left">
                                        <img src={this.state.user.img} className="img-but img-responsive" alt="user"/>
                                        <div>
                    <span className="own-btn upload-but avter-but btn-file">
                      UPLOAD NEW AVATAR <input type="file"/>
                    </span>
                                        </div>
                                    </div>
                                    <div className="flout-left">
                                        <div className="user-side-text">
                                            <h2>{this.state.user.name}</h2>
                                            <h3>{this.state.user.type}</h3>
                                            <h4>premium</h4>
                                        </div>
                                    </div>
                                </div>
                                <div className="clearfix"/>
                                <h2>Change EMAIL</h2>
                                <hr/>
                                <form className="form-horizontal">
                                    <div className="form-group">
                                        <label className="col-sm-2 col-md-3 col-lg-2 control-label">new email</label>
                                        <div className="col-sm-10 col-md-9 col-lg-10">
                                            <input type="name" className="form-control form-own"/>
                                        </div>
                                    </div>
                                    <div className="clearfix"/>
                                    <h2>Change password</h2>
                                    <hr/>
                                    <div className="form-group">
                                        <label className="col-sm-5 col-md-4 col-lg-3 control-label">current
                                            password</label>
                                        <div className="col-sm-7 col-md-8 col-lg-9">
                                            <input type="name" className="form-control form-own"/>
                                        </div>
                                    </div>
                                    <div className="form-group">
                                        <label className="col-sm-5 col-md-4 col-lg-3 control-label">new password</label>
                                        <div className="col-sm-7 col-md-8 col-lg-9">
                                            <input type="name" className="form-control form-own"/>
                                        </div>
                                    </div>
                                    <div className="form-group">
                                        <label className="col-sm-5 col-md-4 col-lg-3 control-label">confirm new
                                            password</label>
                                        <div className="col-sm-7 col-md-8 col-lg-9">
                                            <input type="name" className="form-control form-own"/>
                                        </div>
                                    </div>
                                    <div className="form-group">
                                        <div className="col-sm-offset-3 col-md-offset-5 col-sm-7">
                                            <button type="submit"
                                                    className="own-btn btn btn-blue btn-primary uppercase">SUBMIT
                                            </button>
                                        </div>
                                    </div>
                                    <div className="clearfix"/>
                                    <h2>socials connections</h2>
                                    <hr/>
                                    <div className="user-but-list">
                                        <ul>
                                            {this.state.social_connections.map((connection, index) => {
                                                return (
                                                    <li key={index}>
                                                        <button className="own-btn btn btn-blue btn-primary uppercase">
                                                            <span><i className={connection.icon}
                                                                     aria-hidden="true"/></span>
                                                            {connection.label}
                                                        </button>
                                                        <span> <span><img
                                                            src={connection.check_img} alt={"check"}
                                                            className="img-responsive"/></span> {connection.username}</span>
                                                    </li>
                                                )
                                            })}
                                        </ul>
                                    </div>
                                    join discord
                                    <div className="clearfix"/>
                                    <h2>Select Streaming Service</h2>
                                    <hr/>
                                    <div className="col-sm-12 col-md-6 col-lg-6">
                                        <div className="form-group">
                                            <label>Select list (select one):</label>
                                            <select className="form-control form-own full-w" name="streem-services">
                                                {this.state.select_stream_service.map((service, index) => {
                                                    return (
                                                        <option key={index} value={index}> {service.service} </option>
                                                    )
                                                })}
                                            </select>
                                        </div>
                                    </div>
                                    <div className="col-sm-12 col-md-6 col-lg-6">
                                        <div className="form-group">
                                            <label>URL :</label>
                                            <div className="input">
                                                <input value={this.state.service_url} onChange={this.onChangeInputUrl}
                                                       className="selectedtext form-control form-own full-w" type="text"
                                                       placeholder="https://www.twitch.tv/esl_csgo"/></div>
                                        </div>
                                    </div>
                                </form>
                            </div>
                            {/*giveways tab*/}
                            <div id="giveaways" className="tabcontent">
                                <h1>giveaways</h1>
                                <div className="user-box">
                                    <h2>Create Giveaway</h2>
                                    <hr/>
                                    <div>
                                      <span className="own-btn upload-but btn-file">
                                        upload featured image
                                          <input type="file"/>
                                      </span> <span className="sm-text">450 x 300</span>
                                    </div>
                                </div>
                                <div className="clearfix"/>
                                <br/>
                                <div className="form-horizontal">
                                    <div className="form-group">
                                        <label className="col-sm-12 col-md-3 col-lg-2 control-label">Description</label>
                                        <div className="col-sm-12 col-md-9 col-lg-10">
                                            <textarea className="form-control form-own2 full-text-area" rows={3}
                                                      id="comment" defaultValue={""}/>
                                        </div>
                                    </div>
                                    <div className="form-group">
                                        <label className="col-sm-4 col-md-3 col-lg-2 control-label">End Date</label>
                                        <div className="col-sm-8 col-md-9 col-lg-10">
                                            <input type="date" className="form-control date-input"/>
                                        </div>
                                    </div>
                                    <div className="clearfix"/>
                                    <h1>Entry Options</h1>
                                    <br/>
                                    <div className="col-md-6">
                                        <div className="Entry-list">
                                            <ul>
                                                {this.state.entry_options.map((entry_option, index) => {
                                                    return (
                                                        <li key={index}>
                                                            <div
                                                                className={entry_option.entry_color_class + " entry-listing color-white"}>
                                                                <div className="Entry-list-icon"><i
                                                                    className={entry_option.entry_icon}
                                                                    aria-hidden="true"/></div>
                                                                <div className="toggle-lable">
                                                                    <label className="switch">
                                                                        <input type="checkbox" defaultChecked/>
                                                                        <span className="slider round"/>
                                                                    </label>
                                                                </div>
                                                                <div
                                                                    className="title-entry">{entry_option.entry_label}
                                                                </div>
                                                                <div className="entry-link">
                                                                    <button className="entry-url-edit-btn"
                                                                            onClick={() => {
                                                                                this.handleEditGiveaway(entry_option.entry_url, index)
                                                                            }}
                                                                            data-toggle="modal" data-target="#edit_giveaway_modal"
                                                                    >Edit
                                                                    </button>
                                                                </div>
                                                            </div>
                                                        </li>
                                                    )
                                                })}
                                            </ul>
                                        </div>
                                    </div>
                                    <div className="col-md-6">
                                        <div className="Entry-list">
                                            <ul>
                                                {this.state.entry_options.map((entry_option, index) => {
                                                    return (
                                                        <li key={index}>
                                                            <div
                                                                className={entry_option.entry_color_class + " entry-listing color-white"}>
                                                                <div className="Entry-list-icon"><i
                                                                    className={entry_option.entry_icon}
                                                                    aria-hidden="true"/></div>
                                                                <div className="toggle-lable">
                                                                    <label className="switch">
                                                                        <input type="checkbox" defaultChecked/>
                                                                        <span className="slider round"/>
                                                                    </label>
                                                                </div>
                                                                <div
                                                                    className="title-entry">{entry_option.entry_label}</div>
                                                                <div className="entry-link"><Link to="#">EDIT</Link>
                                                                </div>
                                                            </div>
                                                        </li>
                                                    )
                                                })}
                                            </ul>
                                        </div>
                                    </div>
                                    <div className="col-md-6">
                                        <button type={"button"}
                                                className="add-btn own-btn btn btn-blue btn-primary uppercase"
                                                data-toggle="modal" data-target="#add_giveaway_modal">
                                            Add giveaway
                                        </button>
                                    </div>
                                    <div className="col-md-6">
                                        <button onClick={this.handleStartGiveaway}
                                            className="start-btn own-btn btn btn-blue btn-primary uppercase">start
                                            giveaway
                                        </button>
                                    </div>
                                </div>
                            </div>
                            {/*partner tab*/}
                            <div id="partner" className="tabcontent">
                                <h1>become partner</h1>
                            </div>
                        </div>
                        <div className="footer-top-gap"/>
                    </div>
                </div>

                <div className="modal fade" id="edit_giveaway_modal" tabIndex="-1" role="dialog"
                     aria-labelledby="myModalLabel">
                    <div className={"modal-dialog"} role="document">
                        <div className="modal-content">
                            <div className="modal-header">
                                <button type="button" className="close"
                                        data-dismiss="modal"
                                        aria-label="Close">
                                            <span
                                                aria-hidden="true">&times;</span></button>
                                <h4 className="modal-title" id="myModalLabel">
                                    Editing giveaway</h4>
                            </div>
                            <div className="modal-body">
                                <div className="form-container">
                                    <label
                                        className="col-sm-5 col-md-5 col-lg-5 control-label">
                                        Change giveaway</label>
                                    <div
                                        className="col-sm-7 col-md-7 col-lg-7">
                                        <input type="text"
                                               onChange={this.onChangeEditGiveaway}
                                               name={"update_giveaway"}
                                               value={
                                                   this.state.update_giveaway !== this.state.edit_giveaway?
                                                        this.state.edit_giveaway :
                                                        this.state.update_giveaway}

                                               className="form-control form-own"/>
                                    </div>
                                </div>
                            </div>
                            <div className="modal-footer">
                                <NavLink
                                    to={this.state.update_giveaway? this.state.update_giveaway : this.state.edit_giveaway}
                                    style={{marginRight: '15px'}}
                                    target={"_blank"}>
                                    <button type="button"
                                            className=" btn btn-default">
                                        Preview
                                    </button>
                                </NavLink>
                                <button
                                    onClick={this.handleUpdateGiveaway}
                                    type="button"
                                    data-dismiss="modal"
                                    className="btn btn-primary">
                                    Save
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
                {/*editing giveaway modal part end*/}

                {/*adding giveaway modal part*/}
                <div className="modal fade" id="add_giveaway_modal" tabIndex="-1" role="dialog"
                     aria-labelledby="myModalLabel">
                    <div className="modal-dialog" role="document">
                        <div className="modal-content">
                            <div className="modal-header">
                                <button type="button" className="close" data-dismiss="modal"
                                        aria-label="Close"><span
                                    aria-hidden="true">&times;</span></button>
                                <h4 className="modal-title" id="myModalLabel">Adding new
                                    giveaway</h4>
                            </div>
                            <div className="modal-body">
                                <div className="form-container">
                                    <label className="col-sm-5 col-md-5 col-lg-5 control-label">
                                        Input new giveaway</label>
                                    <div className="col-sm-7 col-md-7 col-lg-7">
                                        <input type="text" onChange={this.onChangeAddGiveaway}
                                               name={"new_giveaway"} value={this.state.new_giveaway}
                                               placeholder={"new-giveaway"}
                                               className="form-control form-own"/>
                                    </div>
                                </div>
                            </div>
                            <div className="modal-footer">
                                <NavLink to={this.state.new_giveaway}
                                         style={{marginRight: '15px'}}
                                         target={"_blank"}>
                                    <button type="button" className=" btn btn-default">
                                        Preview
                                    </button>
                                </NavLink>
                                <button onClick={this.handleAddNewGiveaway}
                                        type="button"
                                        data-dismiss="modal"
                                        className="btn btn-primary">
                                    Add
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

export default UserSettings