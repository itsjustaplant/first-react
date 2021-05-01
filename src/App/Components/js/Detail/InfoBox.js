import "../../css/Detail/InfoBox.css"
import React from "react"
import {Link, Route} from "react-router-dom";

const BASE_URL = "https://restcountries.eu/rest/v2/alpha/";

export default class InfoBox extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            countryID: this.props.id,
            flag: "",
            nativeName: "",
            population: "",
            region: "",
            subRegion: "",
            capital: "",
            topLvlDomain: "",
            currencies: [],
            languages: [],
            borderCountries: [],
            filled: 0
        }
    }

    componentDidMount() {
        const countryID = this.props.countryID.id
        fetch(BASE_URL+ countryID)
            .then(response => response.json())
            .then(data => {
                this.setState(
                    {
                        name : data.name,
                        flag : data.flag,
                        nativeName : data.nativeName,
                        population : data.population,
                        region : data.region,
                        subRegion: data.subregion,
                        capital : data.capital,
                        topLvlDomain : data.topLevelDomain[0],
                        currencies : data.currencies,
                        languages : data.languages,
                        borderCountries : data.borders,
                        filled: 1
                    }
                )
            })
    }
    componentDidUpdate(prevProps, prevState, snapshot) {
        const countryID = this.props.countryID.id
        fetch(BASE_URL+ countryID)
            .then(response => response.json())
            .then(data => {
                this.setState(
                    {
                        name : data.name,
                        flag : data.flag,
                        nativeName : data.nativeName,
                        population : data.population,
                        region : data.region,
                        subRegion: data.subregion,
                        capital : data.capital,
                        topLvlDomain : data.topLevelDomain[0],
                        currencies : data.currencies,
                        languages : data.languages,
                        borderCountries : data.borders,
                        filled: 1
                    }
                )
            })
    }

    render() {
        let currency = ""
        let languages = ""
        let lSize = 0

        if(this.state.filled){
            currency = this.state.currencies[0].code
            lSize = this.state.languages.length
        }

        if(lSize){
            for (let i = 0; i < lSize; i++){
                languages += this.state.languages[i].name
                languages += ", "
            }
        }

        return(
            <Route>
            <div className={"detail__info"}>
                <div className={"info__flag"}>
                    <img alt={"flag"} src={this.state.flag}/>
                </div>
                <div className={"info__box"}>
                    <div className={"box__top"}>
                        <h1 className={"detail__name"}>{this.state.name}</h1>
                    </div>
                    <div className={"box__left"}>
                        <strong>Native Name: </strong><span className={"detail__data"}>{this.state.nativeName}</span><br/>
                        <strong>Population: </strong><span className={"detail__data"}>{this.state.population}</span><br/>
                        <strong>Region: </strong><span className={"detail__data"}>{this.state.region}</span><br/>
                        <strong>Sub Region: </strong><span className={"detail__data"}>{this.state.subRegion}</span><br/>
                        <strong>Capital: </strong><span className={"detail__data"}>{this.state.capital}</span><br/>
                    </div>
                    <div className={"box__right"}>
                        <strong>Top Level Domain: </strong><span className={"detail__data"}>{this.state.topLvlDomain}</span><br/>
                        <strong>Currencies: </strong><span className={"detail__data"}>{currency}</span><br/>
                        <strong>Languages: </strong><span className={"detail__data"}>{languages}</span><br/>
                    </div>
                    <div className={"box__bot"}>
                        <h1>Border Countries:</h1>
                        <ul className={"box__list"}>
                            {this.state.borderCountries.map(country => (
                                <Link onClick={this.props.handleURL} className={"list__link"} to={country} style={{textDecoration:"none"}}>
                                    {country}
                                </Link>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>
            </Route>
        )
    }
}