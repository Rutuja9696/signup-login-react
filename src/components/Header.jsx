import React, { Component } from "react";
import headerStyles from "../styles/Header.module.css";

class Header extends Component {
  render() {
    return (
      <div className={headerStyles.header}>
        <div className={headerStyles.container}>
          <div id={headerStyles.logo}>
            <div id={headerStyles.titlePart}>
              <img alt="logo" />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Header;
