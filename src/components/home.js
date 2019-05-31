import React from 'react'
import {Link} from 'react-router-dom'


class Home extends React.Component {
    state = {
        stream_url: '/twitch_url',
        user_name: 'sleeplesselitetv',
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
            var type0 = new Array();
            var type1 = new Array();
            var type2 = new Array();
            var type0live = new Array();
            var type1live = new Array();
            var type2live = new Array();
            //console.log(json)
            for (var i = 0; i < json.length; i++) {
              var temp = json[i]
              if (temp['featureType'] == 0) {
                //console.log('testing0')
                type0.push(temp)
              }
              if (temp['featureType'] == 1) {
                //console.log('testing1')
                type1.push(temp)
              }
              if (temp['featureType'] == 2) {
                //console.log('testing2')
                type2.push(temp)
              }
            }
            if (type0 != null) {
              // TODO Check webhooks if they are live if they are live run this
              var live = false
              if (live){
                this.setState({user_name:type0[0].twitchName})
                this.setState({stream_url:'/' + type0[0].twitchName})
              }
                else {
                // TODO Check type1 to see if of those users are live and randomly select a user for homepage
                // TODO make a list of live users

              }
            }

            if (type1 != null){
              // TODO Call twitch API to get who is live.
              // TODO Randomly select somebody for homepage if type0 is not live and 5 other featured_channels if 6 are live
              var favorite = type1[Math.floor(Math.random() * type2.length)];
            }

            if (type2 != null) {
              // TODO if featured_channels state list does not have 5 randomly select streamers that are live
              // TODO call api where the webhook data is and randomly select users to fullfil the 5 boxes.
            }

            //let data = Object.assign({}, this.state.social_connections);
            //data[0].username = json['steam']
            //this.setState({data})
          }
        }.bind(this);
      xhr.send();
      //console.log(this.state)
    }

    LoadAdSense = () => {
      // TODO Load adsense ads
    }

    LoadGiveaways = () => {
      // TODO Load giveaways for the 4 featured locations on bottom of page
      var xhr = new XMLHttpRequest();
      var url = "http://localhost:8000/api/featured_giveaways/";
      xhr.open("GET", url, true);
      xhr.setRequestHeader("Content-Type", "application/json");
      xhr.setRequestHeader('Authorization', 'Token ')
      xhr.onreadystatechange = function () {
        if (xhr.readyState === 4 && xhr.status === 200) {
            var json = JSON.parse(xhr.responseText);
            var json = JSON.parse(xhr.responseText);
            var type0 = new Array();
            var type1 = new Array();
            var data = new Array();
            console.log('tesing json',json)
            for (var i = 0; i < json.length; i++) {
              var temp = json[i]
              if (temp['featureType'] == 0) {
                if (data.length < 4) {
                  data.push(temp)
                }
                // console.log('testing0')
                // type0.push(temp)
              }
              if (temp['featureType'] == 1) {
                type1.push(temp)
              }
            }
            if (data.length < 4) {
              for (var i = 0; i < type1.length; i++) {
                if (data.length <4) {
                  data.push(type1[Math.floor(Math.random() * type1.length)])

                }
              }

              }
          }
        }.bind(this)
      xhr.send();
    }


    componentDidMount(){
      //TODO Load two ads make an array of objects with the url and img.
      //TODO Load five featured channels make an array of objects with the url and img.
      // TODO Load the featured frontpage streamer twitch username and url
      // TODO Load google adsense
      // TODO Load 4 featured giveways make an array of objects with the url and img.
      this.LoadStreamers()
      this.LoadGiveaways()
      //this.LoadAds()
      this.LoadAdSense()

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
                                <div className="embed-responsive embed-responsive-16by9">
                                  <iframe className="embed-responsive-item"src="https://player.twitch.tv/?channel=sleeplesselitetv"></iframe>
                                </div>

                                  <button className={ "front"}>
                                       </button>
                                </Link>
                                </div>
                            </div>
                            <div className="col-lg-7 col-md-7 col-sm-12">
                                {this.state.ads_channels.map((ads_channel, index) => {
                                    return (
                                        <div key={index} className="col-lg-6 col-md-6 col-sm-12">
                                            <Link to={ads_channel.url}>
                                                <img alt={"ads channel"} src={ads_channel.img}
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
                                                <img alt={"featured channel"}
                                                    src={featured_channel.img} className="img-responsive img-but"/>
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
                                    <img alt={"background"}
                                        src={process.env.PUBLIC_URL + 'assets/images/img.png'}
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
                                        <img alt={"browse giveaway"}
                                            src={browse_giveaway.img}
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
