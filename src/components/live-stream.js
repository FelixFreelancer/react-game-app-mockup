import React from 'react'
import {Link } from 'react-router-dom'
import SideBar from "./sidebar";
import {server_url} from "../utility";

class LiveStream extends React.Component {

    state = {
        ads_channels : [{
            img: server_url+process.env.PUBLIC_URL + 'assets/images/img3.jpg',
            url: '/ads-channel1'
        },{
            img: server_url+process.env.PUBLIC_URL + 'assets/images/img3.jpg',
            url: '/ads-channel2'
        }],
        giveaway_header_title: 'hyperex giveaway',
        giveaway_description :  'Lorem ipsum dolor sit amet, consectetur\n' +
            '                                            adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna\n' +
            '                                            aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris\n' +
            '                                            nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in\n' +
            '                                            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla\n' +
            '                                            pariatur. ',
        game_entry: {
            game_img: server_url+process.env.PUBLIC_URL + 'assets/images/img-2.jpg',
            game_thumb: server_url+process.env.PUBLIC_URL + 'assets/images/img-4.jpg',
            game_title: 'Sleepless Elite',
            viewers: '500000',
            coins: '5600000000',
            coins_per_minute: '+55',
            live_stream_ads_img: server_url+process.env.PUBLIC_URL + 'assets/images/img3.jpg'
        },
        past_winners: [{
            img: server_url+process.env.PUBLIC_URL + 'assets/images/thumb-img.png',
            username: 'username',
            title: 'giveaway title',
            date: 'DATE'
        },
            {
                img: server_url+process.env.PUBLIC_URL + 'assets/images/thumb-img.png',
                username: 'username',
                title: 'giveaway title',
                date: 'DATE'
            },
            {
                img: server_url+process.env.PUBLIC_URL + 'assets/images/thumb-img.png',
                username: 'username',
                title: 'giveaway title',
                date: 'DATE'
            },
            {
                img: server_url+process.env.PUBLIC_URL + 'assets/images/thumb-img.png',
                username: 'username',
                title: 'giveaway title',
                date: 'DATE'
            },
            {
                img: server_url+process.env.PUBLIC_URL + 'assets/images/thumb-img.png',
                username: 'username',
                title: 'giveaway title',
                date: 'DATE'
            }
        ],
        complete_coin_title: 'Complete actions for 10,0000 bonus entries',
        complete_coin_footer: 'use loyalty coins for more entries',
        complete_coin_footer_coins: '1234',
        complete_coins: [{
            icon: 'fa fa-facebook',
            label: 'follow sleepless elite on facebook',
            box_image: server_url+process.env.PUBLIC_URL + 'assets/images/leable-icon.png',
            coin_amount: '123'
        }, {
            icon: 'fa fa-twitter',
            label: 'follow sleepless elite on facebook',
            box_image: server_url+process.env.PUBLIC_URL + 'assets/images/leable-icon.png',
            coin_amount: '123'
        }, {
            icon: 'fa fa-twitch',
            label: 'follow sleepless elite on twitch',
            box_image: server_url+process.env.PUBLIC_URL + 'assets/images/leable-icon.png',
            coin_amount: '123'
        }, {
            icon: 'fa fa-youtube-play',
            label: 'follow sleepless elite on youtube',
            box_image: server_url+process.env.PUBLIC_URL + 'assets/images/leable-icon.png',
            coin_amount: '123'
        }, {
            icon: 'fa fa-steam',
            label: 'follow sleepless elite on Steam',
            box_image: server_url+process.env.PUBLIC_URL + 'assets/images/leable-icon.png',
            coin_amount: '123'
        },],
        bonus_coins_title : 'bonus entries',
        bonus_coins_footer: 'use loyalty coins for more entries',
        bonus_coins_footer_coins: '123456789',
        bonus_coins: [{
            icon: 'fa fa-facebook',
            label: 'follow sleepless elite on facebook',
            box_image: server_url+process.env.PUBLIC_URL + 'assets/images/leable-icon.png',
            coin_amount: '123'
        }, {
            icon: 'fa fa-twitter',
            label: 'follow sleepless elite on facebook',
            box_image: server_url+process.env.PUBLIC_URL + 'assets/images/leable-icon.png',
            coin_amount: '123456'
        }, {
            icon: 'fa fa-twitch',
            label: 'follow sleepless elite on twitch',
            box_image: server_url+process.env.PUBLIC_URL + 'assets/images/leable-icon.png',
            coin_amount: '123'
        }, {
            icon: 'fa fa-youtube-play',
            label: 'follow sleepless elite on youtube',
            box_image: server_url+process.env.PUBLIC_URL + 'assets/images/leable-icon.png',
            coin_amount: '123'
        }, {
            icon: 'fa fa-steam',
            label: 'follow sleepless elite on Steam',
            box_image: server_url+process.env.PUBLIC_URL + 'assets/images/leable-icon.png',
            coin_amount: '123'
        },]
    }


    render() {

        return (
            <div>
                <div className="body-container container-fluid">
                    <div className="row">
                        <SideBar/>
                        <div className="col-md-9">
                            {
                                this.props.online_status ? <div className={"live-stream-featured-links row"}>
                                    <div className="col-md-8 bg-gray mar-bot30 gutter">
                                        <button className={"img-button"}>
                                            <img src={this.state.game_entry.game_img} alt={"game entry"}
                                                className="img-responsive"/>
                                        </button>
                                        <div className="col-md-7 col-sm-12 padding-top20">
                                            <div className="col-md-2 gutter mo-de-img">
                                                <button className={"img-button"}>
                                                <img alt={"game thumbnail"}
                                                    src={this.state.game_entry.game_thumb}
                                                    className="img-responsive m-b-30"/>
                                                </button>
                                            </div>
                                            <div className="col-md-10 uppercase font-normal">
                                                <div>
                                                    <h3 className=" border-bottom">fortnite season 8 more like fartnite
                                                        season
                                                        flatulate !sub !prime</h3>
                                                    <h2 className=" color-blue gutter">{this.state.game_entry.game_title}</h2>
                                                    <h4 className="gutter">Overwatch</h4>
                                                    <h5>viewers | {this.state.game_entry.viewers}</h5>
                                                </div>
                                            </div>
                                            <div className="clearfix"/>
                                        </div>
                                        <div className="col-md-5 col-sm-12 padding-top20">
                                            <div style={{fontSize: '16px'}}><span style={{fontSize: '20px'}}><i
                                                className="fa fa-database database" aria-hidden="true"/></span> <span
                                                className="border-yellow">{this.state.game_entry.coins}</span></div>
                                            <div className="progr padding-top20">
                                                <ul>
                                                    <li><img alt={"progress bar"}
                                                        src={server_url+process.env.PUBLIC_URL + 'assets/images/prograss-bar.png'}
                                                        className="img-responsive img-but"/></li>
                                                    <li style={{fontSize: '16px'}}><i
                                                        className="fa fa-database database"
                                                        aria-hidden="true"/></li>
                                                    <li>{this.state.game_entry.coins_per_minute}</li>
                                                </ul>
                                            </div>
                                            <div className="clearfix"/>
                                        </div>
                                    </div>
                                    <div className="col-md-4 live-stream-ads">
                                        {this.state.ads_channels.map((ads_channel, index) => {
                                            return (
                                                <Link key={index} to={ads_channel.url} >
                                                    <img alt={"ads channel"}
                                                        src={ads_channel.img}
                                                         className="img-responsive img-but"/>
                                                </Link>
                                            )
                                        })}
                                    </div>
                                </div> : <div></div>
                            }

                            <div className="col-md-12 bg-gray m-b-30">
                                <div className="col-lg-7 col-md-12 margin-top20">
                                    <h1 className="uppercase p-t-15">{this.state.giveaway_header_title}</h1>
                                    <div className="col-lg-6 col-md-6 col-sm-12">
                                        <img alt={"thumbnail"}
                                        src={server_url+process.env.PUBLIC_URL + 'assets/images/img5.png'}
                                        className="img-responsive img-but"/></div>
                                    <div className="col-lg-6 col-md-6 col-sm-12 center">
                                        <button className="own-btn btn btn-blue btn-primary uppercase">entry</button>
                                        <button className="own-btn btn btn-blue btn-primary uppercase">Time Left
                                        </button>
                                        <p className="uppercase padding-top20">{this.state.giveaway_description}</p>
                                    </div>
                                    <div className="col-md-12"><p className="center padding-top20 uppercase">{this.state.complete_coin_title}</p>
                                    </div>
                                    <div className="col-md-12 bg-black dis-inline ">
                                        <div className="hyperex padding-top20">
                                            <ul>
                                                {this.state.complete_coins.map((complete_coin, index) => {
                                                    return (
                                                        <li key={index}>
                                                            <div className="flout-left s-f">
                                                        <span>
                                                            <i className={complete_coin.icon}
                                                               aria-hidden="true"/>
                                                        </span>
                                                                {complete_coin.label}
                                                            </div>
                                                            <div className="flout-right s-f bg-gray">
                                                                <div>
                                                                    <button className={"img-button"}>
                                                                        <img alt={"box thumbnail"}
                                                                            src={complete_coin.box_image}
                                                                             className="img-responsive leable-img"/>
                                                                    </button>
                                                                    {complete_coin.coin_amount}
                                                                </div>
                                                            </div>
                                                        </li>
                                                    )
                                                })}
                                            </ul>
                                            <div className="flout-left">
                                                <p className="text-but">{this.state.complete_coin_footer}</p></div>
                                            <div className="flout-right">
                                                <div className="bot-listing">
                                                    <ul>
                                                        <li><i className="fa fa-database database" aria-hidden="true"/>
                                                        </li>
                                                        <li className="bg-gray">{this.state.complete_coin_footer_coins}</li>
                                                        <li>
                                                            <button
                                                                className="own-btn btn btn-gray btn-primary uppercase">Enter
                                                            </button>
                                                        </li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-md-12"><p className="center padding-top20 uppercase">{this.state.bonus_coins_title}</p>
                                    </div>
                                    <div className="col-md-12 bg-black dis-inline mar-bot30">
                                        <div className="hyperex padding-top20">
                                            <ul>
                                                {this.state.bonus_coins.map((bonus_coin, index) => {
                                                    return (
                                                        <li key={index}>
                                                            <div className="flout-left s-f">
                                                        <span>
                                                            <i className={bonus_coin.icon}
                                                               aria-hidden="true"/>
                                                        </span>
                                                                {bonus_coin.label}
                                                            </div>
                                                            <div className="flout-right s-f bg-gray">
                                                                <div>
                                                                    <button className={"img-button"}>
                                                                        <img alt={"box thumbnail"} src={bonus_coin.box_image}
                                                                             className="img-responsive leable-img"/>
                                                                    </button>
                                                                    {bonus_coin.coin_amount}
                                                                </div>
                                                            </div>
                                                        </li>
                                                    )
                                                })}
                                            </ul>
                                            <div className="flout-left"><p className="text-but">{this.state.bonus_coins_footer}</p></div>
                                            <div className="flout-right">
                                                <div className="bot-listing">
                                                    <ul>
                                                        <li><i className="fa fa-database database" aria-hidden="true"/>
                                                        </li>
                                                        <li className="bg-gray">{this.state.bonus_coins_footer_coins}</li>
                                                        <li>
                                                            <button
                                                                className="own-btn btn btn-gray btn-primary uppercase">Enter
                                                            </button>
                                                        </li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-5 col-md-12 col-sm-12 margin-top20 p-b20">
                                    <h1 className="uppercase center">past winners</h1>
                                    <div className="bg-black">
                                        <div className="past-winners">
                                            <ul>
                                                {this.state.past_winners.map((past_winner, index) => {
                                                    return (
                                                        <li key={index}>
                                                            <div className="flout-left">
                                                                <div className="flout-left">
                                                                    <img alt={"past winner"}
                                                                        src={past_winner.img}
                                                                         className="img-responsive"/>
                                                                </div>
                                                                <div className="flout-right side-past-date">
                                                                    <h2 className="color-blue uppercase">{past_winner.username}</h2>
                                                                    <h4 className="uppercase">{past_winner.title}</h4>
                                                                </div>
                                                            </div>
                                                            <div
                                                                className="flout-right padding-top20">{past_winner.date}</div>
                                                        </li>
                                                    )
                                                })}

                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className={"col-md-2 " + (this.props.online_status ? '' : 'bg-gray')}>
                            <div className="">
                                {
                                    this.props.online_status ?
                                        <div>
                                            <div className="chat-bg">
                                                <img alt={"chat bg"}
                                                    src={server_url+process.env.PUBLIC_URL + 'assets/images/chat-bg.png'}
                                                     className="img-responsive img-but"/>
                                            </div>
                                            <div className="clearfix"/>
                                        </div>
                                        :
                                        <div>
                                            <img alt={"background"}
                                                src={server_url+process.env.PUBLIC_URL + 'assets/images/img5.png'}
                                                 className="img-responsive img-but padding-top20 p-b20"/>
                                            <img alt={"background"}
                                                 src={server_url+process.env.PUBLIC_URL + 'assets/images/img5.png'}
                                                 className="img-responsive img-but p-b20"/>
                                        </div>
                                }
                            </div>
                        </div>
                    </div>
                    <div className="clearfix"/>
                </div>
            </div>
        )
    }
}

export default LiveStream