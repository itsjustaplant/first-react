import "../../css/Home/Navbar.css"
import React from "react"
import ModeSwitch from "./ModeSwitch"


export default class Navbar extends React.Component{
    render() {
        return (
          <div className={"navbar"}>
              <div className={"navbar__title"}>
                  <a className={"navbar__title__link"} href={"/"}>Where in the world</a>
              </div>
              <div className={"navbar__switch"}>
                <ModeSwitch/>
              </div>
          </div>
        );
    }
}