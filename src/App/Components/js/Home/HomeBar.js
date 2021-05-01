import "../../css/Home/HomeBar.css"
import React from "react"

export default class HomeBar extends React.Component{
    constructor(props) {
        super(props);
        this.state = {selector: ''};
        this.handleChange = this.handleChange.bind(this);
        this.handleSearch = this.handleSearch.bind(this)
    }

    handleChange(event) {
        this.setState({selector: event.target.value});
        this.props.handleSelect(event)
    }

    handleSearch(event){
        this.props.handleSearch(event)
    }

    render() {
        return (
            <div className={"home__bar"}>
                <div className={"bar__search"}>
                    <ion-icon name="search-sharp"></ion-icon>
                    <input type={"text"} placeholder={"Search for a country"} onChange={this.handleSearch}/>
                </div>
                <select className={"bar__select"} onChange={this.props.handleSelect}>
                    <option value="">World</option>
                    <option value="Africa">Africa</option>
                    <option value="Americas">America</option>
                    <option value="Asia">Asia</option>
                    <option value="Europe">Europe</option>
                    <option value="Oceania">Oceania</option>
                </select>
            </div>
        )
    }
}