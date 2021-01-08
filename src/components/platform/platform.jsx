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

import Comet_Loans_Planet from "../../assets/Comet_Loans_Planet.png";
import Cover_Planet from "../../assets/Cover_Planet.png";
import Earn_Planet from "../../assets/Earn_Planet.png";
import Luna_Vault_Planet from "../../assets/Luna_Vault_Planet.png";
import Stats_Planet from "../../assets/Stats_Planet.png";
import Apr_Planet from "../../assets/Apr_Planet.png";

import Comet_Loans_Icon from "../../assets/Comet.png";
import Cover_Icon from "../../assets/cover.png";
import Earn_Icon from "../../assets/earn.png";
import Luna_Vault_Icon from "../../assets/Luna Vault.png";
import Stats_Icon from "../../assets/stats.png";
import Apr_Icon from "../../assets/apr.png";

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

  logo: {
    display: "flex",
    width: "100%",

    "& img": {
      maxHeight: "107px",
      marginLeft: "20px",
      cursor: "pointer",
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
    },
  },

  circle: {
    borderRadius: "50%",
    width: "50px",
    height: "50px",
    display: "inline-block",
    position: "absolute",
    textAlign: "center",
  },

  big: {
    width: "150px",
    height: "150px",
  },

  one: {
    left: "20%",
    top: "15%",
    height: "200px",
    width: "200px",
    cursor: "pointer",

    backgroundImage: `url(${Comet_Loans_Planet})`,
    backgroundPosition: "center",
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",

    "& img": {
      height: "57%",
      marginTop: "50px",
    },

    "&:hover": {
      height: "324px",
      width: "324px",
    },
  },

  two: {
    left: "42%",
    top: "3%",
    height: "200px",
    width: "200px",
    cursor: "pointer",

    backgroundImage: `url(${Cover_Planet})`,
    backgroundPosition: "center",
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",

    "& img": {
      height: "63%",
      marginTop: "25px",
    },

    "&:hover": {
      left: "38%",
      height: "324px",
      width: "324px",
    },
  },

  three: {
    right: "25%",
    top: "15%",
    height: "200px",
    width: "200px",
    cursor: "pointer",

    backgroundImage: `url(${Earn_Planet})`,
    backgroundPosition: "center",
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",

    "& img": {
      height: "67%",
      marginTop: "32px",
    },

    "&:hover": {
      height: "324px",
      width: "324px",
    },
  },

  four: {
    left: "20%",
    bottom: "16%",
    height: "200px",
    width: "200px",
    cursor: "pointer",

    backgroundImage: `url(${Luna_Vault_Planet})`,
    backgroundPosition: "center",
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",

    "& img": {
      height: "63%",
      marginTop: "20px",
    },

    "&:hover": {
      height: "324px",
      width: "324px",
    },
  },

  five: {
    left: "42%",
    bottom: "3%",

    height: "200px",
    width: "200px",
    cursor: "pointer",

    backgroundImage: `url(${Stats_Planet})`,
    backgroundPosition: "center",
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",

    "& img": {
      height: "65%",
      marginTop: "25px",
    },

    "&:hover": {
      left: "38%",
      height: "324px",
      width: "324px",
    },
  },

  six: {
    right: "25%",
    bottom: "15%",
    height: "200px",
    width: "200px",
    cursor: "pointer",

    backgroundImage: `url(${Apr_Planet})`,
    backgroundPosition: "center",
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",

    "& img": {
      height: "65%",
      marginTop: "30px",
    },

    "&:hover": {
      height: "324px",
      width: "324px",
    },
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

        <div class="stars">
          <img src={Stars} alt="Stars_Icon" />
        </div>

        <a
          onClick={() => {
            this.nav("zap");
          }}
        >
          <div className={`${classes.circle} ${classes.one}`}>
            <img src={Comet_Loans_Icon} alt="Comet_Loans_Icon" />
          </div>
        </a>
        <a
        /*onClick={() => {
              this.nav("cover");
            }}*/
        >
          <div className={`${classes.circle} ${classes.two}`}>
            <img src={Cover_Icon} alt="Cover_Icon" />
          </div>
        </a>
        <a
          onClick={() => {
            this.nav("earn");
          }}
        >
          <div className={`${classes.circle} ${classes.three}`}>
            <img src={Earn_Icon} alt="Earn_Icon" />
          </div>
        </a>
        <a
          onClick={() => {
            this.nav("vaults");
          }}
        >
          <div className={`${classes.circle} ${classes.four}`}>
            <img src={Luna_Vault_Icon} alt="Luna_Vault_Icon" />
          </div>
        </a>
        <a
          onClick={() => {
            this.nav("stats");
          }}
        >
          <div className={`${classes.circle} ${classes.five}`}>
            <img src={Stats_Icon} alt="Stats_Icon" />
          </div>
        </a>
        <a
          onClick={() => {
            this.nav("dashboard");
          }}
        >
          <div className={`${classes.circle} ${classes.six}`}>
            <img src={Apr_Icon} alt="Apr_Icon" />
          </div>
        </a>

        {/*<Card
          className={`${classes.card} ${classes.apr}`}
          onClick={() => {
            this.nav("dashboard");
          }}
        >
          <BarChartIcon className={`${classes.icon} icon`} />
          <Typography variant={"h3"} className={`${classes.title} title`}>
            Dashboard
          </Typography>
          <Typography
            variant={"h4"}
            className={`${classes.description} description`}
          >
            {
              "Get a quick glance at how your portfolio is growing while invested in yearn's products."
            }
          </Typography>
        </Card>*/}
      </div>
    );
  }

  nav = (screen) => {
    this.props.history.push(screen);
  };
}

export default withNamespaces()(withRouter(withStyles(styles)(Platform)));
