import React, { Component } from "react";
import { slide as Menu } from "react-burger-menu";
import { withStyles } from "@material-ui/core/styles";
import { withRouter } from "react-router-dom";
import { Typography } from "@material-ui/core";
import { colors } from "../../theme";

/*export default (props) => {
  return (
    // Pass on our props
    <Menu {...props}>
      <a className="menu-item" href="/">
        Home
      </a>

      <a className="menu-item" href="/burgers">
        Burgers
      </a>

      <a className="menu-item" href="/pizzas">
        Pizzas
      </a>

      <a className="menu-item" href="/desserts">
        Desserts
      </a>
    </Menu>
  );
};*/

const styles = (theme) => ({
  link: {
    width: "60%",
    color: colors.white,
    minWidth: "80px",
    textAlign: "center",
    padding: "12px 0px",
    margin: "0px 20px",
    cursor: "pointer",
    "&:hover": {
      paddingBottom: "9px",
      borderBottom: "3px solid rgba(255, 255, 255, 0.6)",
    },
  },
  linkActive: {
    width: "60%",
    color: colors.white,
    minWidth: "80px",
    textAlign: "center",
    padding: "12px 0px",
    margin: "0px 20px",
    cursor: "pointer",
    paddingBottom: "9px",
    borderBottom: "3px solid rgba(255, 255, 255, 0.6)",
  },
  downloadFile: {
    color: colors.white,
    textDecoration: "none",
    fontSize: "16px",
    fontWeight: "600",
  },
  title: {
    marginLeft: "10px",
  },
});

class SideBar extends Component {
  constructor(props) {
    super();

    this.state = {
      menuOpen: false,
    };
  }

  handleStateChange(state) {
    this.setState({ menuOpen: state.isOpen });
  }

  closeMenu() {
    this.setState({ menuOpen: false });
  }

  render() {
    const { classes } = this.props;
    return (
      <Menu
        isOpen={this.state.menuOpen}
        onStateChange={(state) => this.handleStateChange(state)}
      >
        {this.renderLink("dashboard")}
        {this.renderLink("vaults")}
        {this.renderLink("earn")}
        {/*this.renderLink("staking")*/}
        {this.renderLink("zap")}
        {this.renderLink("stats")}
        {this.renderLink("cover")}
      </Menu>
    );
  }

  renderLink = (screen) => {
    const { classes } = this.props;

    if (screen !== "staking") {
      return (
        <div
          className={
            window.location.pathname === "/" + screen
              ? classes.linkActive
              : classes.link
          }
          onClick={() => {
            this.nav(screen);
          }}
        >
          <img
            alt=""
            src={require("../../assets/Header_" + screen + ".png")}
            height={"30px"}
          />
          <Typography variant={"h3"} className={classes.title}>
            {screen}
          </Typography>
        </div>
      );
    } else {
      return (
        <div
          className={
            window.location.pathname === "/" + screen
              ? classes.linkActive
              : classes.link
          }
        >
          <a href="/staking" className={classes.downloadFile}>
            <img
              alt=""
              src={require("../../assets/Header_" + screen + ".png")}
              height={"30px"}
            />
            <Typography variant={"h3"} className={classes.title}>
              {screen}
            </Typography>
          </a>
        </div>
      );
    }
  };

  nav = (screen) => {
    this.closeMenu();
    this.props.history.push("/" + screen);
  };
}

export default withRouter(withStyles(styles)(SideBar));
