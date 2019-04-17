import React from 'react'
import SideBar from "./sidebar";
import {server_url} from "../utility";

class GiveWay extends React.Component {
    state = {
        featured_giveaways: [{
            title: 'hyperex giveaway',
            img: process.env.PUBLIC_URL + 'assets/images/img5.png'
        }, {
            title: 'hyperex giveaway',
            img: process.env.PUBLIC_URL + 'assets/images/img5.png'
        }, {
            title: 'hyperex giveaway',
            img: process.env.PUBLIC_URL + 'assets/images/img5.png'
        }, {
            title: 'hyperex giveaway',
            img: process.env.PUBLIC_URL + 'assets/images/img5.png'
        }, {
            title: 'hyperex giveaway',
            img: process.env.PUBLIC_URL + 'assets/images/img5.png'
        },],
        other_giveaways: [{
            img: process.env.PUBLIC_URL + 'assets/images/giveway1.png',
            title: 'giveaway title',
            username: 'username',
            game_img: process.env.PUBLIC_URL + 'assets/images/giveway.png'
        }, {
            img: process.env.PUBLIC_URL + 'assets/images/giveway1.png',
            title: 'giveaway title',
            username: 'username',
            game_img: process.env.PUBLIC_URL + 'assets/images/giveway.png'
        }, {
            img: process.env.PUBLIC_URL + 'assets/images/giveway1.png',
            title: 'giveaway title',
            username: 'username',
            game_img: process.env.PUBLIC_URL + 'assets/images/giveway.png'
        }, {
            img: process.env.PUBLIC_URL + 'assets/images/giveway1.png',
            title: 'giveaway title',
            username: 'username',
            game_img: process.env.PUBLIC_URL + 'assets/images/giveway.png'
        }, {
            img: process.env.PUBLIC_URL + 'assets/images/giveway1.png',
            title: 'giveaway title',
            username: 'username',
            game_img: process.env.PUBLIC_URL + 'assets/images/giveway.png'
        }, {
            img: process.env.PUBLIC_URL + 'assets/images/giveway1.png',
            title: 'giveaway title',
            username: 'username',
            game_img: process.env.PUBLIC_URL + 'assets/images/giveway.png'
        },]
    }

    render() {
        return (
            <div>
                <div className="body-container container-fluid">
                    <div className="row">
                        <SideBar/>

                        <div className="col-md-11">
                            <div className="col-md-12 mar-bot30">
                                <h1 className="uppercase center" style={{fontSize: '30px', color: '#fff'}}>featured
                                    giveaways</h1>
                                {this.state.featured_giveaways.map((giveaway, index) => {
                                    return (
                                        <div key={index} className="col-lg-4 col-md-4 col-md-12">
                                            <h1 className="center uppercase">{giveaway.title}</h1>
                                            <button className={"img-button"}>
                                                <img src={server_url+giveaway.img} className="img-responsive"/>
                                            </button>
                                            <div className="center margin-top20">
                                                <button className="own-btn btn btn-blue btn-primary uppercase">Enter
                                                </button>
                                            </div>
                                        </div>

                                    )
                                })}
                                <div className="center-box padding-top20">
                                    <div className="col-md-12 col-lg-12 col-sm-12 margin-top20">
                                        <h1 className="uppercase center"
                                            style={{fontSize: '30px', color: '#fff', paddingTop: '30px'}}>other
                                            giveaways</h1>
                                        <div className="bg-black">
                                            <div className="past-winners">
                                                <ul>
                                                    {this.state.other_giveaways.map((other_giveaway, index) => {
                                                        return (
                                                            <li key={index}>
                                                                <div className="flout-left full-w-left">
                                                                    <div className="flout-left">
                                                                        <button className={"img-button"}>
                                                                            <img src={server_url + other_giveaway.img}
                                                                                 className="img-responsive"/>
                                                                        </button>
                                                                    </div>
                                                                    <div className="flout-right side-past-date">
                                                                        <h1 className="mergin0 color-white bold uppercase">{other_giveaway.title}</h1>
                                                                        <h1 className="uppercase p-t10 mergin0">{other_giveaway.title}</h1>
                                                                        <br/>
                                                                        <button
                                                                            className="own-btn btn btn-blue btn-primary uppercase">Enter
                                                                        </button>
                                                                    </div>
                                                                </div>
                                                                <div className="flout-right full-w-right">
                                                                    <button className={"img-button"}>
                                                                        <img src={server_url + other_giveaway.game_img}
                                                                             className="img-responsive"/>
                                                                    </button>
                                                                </div>
                                                            </li>

                                                        )
                                                    })}
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="clearfix"/>
                </div>
            </div>
        )
    }
}

export default GiveWay