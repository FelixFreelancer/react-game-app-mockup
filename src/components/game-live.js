import React from 'react'
import SideBar from "./sidebar";
import { Link } from 'react-router-dom'
import {server_url} from "../utility";

class GameLive extends React.Component {
    state = {
        game_category: {
            img: server_url+process.env.PUBLIC_URL + 'assets/images/cate-img1.png',
            game_title: 'counter-Strike',
            game_region: 'Global Offensive'
        },
        stream_entries: [{
            url: '/user1/live-stream',
            main_img: server_url+process.env.PUBLIC_URL + 'assets/images/video.png',
            user_img: server_url+process.env.PUBLIC_URL + 'assets/images/thumb-img1.png',
            stream_title: 'stream title',
            user_name: 'User name'
        },{
            url: '/user2/live-stream',
            main_img: server_url+process.env.PUBLIC_URL + 'assets/images/video.png',
            user_img: server_url+process.env.PUBLIC_URL + 'assets/images/thumb-img1.png',
            stream_title: 'stream title',
            user_name: 'User name'
        },{
            url: '/user3/live-stream',
            main_img: server_url+process.env.PUBLIC_URL + 'assets/images/video.png',
            user_img: server_url+process.env.PUBLIC_URL + 'assets/images/thumb-img1.png',
            stream_title: 'stream title',
            user_name: 'User name'
        },{
            url: '/user4/live-stream',
            main_img: server_url+process.env.PUBLIC_URL + 'assets/images/video.png',
            user_img: server_url+process.env.PUBLIC_URL + 'assets/images/thumb-img1.png',
            stream_title: 'stream title',
            user_name: 'User name'
        },{
            url: '/user5/live-stream',
            main_img: server_url+process.env.PUBLIC_URL + 'assets/images/video.png',
            user_img: server_url+process.env.PUBLIC_URL + 'assets/images/thumb-img1.png',
            stream_title: 'stream title',
            user_name: 'User name'
        },{
            url: '/user6/live-stream',
            main_img: server_url+process.env.PUBLIC_URL + 'assets/images/video.png',
            user_img: server_url+process.env.PUBLIC_URL + 'assets/images/thumb-img1.png',
            stream_title: 'stream title',
            user_name: 'User name'
        },{
            url: '/user7/live-stream',
            main_img: server_url+process.env.PUBLIC_URL + 'assets/images/video.png',
            user_img: server_url+process.env.PUBLIC_URL + 'assets/images/thumb-img1.png',
            stream_title: 'stream title',
            user_name: 'User name'
        },{
            url: '/user8/live-stream',
            main_img: server_url+process.env.PUBLIC_URL + 'assets/images/video.png',
            user_img: server_url+process.env.PUBLIC_URL + 'assets/images/thumb-img1.png',
            stream_title: 'stream title',
            user_name: 'User name'
        },]
    }

    render() {
        return (
            <div>
                <div className="body-container container-fluid">
                    <div className="row">
                        <SideBar/>
                        <div className="col-md-11">
                            <div>
                                <div className="width-50 flout-left">
                                    <div className="flout-left">
                                        <button className={"img-button"}>
                                            <img src={this.state.game_category.img} className="img-responsive img-but"/>
                                        </button>
                                    </div>
                                    <div className="stream-headline">
                                        <h1 className="uppercase"
                                            style={{fontSize: '20px', color: '#fff', margin: 0, padding: 0}}>
                                            {this.state.game_category.game_title} : {this.state.game_category.game_region}</h1>
                                    </div>
                                </div>
                                <div className="width-50 flout-right">
                                    <div className="side-cate-head">
                                        <h1 className="uppercase">categories</h1>
                                    </div>
                                </div>
                            </div>
                            <div className="clearfix"/>
                            <hr/>
                            <div className="category-listing2">
                                <ul>
                                    {this.state.stream_entries.map((stream_entry, index) => {
                                        return (
                                            <li key={index}>
                                                <Link to={stream_entry.url}>
                                                    <img src={stream_entry.main_img}
                                                         className="img-responsive img-but"/>
                                                </Link>
                                                <div>
                                                    <div className="flout-left m-r-20">
                                                        <img src={stream_entry.user_img}
                                                             className="img-responsive img-but"/>
                                                    </div>
                                                    <div>
                                                        <h3>{stream_entry.stream_title}</h3>
                                                        <h1>{stream_entry.user_name}</h1>
                                                    </div>
                                                </div>
                                            </li>
                                        )
                                    })}

                                </ul>
                            </div>
                            <div className="footer-top-gap"/>
                        </div>
                        <div className="clearfix"/>
                    </div>
                </div>
            </div>
        )
    }
}

export default GameLive