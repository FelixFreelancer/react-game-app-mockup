import React from 'react'
import {Link} from 'react-router-dom'
import {server_url} from '../utility/index'
class SideBar extends React.Component {
    state = {
        sidebar_icons: [{
            img: process.env.PUBLIC_URL + 'assets/images/img-1.png',
            url: '/sidebar_link'
        }, {
            img: process.env.PUBLIC_URL + 'assets/images/img-1.png',
            url: '/sidebar_link'
        }, {
            img: process.env.PUBLIC_URL + 'assets/images/img-1.png',
            url: '/sidebar_link'
        }, {
            img: process.env.PUBLIC_URL + 'assets/images/img-1.png',
            url: '/sidebar_link'
        }, {
            img: process.env.PUBLIC_URL + 'assets/images/img-1.png',
            url: '/sidebar_link'
        },]
    }
    render() {
        return (

                <div className="col-md-1 hide-side-bar">
                    <div className="live-stream">
                        <ul>
                            {this.state.sidebar_icons.map((sidebar_icon, index) => {
                                return (
                                    <li key={index}>
                                        <Link to={sidebar_icon.url}>
                                            <img alt={"side thumbnail"}
                                                src= {server_url + process.env.PUBLIC_URL + 'assets/images/img-1.png'} className="img-responsive" />
                                        </Link>
                                    </li>
                                )
                            } )}
                        </ul>
                    </div>
                </div>
        )
    }
}

export default SideBar