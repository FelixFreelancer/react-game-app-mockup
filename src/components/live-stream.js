import React from 'react'
import {Link} from 'react-router-dom'
import SideBar from "./sidebar";
import {FRONTEND_URL} from "../utility";


class LiveStream extends React.Component {
	constructor(props) {
		super(props)
		this.state = {
			online_status: true,
			giveaway_entries_staus: true,
			past_winner_status: true,
			giveaway_entries: [],
			giveaway_credits: '',
			progress_value: 0,
			timerID: '',
			progress_timerId: '',
			ads_channels: [
				{
				img: FRONTEND_URL + process.env.PUBLIC_URL + 'assets/images/img3.jpg',
				url: '/ads-channel1'
			}, {
				img: FRONTEND_URL + process.env.PUBLIC_URL + 'assets/images/img3.jpg',
				url: '/ads-channel2'
			}],
			giveaway_header_title: '',
			giveaway_description: '',
			game_entry: {
				game_img: FRONTEND_URL + process.env.PUBLIC_URL + 'assets/images/img-2.jpg',
				game_thumb: FRONTEND_URL + process.env.PUBLIC_URL + 'assets/images/img-4.jpg',
				game_title: 'Sleepless Elite',
				viewers: '0',
				coins: 0,
				coins_per_minute: '+20',
				live_stream_ads_img: FRONTEND_URL + process.env.PUBLIC_URL + 'assets/images/img3.jpg'
			},
			past_winners: [
				{
				img: FRONTEND_URL + process.env.PUBLIC_URL + 'assets/images/thumb-img.png',
				username: 'username',
				title: 'giveaway title',
				date: 'DATE'
			},
				{
					img: FRONTEND_URL + process.env.PUBLIC_URL + 'assets/images/thumb-img.png',
					username: 'username',
					title: 'giveaway title',
					date: 'DATE'
				},
				{
					img: FRONTEND_URL + process.env.PUBLIC_URL + 'assets/images/thumb-img.png',
					username: 'username',
					title: 'giveaway title',
					date: 'DATE'
				},
				{
					img: FRONTEND_URL + process.env.PUBLIC_URL + 'assets/images/thumb-img.png',
					username: 'username',
					title: 'giveaway title',
					date: 'DATE'
				},
				{
					img: FRONTEND_URL + process.env.PUBLIC_URL + 'assets/images/thumb-img.png',
					username: 'username',
					title: 'giveaway title',
					date: 'DATE'
				}
			],
			complete_coin_title: 'Complete actions for 10,0000 bonus entries',
			complete_coin_footer: 'use loyalty coins for more entries',
			complete_coin_footer_coins: '1234',
			complete_coins: [
				{
				icon: 'fa fa-facebook',
				label: 'follow sleepless elite on facebook',
				box_image: FRONTEND_URL + process.env.PUBLIC_URL + 'assets/images/leable-icon.png',
				coin_amount: '123'
			}, {
				icon: 'fa fa-twitter',
				label: 'follow sleepless elite on facebook',
				box_image: FRONTEND_URL + process.env.PUBLIC_URL + 'assets/images/leable-icon.png',
				coin_amount: '123'
			}, {
				icon: 'fa fa-twitch',
				label: 'follow sleepless elite on twitch',
				box_image: FRONTEND_URL + process.env.PUBLIC_URL + 'assets/images/leable-icon.png',
				coin_amount: '123'
			}, {
				icon: 'fa fa-youtube-play',
				label: 'follow sleepless elite on youtube',
				box_image: FRONTEND_URL + process.env.PUBLIC_URL + 'assets/images/leable-icon.png',
				coin_amount: '123'
			}, {
				icon: 'fa fa-steam',
				label: 'follow sleepless elite on Steam',
				box_image: FRONTEND_URL + process.env.PUBLIC_URL + 'assets/images/leable-icon.png',
				coin_amount: '123'
			},],
			bonus_coins_title: 'bonus entries',
			bonus_coins_footer: 'use loyalty coins for more entries',
			bonus_coins_footer_coins: '123456789',
			bonus_coins: [
				{
				icon: 'fa fa-facebook',
				label: 'follow sleepless elite on facebook',
				box_image: FRONTEND_URL + process.env.PUBLIC_URL + 'assets/images/leable-icon.png',
				coin_amount: '123'
			}, {
				icon: 'fa fa-twitter',
				label: 'follow sleepless elite on facebook',
				box_image: FRONTEND_URL + process.env.PUBLIC_URL + 'assets/images/leable-icon.png',
				coin_amount: '123456'
			}, {
				icon: 'fa fa-twitch',
				label: 'follow sleepless elite on twitch',
				box_image: FRONTEND_URL + process.env.PUBLIC_URL + 'assets/images/leable-icon.png',
				coin_amount: '123'
			}, {
				icon: 'fa fa-youtube-play',
				label: 'follow sleepless elite on youtube',
				box_image: FRONTEND_URL + process.env.PUBLIC_URL + 'assets/images/leable-icon.png',
				coin_amount: '123'
			}, {
				icon: 'fa fa-steam',
				label: 'follow sleepless elite on Steam',
				box_image: FRONTEND_URL + process.env.PUBLIC_URL + 'assets/images/leable-icon.png',
				coin_amount: '123'
			},]
		}
	}
	
	
	LoadGiveway = () => {
		var temp = []
		var icon = []
		var usernames = []
		var label = []
		var xhr = new XMLHttpRequest();
		var url = "http://localhost:8000/api/usergiveaway/";
		xhr.open("GET", url, true);
		xhr.setRequestHeader("Content-Type", "application/json");
		xhr.setRequestHeader('Authorization', 'Token c66f90d87d38eab260ae17db215294b289afcf45')
		xhr.onreadystatechange = function () {
			if (xhr.readyState === 4 && xhr.status === 200) {
				var json = JSON.parse(xhr.responseText);
				json = json[0]
				//console.log(json)
				var entries = json['entries'].split(',')
				for (var i = 0; i < entries.length - 1; i++) {
					//usernames.push(entries[i].split(' ').splice(-1))
					temp.push(entries[i].split('/'))
				}
				var entries = []
				for (var i = 0; i < temp.length; i++) {
					const entry = {
						icon: temp[i][0],
						label: temp[i][1],
						box_image: FRONTEND_URL + process.env.PUBLIC_URL + 'assets/images/leable-icon.png',
						coin_amount: '123',
						username: temp[i][2]
					}
					entries.push(entry)
				}
				this.setState({giveaway_entries: entries})
				this.setState({giveaway_header_title: json['title']})
				this.setState({giveaway_description: json['description']})
			}else {
				
				this.setState({
					online_status: !this.state.online_status
				})
			}
		}.bind(this)
		xhr.send();
	}
	increasegold = () => {
		// TODO
		var data = Object.assign({}, this.state.game_entry)
		data.coins += 20
		this.setState({
			game_entry: data
		})
	}
	increaseGoldProgress = () => {
		const limit_progress_value = this.state.progress_value
		if (limit_progress_value >= 100){
			this.setState({
				progress_value: 0
			})
		}else {
			
			this.setState({
				progress_value: limit_progress_value+10
			})
		}
	}
	LoadProfile = () => {
		//TODO Load Image from AWS
		var temp = ''
		var lcoins = []
		var xhr = new XMLHttpRequest();
		var url = "http://localhost:8000/api/profile/";
		xhr.open("GET", url, true);
		xhr.setRequestHeader("Content-Type", "application/json");
		xhr.setRequestHeader('Authorization', 'Token c66f90d87d38eab260ae17db215294b289afcf45')
		xhr.onreadystatechange = function () {
			if (xhr.readyState === 4 && xhr.status === 200) {
				var json = JSON.parse(xhr.responseText);
				var json = json[0]
				let data = Object.assign({}, this.state.game_entry);
				lcoins = json['loyalty_coins'].split(',')
				for (var i = 0; i < lcoins.length - 1; i++) {
					temp = lcoins[i].split('=')
					
					// TODO get username of streamer
					if (temp[0] === 'j') {
						data.coins = temp[1]
						break
					} else {
						data.coins = 0
					}
				}
				console.log(data)
				
				this.setState({game_entry: data})
			}
		}.bind(this);
		xhr.send();
		//console.log(this.state)
	}
	setTimer = () => {
		// TODO check if stream is live and if live set timer if not do not set timer
		this.timerID = setInterval(
			() => this.increasegold(),
			10000
		);
	}
	
	setProgressTimer = () => {
		 setInterval(
			() =>{
				if (this.state.progress_value >= 100) {
					this.setState({
						progress_value: 0
					})
				}
				this.increaseGoldProgress()
			},
			1000
		)
	}
	componentDidMount() {
		// TODO Load two ads make an array of objects with the url and img.
		// TODO Call API to get stream name, username, game, title, get viewers from google analyics, set srcurl with username for both chat and video
		// TODO Call API to get users coins and entries on current active giveaway.
		// TODO Load giveaway img, total entires, time left/time to end of giveaway, description, all entries and tokens earned per entry
		// TODO Load all past giveaway winners
		this.LoadGiveway()
		this.LoadProfile()
		this.setTimer()
		this.setProgressTimer()
	}
	
	componentWillUnmount() {
		clearInterval(this.timerID);
		clearInterval(this.progress_timerId);
		
	}
	
	followTwitchAPI = () => {
		var xhr = new XMLHttpRequest();
		var url = "https://api.twitch.tv/helix/users/follows?to_id=23161357";
		xhr.open("GET", url, true);
		xhr.setRequestHeader("Client-ID", "i6ap8cz07np4bw33oeri8at8yzodxv");
		xhr.setRequestHeader("Accept", "application/vnd.twitchtv.v5+json");
		xhr.onreadystatechange = () => {
			if (xhr.readyState === 4 && xhr.status === 200 || xhr.status === 400) {
				var json = JSON.parse(xhr.responseText);
				console.log(json)
			}
		};
		xhr.send();
	}
	twitchUserAPI = () => {
		var xhr = new XMLHttpRequest();
		var url = "https://api.twitch.tv/helix/users?login=sleeplesselitetv";
		xhr.open("GET", url, true);
		xhr.setRequestHeader("Client-ID", "i6ap8cz07np4bw33oeri8at8yzodxv");
		xhr.setRequestHeader("Accept", "application/vnd.twitchtv.v5+json");
		xhr.onreadystatechange = () => {
			if (xhr.readyState === 4 && xhr.status === 200 || xhr.status === 400) {
				var json = JSON.parse(xhr.responseText);
				console.log(json)
			}
		};
		xhr.send();
	}
	testingAPIs = () => {
		var xhr = new XMLHttpRequest();
		var url = "http://localhost:8000/api/test/";
		xhr.open("GET", url, true);
		xhr.setRequestHeader("Content-Type", "application/json");
		xhr.setRequestHeader('Authorization', 'Token c66f90d87d38eab260ae17db215294b289afcf45')
		xhr.onreadystatechange = () => {
			if (xhr.readyState === 4 && xhr.status === 200 || xhr.status === 400) {
				var json = JSON.parse(xhr.responseText);
				console.log(json)
			}
		};
		xhr.send();
	}
	
	render() {
		
		return (
			<div>
				<div className="body-container container-fluid">
					<div className="row">
						<SideBar/>
						<div className="col-md-9">
							{
								this.state.online_status ? <div className={"live-stream-featured-links row"}>
									<div className="col-md-8 bg-gray mar-bot30 gutter">
										<div className="embed-responsive embed-responsive-16by9">
											<iframe id="video" className="embed-responsive-item"
											        src="https://player.twitch.tv/?channel=sleeplesselitetv"></iframe>
										</div>
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
													<li>
														<div className="progress">
															<div className="progress-bar" role="progressbar" style={{width: this.state.progress_value+'%'}} />
														</div>
													</li>
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
												<Link key={index} to={ads_channel.url}>
													<img alt={"ads channel"}
													     src={ads_channel.img}
													     className="img-responsive img-but"/>
												</Link>
											)
										})}
									</div>
								</div> : <div></div>
							}
							
							<div className="  m-b-30" style={{display: 'flex', position: 'relative'}}>
								{
									this.state.giveaway_entries_staus ?
										<div className="col-lg-7 col-md-12  bg-gray p-t20">
											<h1 className="uppercase p-t-15">{this.state.giveaway_header_title}</h1>
											<div className="col-lg-6 col-md-6 col-sm-12">
												<img alt={"thumbnail"}
												     src={FRONTEND_URL + process.env.PUBLIC_URL + 'assets/images/img5.png'}
												     className="img-responsive img-but"/></div>
											<div className="col-lg-6 col-md-6 col-sm-12 center">
												<button className="own-btn btn btn-blue btn-primary uppercase">entry</button>
												<button className="own-btn btn btn-blue btn-primary uppercase">Time Left
												</button>
												<p className="uppercase padding-top20">{this.state.giveaway_description}</p>
											</div>
											<div className="col-md-12"><p
												className="center padding-top20 uppercase">{this.state.complete_coin_title}</p>
											</div>
											<div className="col-md-12 bg-black dis-inline ">
												<div className="hyperex padding-top20">
													<ul>
														{this.state.giveaway_entries.map((complete_coin, index) => {
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
																		className="own-btn btn btn-gray btn-primary uppercase"
																		onClick={this.testingAPIs}>Enter
																	
																	</button>
																</li>
															</ul>
														</div>
													</div>
												</div>
											</div>
											<div className="col-md-12"><p
												className="center padding-top20 uppercase">{this.state.bonus_coins_title}</p>
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
																				<img alt={"box thumbnail"}
																				     src={bonus_coin.box_image}
																				     className="img-responsive leable-img"/>
																			</button>
																			{bonus_coin.coin_amount}
																		</div>
																	</div>
																</li>
															)
														})}
													</ul>
													<div className="flout-left"><p
														className="text-but">{this.state.bonus_coins_footer}</p></div>
													<div className="flout-right">
														<div className="bot-listing">
															<ul>
																<li><i className="fa fa-database database" aria-hidden="true"/>
																</li>
																<li className="bg-gray">{this.state.bonus_coins_footer_coins}</li>
																<li>
																	<button
																		className="own-btn btn btn-gray btn-primary uppercase"
																		onClick={this.gettestingAPIs}>Enter
																	</button>
																</li>
															</ul>
														</div>
													</div>
												</div>
											</div>
										</div> :
										''
								}
							
								{
									this.state.past_winner_status ?
										<div className="col-lg-5 col-md-12 col-sm-12 bg-gray p-b20 p-t20">
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
										</div> :
										''
								}
								
							</div>
						</div>
						<div className={"col-md-2 " + (this.state.online_status ? '' : 'bg-gray')}>
							<div className="">
								{
									this.state.online_status ?
										<div>
											<div className="chat-bg">
												<img alt={"chat bg"}
												     src={FRONTEND_URL + process.env.PUBLIC_URL + 'assets/images/chat-bg.png'}
												     className="img-responsive img-but"/>
											</div>
											<div className="clearfix"/>
										</div>
										:
										<div>
											<img alt={"background"}
											     src={FRONTEND_URL + process.env.PUBLIC_URL + 'assets/images/img5.png'}
											     className="img-responsive img-but padding-top20 p-b20"/>
											<img alt={"background"}
											     src={FRONTEND_URL + process.env.PUBLIC_URL + 'assets/images/img5.png'}
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
