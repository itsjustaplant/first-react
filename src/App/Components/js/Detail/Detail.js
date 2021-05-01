import "../../css/Detail/Detail.css"
import React from "react"
import {useHistory, useParams} from "react-router-dom";
import CountryBar from "./CountryBar";
import InfoBox from "./InfoBox";

function hookedCountry(Component) {
    return function WrappedComponent(props) {
        const countryID = useParams();
        const history = useHistory();
        return <Component {...props} id={countryID} history={history}/>;
    }
}

class Detail extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            countryID: this.props.id,
            history: this.props.history
        }
        this.handleURL = this.handleURL.bind(this)
    }

    handleURL(event){
        const obj = {id: event.target.innerHTML}
        this.setState({countryID: obj})
    }

    render() {
        console.log(this.state.history)
        return (
            <div className={"detail"}>
                <CountryBar history={this.state.history}/>
                <InfoBox countryID={this.state.countryID} handleURL={this.handleURL}/>
            </div>
        )
    }
}

export default hookedCountry(Detail);