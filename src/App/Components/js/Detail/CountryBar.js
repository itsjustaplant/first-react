import "../../css/Detail/CountryBar.css"
import React from "react"

export default class CountryBar extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            history: this.props.history
        }
    }
    render() {
        return(
            <div className={"country__bar"}>
                <button onClick={this.state.history.goBack}>
                    <ion-icon name="arrow-back-outline"></ion-icon>
                    Back
                </button>
            </div>
        )
    }
}