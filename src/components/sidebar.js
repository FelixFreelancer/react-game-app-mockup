import React from 'react'
import {Link} from 'react-router-dom'
import {FRONTEND_URL} from '../utility/index'
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
    LoadStreamers = () =>{
      var xhr = new XMLHttpRequest();
      var url = "http://localhost:8000/api/featured_channels/";
      xhr.open("GET", url, true);
      xhr.setRequestHeader("Content-Type", "application/json");
      xhr.setRequestHeader('Authorization', 'Token ')
      xhr.onreadystatechange = function () {
        if (xhr.readyState === 4 && xhr.status === 200) {
          //type 0 Homepage automatic type 1 is homepage/featured and type 2 is just featured
            var json = JSON.parse(xhr.responseText);
            var sidebar_icons = [];
            var type1 = [];
            var type2 = [];
            var type1live = [];
            var type2live = [];
            var live = true;
          //  console.log(json)
            for (var i = 0; i < json.length; i++) {
              var temp = json[i]
              if (temp['featureType'] === 1) {
                //console.log('testing1')
                type1.push(temp)
              }
              if (temp['featureType'] === 2) {
                //console.log('testing2')
                type2.push(temp)
              }
            }

            // TODO Call api loop thorough all users and check if they are live get thumbnail
            if (type2live != null && sidebar_icons < 7) {
              for (i = 0; i < type2.length; i++) {
                if (live) {
                  sidebar_icons.push(type2[i])
                }
              }
            }

            if (type1live != null && sidebar_icons < 7) {
              for (i = 0; i < type1.length; i++) {
                // TODO Call api loop thorough all users and check if they are live get thumbnail
                if (live) {
                  type1live.push(type1[i])
                }
              }
              for (i = 0; i < type1live.length; i++) {
                if (sidebar_icons < 7) {
                  sidebar_icons.push(type2live[i])

                }
              }
            }
            for (i = 0; i < sidebar_icons.length; i++) {
              sidebar_icons[i].url = sidebar_icons[i].twitchName
            }

            this.setState({sidebar_icons})
            //console.log(this.state)
          }
        }.bind(this);
      xhr.send();
      //console.log(this.state)
    }

    componentDidMount(){
      this.LoadStreamers()

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
                                                src= {FRONTEND_URL + process.env.PUBLIC_URL + 'assets/images/img-1.png'} className="img-responsive" />
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
