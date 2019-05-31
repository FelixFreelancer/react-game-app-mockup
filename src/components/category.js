import React from 'react'
import {Link} from 'react-router-dom'
import SideBar from './sidebar'
import {FRONTEND_URL} from "../utility";

class Category extends React.Component {
    state = {
        categories : [{
            url: '/games/cs',
            img: FRONTEND_URL+process.env.PUBLIC_URL + 'assets/images/cate-img1.png'
        },{
            url: '/games/pes',
            img: FRONTEND_URL+process.env.PUBLIC_URL + 'assets/images/cate-img2.png'
        },{
            url: '/games/konami',
            img: FRONTEND_URL+process.env.PUBLIC_URL + 'assets/images/cate-img3.png'
        },{
            url: '/games/porker',
            img: FRONTEND_URL+process.env.PUBLIC_URL + 'assets/images/cate-img4.png'
        },{
            url: '/games/call-of-duty',
            img: FRONTEND_URL+process.env.PUBLIC_URL + 'assets/images/cate-img5.png'
        },{
            url: '/games/farmer',
            img: FRONTEND_URL+process.env.PUBLIC_URL + 'assets/images/cate-img6.png'
        },{
            url: '/games/dota1',
            img: FRONTEND_URL+process.env.PUBLIC_URL + 'assets/images/cate-img7.png'
        },{
            url: '/games/starcraft',
            img: FRONTEND_URL+process.env.PUBLIC_URL + 'assets/images/cate-img1.png'
        },{
            url: '/games/apex',
            img: FRONTEND_URL+process.env.PUBLIC_URL + 'assets/images/cate-img2.png'
        }]
    }
    componentDidMount(){
          //TODO Call my API to get all live users. Loop through all current live stream data for games. Make a list of current games being streamed
          // TODO call twitch API for game name and thumbnail image. Make an array of objects for game name, id, img. https://dev.twitch.tv/docs/api/reference/#get-games
        }
    render() {
        return (
            <div>
                <div className="body-container container-fluid">
                    <div className="row">

                        <SideBar />

                        <div className="col-md-11">
                            <h1 className="uppercase" style={{fontSize: '30px', color: '#fff', margin: 0, padding: 0}}>categories</h1>
                            <hr />
                            <div className="category-listing">
                                <ul>
                                    {this.state.categories.map((category, index) => {
                                        return (
                                            <li key={index}>
                                                <Link to={category.url}>
                                                    <img alt={"category thumb"}
                                                        src={category.img} className="img-responsive img-but" />
                                                </Link>
                                            </li>

                                        )
                                    })}
                                </ul>
                            </div>
                            <div className="footer-top-gap" />
                        </div>
                    </div>
                    <div className="clearfix" />
                </div>
            </div>
        )
    }
}
export default Category
