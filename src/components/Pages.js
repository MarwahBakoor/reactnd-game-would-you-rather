import React, {Component } from "react";
import { Route } from 'react-router-dom'
import Nav from './Nav'
import Home from './Home'
import NewQuestion from "./NewQuestion"
import LeaderBoard  from "./LeaderBoard"
import PollPage from "./PollPage";

class Pages extends Component {
    render() {
        return(
            <div>
                <Nav />
                <Route path = '/' exact singin={this.props.signin} component={Home} />
                <Route path = '/add' singin={this.props.signin} component={NewQuestion}/>
                <Route path = '/leaderboard' singin={this.props.signin} component={LeaderBoard}/>
                <Route path = '/questions/:id' singin={this.props.signin} component={PollPage}/>
            </div>
        )
    }
}



export default Pages 