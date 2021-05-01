import "../../css/Home/CountryList.css"
import "./HomeBar"
import React from "react"
import {
    Route,
    Link,
} from "react-router-dom";

const BASE_URL = "https://restcountries.eu/rest/v2/";

export default class CountryList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            countries: [],
            selector: "",
        }
    }

    componentDidMount() {
        fetch(BASE_URL + "all")
            .then(response => response.json())
            .then(data => {
                this.setState({countries: data})
            })
    }

    render() {
        return (this.props.selector === '') ?
            (
                <Route>
                    <ul className={"home__list"}>
                        {this.state.countries.filter(country => country.name.toLowerCase().includes(this.props.search.toLowerCase()))
                            .map(filteredCountry => (
                                <Link to={filteredCountry.alpha3Code} style={{textDecoration:"none"}}>
                                <div key={filteredCountry.name} className={"list__country"}>
                                    <img alt={"flag"} className={"country__flag"} src={filteredCountry.flag}/>
                                    <h3 className={"country__name"}>{filteredCountry.name}</h3>
                                    <strong>Population: </strong><span className={"country__data"}>{filteredCountry.population}</span><br/>
                                    <strong>Region: </strong><span className={"country__data"}>{filteredCountry.region}</span><br/>
                                    <strong>Capital: </strong><span className={"country__data"}>{filteredCountry.capital}</span><br/>
                                </div>
                                </Link>
                            ))}
                    </ul>
                </Route>
            )
            :
            (
                <Route>
                <ul className={"home__list"}>
                    {this.state.countries.filter(country => country.region === this.props.selector)
                        .filter(fcountry => fcountry.name.toLowerCase().includes(this.props.search.toLowerCase()))
                        .map(filteredCountry => (
                            <Link to={filteredCountry.alpha3Code} style={{textDecoration:"none"}}>
                                <div key={filteredCountry.name} className={"list__country"}>
                                    <img alt={"flag"} className={"country__flag"} src={filteredCountry.flag}/>
                                    <h3 className={"country__name"}>{filteredCountry.name}</h3>
                                    <strong>Population: </strong><span className={"country__data"}>{filteredCountry.population}</span><br/>
                                    <strong>Region: </strong><span className={"country__data"}>{filteredCountry.region}</span><br/>
                                    <strong>Capital: </strong><span className={"country__data"}>{filteredCountry.capital}</span><br/>
                                </div>
                            </Link>
                        ))}
                </ul>
                </Route>
            )
    }
}