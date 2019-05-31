import React, {Component} from 'react';
import { Route, BrowserRouter as Router, Switch } from 'react-router-dom'
import Category from './components/category'
import FooterNav from './components/footer-nav'
import GameLive from './components/game-live'
import Giveaway from './components/giveaway'
import HeaderNav from './components/header-nav'
import Home from './components/home'
import LiveStream from './components/live-stream'
import UserSettings from './components/user-settings'
import NotFound from './components/not-found'
import './App.css';

class App extends Component {
    constructor(props) {
        super(props)
        this.state = {
            online_status: true,
            username: '',
            logged_in: false
        }
    }
    
    onChange = () => {
        this.setState({
            online_status: !this.state.online_status
        })
    }
    

    render() {
        
        return (
            <Router>
                <div>
                    <HeaderNav onClick = {this.onChange} online_status = {this.state.online_status} />
                        <Switch>
                            
                            <Route exact  path="/" component={Home} />
                            <Route path={"/user:id/category"} component={Category} />
                            <Route path={"/category"} component={Category} />
                            <Route path={"/games/:gamename"} component={GameLive} />
                            <Route path={"/game-live"} component={GameLive} />
                            <Route path={"/user:id/giveway"} component={Giveaway} />
                            <Route path="/category" component={Category} />
                            <Route path="/giveaway" component={Giveaway} />
                            <Route path={'/live-stream'}
                                   render = {() => <LiveStream online_status={this.state.online_status} />} />
                            <Route path={'/live-stream/:username'}
                                   render = {() => <LiveStream online_status={this.state.online_status} />} />
                            <Route path="/user-settings/:username" component={UserSettings} />
                            <Route component={NotFound} />
                        </Switch>
                    <FooterNav />
                </div>
            </Router>
        );
    }
}

export default (App)
