import "../../css/Home/Home.css"
import HomeBar from "./HomeBar";
import CountryList from "./CountryList";
import React from "react"
import {useHistory} from "react-router-dom";

function hookedHome(Component) {
    return function WrappedComponent(props) {
        const history = useHistory();
        return <Component {...props} history={history} />;
    }
}

class Home extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            selector: '',
            search: ''
        }
        this.handleChange = this.handleChange.bind(this)
        this.handleSearch = this.handleSearch.bind(this)
        this.handleHistory = this.handleHistory.bind(this)
    }

    handleChange(event){
        this.setState({selector: event.target.value})
    }

    handleSearch(event){
        this.setState({search: event.target.value})
    }
    handleHistory(){
        this.props.handleHistory (this.props.history)
    }
    componentDidMount() {
        this.handleHistory()
    }

    render() {
        return (
            <div className={"home"}>
                <HomeBar handleSelect={this.handleChange} handleSearch={this.handleSearch}>

                </HomeBar>
                <CountryList selector={this.state.selector} search ={this.state.search}>

                </CountryList>
            </div>
        )
    }
}
export default hookedHome(Home)