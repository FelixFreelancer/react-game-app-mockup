import React from 'react'
import {Link} from 'react-router-dom'
import SideBar from './sidebar'
import {server_url} from "../utility";

class Category extends React.Component {
    state = {
        categories : [{
            url: '/category1/game-live',
            img: server_url+process.env.PUBLIC_URL + 'assets/images/cate-img1.png'
        },{
            url: '/category2/game-live',
            img: server_url+process.env.PUBLIC_URL + 'assets/images/cate-img2.png'
        },{
            url: '/category3/game-live',
            img: server_url+process.env.PUBLIC_URL + 'assets/images/cate-img3.png'
        },{
            url: '/category4/game-live',
            img: server_url+process.env.PUBLIC_URL + 'assets/images/cate-img4.png'
        },{
            url: '/category5/game-live',
            img: server_url+process.env.PUBLIC_URL + 'assets/images/cate-img5.png'
        },{
            url: '/category6/game-live',
            img: server_url+process.env.PUBLIC_URL + 'assets/images/cate-img6.png'
        },{
            url: '/category7/game-live',
            img: server_url+process.env.PUBLIC_URL + 'assets/images/cate-img7.png'
        },{
            url: '/category1/game-live',
            img: server_url+process.env.PUBLIC_URL + 'assets/images/cate-img1.png'
        },{
            url: '/category2/game-live',
            img: server_url+process.env.PUBLIC_URL + 'assets/images/cate-img2.png'
        },{
            url: '/category3/game-live',
            img: server_url+process.env.PUBLIC_URL + 'assets/images/cate-img3.png'
        },{
            url: '/category4/game-live',
            img: server_url+process.env.PUBLIC_URL + 'assets/images/cate-img4.png'
        }]
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