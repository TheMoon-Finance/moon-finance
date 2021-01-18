import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import { withStyles } from "@material-ui/core/styles";
import { Card, Typography } from "@material-ui/core";
import { withNamespaces } from "react-i18next";
import { colors } from "../../theme";
import FlashOnIcon from "@material-ui/icons/FlashOn";
import AttachMoneyIcon from "@material-ui/icons/AttachMoney";
import BarChartIcon from "@material-ui/icons/BarChart";
import PieChartIcon from "@material-ui/icons/PieChart";
import SecurityIcon from "@material-ui/icons/Security";

import Background from "../../assets/Background.png";
import Logo from "../../assets/Logo.png";
import Stars from "../../assets/Stars.png";

import Comet_Loans_Icon from "../../assets/Header_zap.png";
import Cover_Icon from "../../assets/Header_cover.png";
import Earn_Icon from "../../assets/Header_earn.png";
import Luna_Vault_Icon from "../../assets/Header_vaults.png";
import Stats_Icon from "../../assets/Header_stats.png";
import Apr_Icon from "../../assets/Header_dashboard.png";

import "./platformStyle.scss";

const styles = (theme) => ({
  root: {
    backgroundImage: `url(${Background})`,
    backgroundPosition: "center",
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    flex: 1,
    display: "flex",
    width: "100%",
    justifyContent: "space-around",
    alignItems: "center",
    flexDirection: "column",
  },
  card: {
    flex: "1",
    height: "25vh",
    width: "100%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column",
    cursor: "pointer",
    borderRadius: "0px",
    transition: "background-color 0.2s linear",
    [theme.breakpoints.up("sm")]: {
      height: "100vh",
      minHeight: "50vh",
    },
  },

  title: {
    padding: "24px",
    paddingBottom: "0px",
    [theme.breakpoints.up("sm")]: {
      paddingBottom: "24px",
    },
  },
  icon: {
    fontSize: "60px",
    [theme.breakpoints.up("sm")]: {
      fontSize: "100px",
    },
  },
  link: {
    textDecoration: "none",
  },

  //styles
  container: {
    [theme.breakpoints.up("md")]: {
      marginRight: "90px",
    },

    [theme.breakpoints.down(900)]: {
      marginTop: "100px",
    },
  },

  logo: {
    display: "flex",
    width: "100%",
    position: "absolute",
    top: "0",
    padding: "20px",

    "& img": {
      maxHeight: "107px",
      cursor: "pointer",
    },

    [theme.breakpoints.down("900")]: {
      justifyContent: "center",
    },
  },

  socials: {
    display: "flex",
    marginRight: "0",
    marginLeft: "auto",
    paddingTop: "34px",
    paddingRight: "34px",

    "& img": {
      cursor: "pointer",
      fill: colors.white,
      marginLeft: "20px",
    },

    [theme.breakpoints.down("900")]: {
      display: "none",
    },
  },

  row: {
    display: "flex",
    textAlign: "center",
    justifyContent: "center",

    "& img": {
      display: "inline-block",
      textAlign: "center",
      cursor: "pointer",
      borderRadius: "50%",
      [theme.breakpoints.up("md")]: {
        margin: "0 50%",
      },

      [theme.breakpoints.down("900")]: {
        margin: "20px 0",
      },

      "&:hover": {
        boxShadow: "3px 3px 6px #0f2a47",
      },
    },

    [theme.breakpoints.down(900)]: {
      flexDirection: "column",
    },
  },

  between: {
    [theme.breakpoints.up("md")]: {
      marginTop: "60px",
    },
  },

  figureContainer: {
    display: "flex",
    justifyContent: "center",
    margin: "0 50%",
    cursor: "pointer",
  },
});

class Platform extends Component {
  constructor(props) {
    super();

    this.state = {};
  }

  render() {
    const { classes, t, location } = this.props;

    return (
      <div className={classes.root}>
        <div className={`${classes.logo}`}>
          <img
            onClick={() => {
              this.nav("/");
            }}
            src={Logo}
            alt="Logo_Icon"
            style={{ maxHeight: "107px", maxWidth: "100%" }}
          />

          <div className={classes.socials}>
            <div
              className={classes.link}
              onClick={() =>
                window.open("https://twitter.com/finance_moon", "_blank")
              }
            >
              <img
                alt=""
                src={require("../../assets/twitter_white.svg")}
                height="50px"
                className={classes.icon}
              />
            </div>
            <div
              className={classes.link}
              onClick={() =>
                window.open(
                  "https://medium.com/@themoonfinance74/introduction-to-the-moon-finance-add764c104b3",
                  "_blank"
                )
              }
            >
              <img
                alt=""
                src={require("../../assets/medium_white.svg")}
                height="50px"
                className={classes.icon}
              />
            </div>

            <div
              className={classes.link}
              onClick={() =>
                window.open("https://t.me/themoonfinance", "_blank")
              }
            >
              <img
                alt=""
                src={require("../../assets/telegram_white.svg")}
                height="50px"
                className={classes.icon}
              />
            </div>
            <div
              className={classes.link}
              onClick={() =>
                window.open("https://github.com/TheMoon-Finance", "_blank")
              }
            >
              <img
                alt=""
                src={require("../../assets/github_white.svg")}
                height="50px"
                className={classes.icon}
              />
            </div>
          </div>
        </div>

        <div className={classes.container}>
          {/*<div class="stars">
            <img src={Stars} alt="Stars_Icon" style={{ maxWidth: "100%" }} />
          </div>*/}
          <div className={classes.row}>
            <img
              onClick={() => {
                this.nav("zap");
              }}
              src={Comet_Loans_Icon}
              alt="Comet_Loans_Icon"
              height="200px"
            />
          </div>

          <div className={classes.row}>
            <img
              /*onClick={() => {
                this.nav("cover");
              }}*/ src={
                Cover_Icon
              }
              alt="Cover_Icon"
              height="200px"
            />

            <img
              onClick={() => {
                this.nav("earn");
              }}
              src={Earn_Icon}
              alt="Earn_Icon"
              height="200px"
            />
          </div>

          <div className={`${classes.row} ${classes.between}`}>
            <img
              onClick={() => {
                this.nav("vaults");
              }}
              src={Luna_Vault_Icon}
              alt="Luna_Vault_Icon"
              height="200px"
            />

            <img
              onClick={() => {
                this.nav("stats");
              }}
              src={Stats_Icon}
              alt="Stats_Icon"
              height="200px"
            />
          </div>

          <div className={classes.row}>
            <img
              onClick={() => {
                this.nav("dashboard");
              }}
              src={Apr_Icon}
              alt="Apr_Icon"
              height="200px"
            />
          </div>
        </div>
      </div>
    );
  }

  nav = (screen) => {
    this.props.history.push(screen);
  };
}

export default withNamespaces()(withRouter(withStyles(styles)(Platform)));
