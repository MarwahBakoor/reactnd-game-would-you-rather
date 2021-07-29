import React, {Component } from "react";
import { Route } from 'react-router-dom'
import Nav from './Nav'
import Home from './Home'
import NewQuestion from "./NewQuestion"
import LeaderBoard  from "./LeaderBoard"
import PollResultsPage from "./PollResultsPage";

class Pages extends Component {
    render() {
        return(
            <div>
                <Nav />
                <Route path = '/' exact singin={this.props.signin} component={Home} />
                <Route path = '/new-question' singin={this.props.signin} component={NewQuestion}/>
                <Route path = '/leader-board' singin={this.props.signin} component={LeaderBoard}/>
                <Route path = '/poll-results/:id' singin={this.props.signin} component={PollResultsPage}/>
            </div>
        )
    }
}


export default Pages 