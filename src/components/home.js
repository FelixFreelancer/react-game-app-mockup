import React from 'react'
import {Link} from 'react-router-dom'


class Home extends React.Component {
    state = {
        stream_url: '/twitch_url',
        ads_channels: [{
            img: process.env.PUBLIC_URL + 'assets/images/img.png',
            url: '/user1/giveway'
        },{
            img: process.env.PUBLIC_URL + 'assets/images/img.png',
            url: '/user2/giveway'
        }],
        featured_channels: [{
            url: '/user1/category',
            img: process.env.PUBLIC_URL + 'assets/images/img.png'
            },
            {
                url: '/user2/category',
                img: process.env.PUBLIC_URL + 'assets/images/img.png'
            },
            {
                url: '/user3/category',
                img: process.env.PUBLIC_URL + 'assets/images/img.png'
            },
            {
                url: '/user4/category',
                img: process.env.PUBLIC_URL + 'assets/images/img.png'
            },
            {
                url: '/user5/category',
                img: process.env.PUBLIC_URL + 'assets/images/img.png'
            }
        ],
        browse_giveaways: [{
            url: '/user1/giveway',
            img: process.env.PUBLIC_URL + 'assets/images/img.png'
        },{
            url: '/user1/giveway',
            img: process.env.PUBLIC_URL + 'assets/images/img.png'
        },{
            url: '/user1/giveway',
            img: process.env.PUBLIC_URL + 'assets/images/img.png'
        },{
            url: '/user1/giveway',
            img: process.env.PUBLIC_URL + 'assets/images/img.png'
        }]
    }

    render() {
        return (
            <div>
                <div className="body-container container-fluid">
                    <div id="gap">
                        <div className="row">
                            <div className="col-lg-5 col-md-5 col-sm-12">
                                <div className="col-md-12">
                                    <Link to={this.state.stream_url}>
                                        <img src={process.env.PUBLIC_URL + 'assets/images/img.png'}
                                             className="home-first-row img-responsive img-but"/>
                                    </Link>
                                </div>
                            </div>
                            <div className="col-lg-7 col-md-7 col-sm-12">
                                {this.state.ads_channels.map((ads_channel, index) => {
                                    return (
                                        <div key={index} className="col-lg-6 col-md-6 col-sm-12">
                                            <Link to={ads_channel.url}>
                                                <img src={ads_channel.img}
                                                     className="home-first-row img-responsive img-but "/>
                                            </Link>
                                        </div>
                                    )
                                })}
                            </div>
                        </div>
                    </div>
                </div>
                <div className="container-fluid">
                    <div className="row">
                        <h1 className="center">Featured Channels</h1>
                        <div className="featured-channels">
                            <ul className={"featured-channels-image"}>
                                {this.state.featured_channels.map((featured_channel, key) => {
                                    return (
                                        <li key={key}>
                                            <Link to={featured_channel.url}>
                                                <img src={featured_channel.img} className="img-responsive img-but"/>
                                            </Link>
                                        </li>
                                    )
                                })}
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="container-fluid">
                    <div className="row">
                        <div className="browse-channels">
                            <div className="col-md-12">
                                <Link to={"/category"}>
                                    <h1>Browse Channels</h1>
                                </Link>
                                <div className={"browse-channel-img"}>
                                    <button className={"img-button featured-giveway-imgBtn"}>
                                    <img src={process.env.PUBLIC_URL + 'assets/images/img.png'}
                                         className="img-responsive img-but"/>
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="container-fluid">
                    <div className="row" id="gap">
                        <div className="featured-giveaways col-md-12">
                            <h1 className="center">Featured Giveaways</h1>
                            {this.state.browse_giveaways.map((browse_giveaway, index) => {
                                return (
                                    <div key={index} className="col-lg-3 col-md-3 col-sm-12">
                                        <Link to={browse_giveaway.url}>
                                        <img src={browse_giveaway.img}
                                        className="img-responsive img-but"/>
                                        </Link>
                                    </div>
                                )
                            })}

                        </div>
                        <Link to={"/giveway"}>
                        <h1 className="browse-giveaway-letter">Browse Giveaways</h1>
                        </Link>
                    </div>
                </div>
            </div>
        )
    }
}

export default Home