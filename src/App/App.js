import './App.css';
import Navbar from './Components/js/Home/Navbar'
import Home from "./Components/js/Home/Home";
import Detail from "./Components/js/Detail/Detail";
import React from "react";
import {BrowserRouter as Router, Route,} from "react-router-dom";
import {AnimatedSwitch, spring} from 'react-router-transition';

export default class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            history: []
        }
        this.handleHistory = this.handleHistory.bind(this)
    }

    handleHistory(value) {
        this.setState({history: value})
    }

    render() {
        function bounce(val) {
            return spring(val, {
                stiffness: 330,
                damping: 22,
            });
        }

        const bounceTransition = {
            // start in a transparent, upscaled state
            atEnter: {
                opacity: 0,
                scale: 1.2,
            },
            // leave in a transparent, downscaled state
            atLeave: {
                opacity: bounce(0),
                scale: bounce(0.8),
            },
            // and rest at an opaque, normally-scaled state
            atActive: {
                opacity: bounce(1),
                scale: bounce(1),
            },
        };
        return (
            <div>
                <Navbar> </Navbar>
                <Router>
                    <AnimatedSwitch
                        atEnter={bounceTransition.atEnter}
                        atLeave={bounceTransition.atLeave}
                        atActive={bounceTransition.atActive}
                    >
                        <Route path={"/:id"}>
                            <Detail history={this.state.history}/>
                        </Route>
                        <Route path="/">
                            <div className="App">
                                <Home handleHistory={this.handleHistory}> </Home>
                            </div>
                        </Route>
                    </AnimatedSwitch>
                </Router>
            </div>
        );
    }
}
